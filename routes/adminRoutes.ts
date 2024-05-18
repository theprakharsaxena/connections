import express, { Router } from "express";
import { login, createAdmin } from "../controllers/adminController";

const router: Router = express.Router();

// Admin login route
router.post("/login", login);

// Admin create route
router.post("/create", createAdmin);

export default router;
