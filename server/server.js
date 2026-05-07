


import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import storyRoutes from "./routes/storyRoutes.js";
import scraperRoutes from "./routes/scraperRoutes.js";

import scrapeHackerNews from "./scraper/scrapeHackerNews.js";

dotenv.config();

connectDB();

const app = express();

// miidleware 

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://hacker-news-app-git-main-dharmusisri245s-projects.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());



app.get("/", (req, res) => {
  res.send("API Running...");
});

app.use("/api/auth", authRoutes);

app.use("/api/stories", storyRoutes);

app.use("/api/scrape", scraperRoutes);



const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);

  // Run scraper automatically when server starts
  await scrapeHackerNews();
});