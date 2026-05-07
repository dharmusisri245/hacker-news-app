import express from "express";

import { runScraper } from "../controller/scraperController.js";

const router = express.Router();

router.post("/", runScraper);

export default router;