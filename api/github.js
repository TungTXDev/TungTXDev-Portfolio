import express from "express";
import fetch from "node-fetch";

const router = express.Router();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "TungTXDev";

// Cache
let githubCachedData = { data: null, timestamp: 0 };
const CACHE_DURATION = 5 * 60 * 1000;

// Route: GET /api/github/contributions
router.get("/contributions", async (req, res) => {
  try {
    const now = Date.now();

    if (
      githubCachedData.data &&
      now - githubCachedData.timestamp < CACHE_DURATION
    ) {
      return res.json({ ...githubCachedData.data, cached: true });
    }

    if (!GITHUB_TOKEN) {
      return res.status(500).json({ error: "Missing GITHUB_TOKEN in env" });
    }

    const query = `
query($username: String!) {
  user(login: $username) {
    name
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
            color
          }
        }
      }
      commitContributionsByRepository(maxRepositories: 10) {
        repository {
          name
          url
          isPrivate
        }
        contributions {
          totalCount
        }
      }
      repositoryContributions(first: 10) {
        nodes {
          repository {
            name
            url
            createdAt
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
  }
}
`;


    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables: { username: GITHUB_USERNAME } }),
    });

    const json = await response.json();
    if (json.errors) throw new Error(json.errors[0].message);

    const data = json.data.user.contributionsCollection;
    githubCachedData = { data, timestamp: now };
    res.json({ ...data, cached: false });
  } catch (error) {
    console.error("Error fetching GitHub data:", error.message);
    res.status(500).json({ error: "Failed to fetch GitHub contributions" });
  }
});

export default router;
