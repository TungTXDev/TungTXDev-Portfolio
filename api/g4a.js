import express from "express";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

const router = express.Router();

// ==========================================
// Setup GA Client
// ==========================================
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

// Cache
let gaCachedData = { count: 0, timestamp: 0 };
const CACHE_DURATION = 5 * 60 * 1000; // 5 phút

// Route: GET /api/ga/visitor-count
router.get("/visitor-count", async (req, res) => {
  try {
    const now = Date.now();

    if (
      gaCachedData.timestamp &&
      now - gaCachedData.timestamp < CACHE_DURATION
    ) {
      return res.json({ count: gaCachedData.count, cached: true });
    }

    const [response] = await analyticsDataClient.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [{ startDate: "2020-01-01", endDate: "today" }],
      metrics: [{ name: "screenPageViews" }],
    });

    let count = parseInt(response.rows?.[0]?.metricValues?.[0]?.value || 0);

    if (count === 0) count = 4; // fallback nếu chưa có traffic

    gaCachedData = { count, timestamp: now };

    res.json({ count, cached: false });
  } catch (error) {
    console.error("Error fetching GA data:", error.message);
    res.status(500).json({ error: "Failed to fetch visitor count" });
  }
});

export default router;
