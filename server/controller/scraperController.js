import scrapeHackerNews from "../scraper/scrapeHackerNews.js";

export const runScraper = async (req, res) => {
  try {
    await scrapeHackerNews();

    res.json({
      message: "Scraping completed",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};