import express from 'express';
import cors from 'cors';
import { BetaAnalyticsDataClient } from '@google-analytics/data';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Google Analytics Data API client
const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GA_CLIENT_EMAIL,
    private_key: process.env.GA_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
});

const PROPERTY_ID = process.env.GA_PROPERTY_ID;

// Cache để tránh gọi API quá nhiều
let cachedData = {
  count: 0,
  timestamp: 0,
};
const CACHE_DURATION = 5 * 60 * 1000; // 5 phút

// Endpoint lấy số lượng visitors
app.get('/api/visitor-count', async (req, res) => {
  try {
    // Kiểm tra cache
    const now = Date.now();
    if (cachedData.timestamp && now - cachedData.timestamp < CACHE_DURATION) {
      return res.json({ count: cachedData.count, cached: true });
    }

    // Gọi Google Analytics API
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: '2020-01-01', // Hoặc ngày bạn bắt đầu tracking
          endDate: 'today',
        },
      ],
      metrics: [
        {
          name: 'totalUsers', // Tổng số users
        },
      ],
    });

    const count = parseInt(response.rows?.[0]?.metricValues?.[0]?.value || 0);

    // Cập nhật cache
    cachedData = {
      count,
      timestamp: now,
    };

    res.json({ count, cached: false });
  } catch (error) {
    console.error('Error fetching analytics data:', error);
    res.status(500).json({ 
      error: 'Failed to fetch visitor count',
      message: error.message 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Analytics API server running on port ${PORT}`);
});
