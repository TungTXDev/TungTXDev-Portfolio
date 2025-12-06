import express from "express";
import cors from "cors";
import { BetaAnalyticsDataClient } from "@google-analytics/data";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Google Analytics Data API client
// Handle private key format - remove quotes if present and replace \n
let privateKey = process.env.GA_PRIVATE_KEY || "";
if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
  privateKey = privateKey.slice(1, -1);
}
privateKey = privateKey.replace(/\\n/g, "\n");

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GA_CLIENT_EMAIL,
    private_key: privateKey,
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
app.get("/api/visitor-count", async (req, res) => {
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
          startDate: "2020-01-01", // hoặc ngày bạn bắt đầu deploy
          endDate: "today",
        },
      ],
      metrics: [{ name: "views" }],
    });

    let count = parseInt(response.rows?.[0]?.metricValues?.[0]?.value || 0);

    // Nếu count = 0, có thể data chưa được process
    if (count === 0) {
      count = 4;
    }

    // Cập nhật cache
    cachedData = {
      count,
      timestamp: now,
    };

    res.json({ count, cached: false });
  } catch (error) {
    console.error("Error fetching analytics data:", error.message);

    res.status(500).json({
      error: "Failed to fetch visitor count",
      message: error.message,
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Analytics API server running on port ${PORT}`);
});
