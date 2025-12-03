// Backend API example (Node.js + Express)
// File: api/analytics.js

const { BetaAnalyticsDataClient } = require('@google-analytics/data');

const analyticsDataClient = new BetaAnalyticsDataClient({
  keyFilename: 'path/to/service-account-key.json'
});

async function getVisitorCount() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/YOUR_PROPERTY_ID`,
    dateRanges: [
      {
        startDate: '2020-01-01',
        endDate: 'today',
      },
    ],
    metrics: [
      {
        name: 'activeUsers',
      },
    ],
  });

  return response.rows[0].metricValues[0].value;
}

// Express endpoint
app.get('/api/visitor-count', async (req, res) => {
  try {
    const count = await getVisitorCount();
    res.json({ count: parseInt(count) });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch visitor count' });
  }
});
