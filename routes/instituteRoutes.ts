import express, { Router } from "express";
import {
  getAllInstitutes,
  getInstituteById,
  createInstitute,
  updateInstitute,
  deleteInstitute,
} from "../controllers/instituteController";

const router: Router = express.Router();

// Institute routes
router.get("/", getAllInstitutes);
router.get("/:id", getInstituteById);
router.post("/", createInstitute);
router.put("/:id", updateInstitute);
router.delete("/:id", deleteInstitute);

export default router;
