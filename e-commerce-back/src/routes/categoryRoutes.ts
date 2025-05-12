import { Router } from "express";
const router = Router();
import find from "../models/category";

router.get("/", async (req, res) => {
  try {
    const categories = await find.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
