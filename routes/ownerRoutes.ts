import express, { Router } from "express";
import {
  getOwner,
  createOwner,
  updateOwner,
  deleteOwner,
} from "../controllers/ownerController";

const router: Router = express.Router();

// Owner routes
router.get("/", getOwner);
router.post("/", createOwner);
router.put("/:id", updateOwner);
router.delete("/:id", deleteOwner);

export default router;
