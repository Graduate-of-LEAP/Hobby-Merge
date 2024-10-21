import { Router } from "express";

import {
  createCategory,
  deleteCategory,
  getCategories,
} from "../controllers/category";

const categoryRouter = Router();

categoryRouter
  .post("/", createCategory)
  .get("/", getCategories)
  .delete("/:id", deleteCategory);

export default categoryRouter;
