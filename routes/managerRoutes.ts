import express, { Router } from "express";
import {
  getAllManagers,
  getManagerById,
  createManager,
  updateManager,
  deleteManager,
} from "../controllers/managerController";

const router: Router = express.Router();

// Manager routes
router.get("/", getAllManagers);
router.get("/:id", getManagerById);
router.post("/", createManager);
router.put("/:id", updateManager);
router.delete("/:id", deleteManager);

export default router;
