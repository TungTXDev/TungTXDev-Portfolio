import express from "express";
import cors from "cors";
import gaRoutes from "./api/g4a.js";
import githubRoutes from "./api/github.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Mount route riêng biệt
app.use("/api/ga", gaRoutes); 
app.use("/api/github", githubRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
