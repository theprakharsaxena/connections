import express, { Application, Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import ownerRoutes from "./routes/ownerRoutes";
import managerRoutes from "./routes/managerRoutes";
import instituteRoutes from "./routes/instituteRoutes";
import adminRoutes from "./routes/adminRoutes";
import teacherRoutes from "./routes/teacherRoutes";
import studentRoutes from "./routes/studentRoutes";
import postRoutes from "./routes/postRoutes";
import jobRoutes from "./routes/jobRoutes";

// Initialize Express app
const app: Application = express();

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://prakharsaxena5125:4JHj0VPzB1CyzUS9@cluster0.5ah5v6p.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    } as mongoose.ConnectOptions
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.error("MongoDB connection error:", err));

// Middleware
app.use(helmet()); // Helmet middleware for security headers
app.use(compression()); // Compression middleware for gzip compression
app.use(cors()); // CORS middleware for handling cross-origin requests
app.use(bodyParser.json()); // Body parser middleware for JSON requests

// Routes
app.use("/api/owner", ownerRoutes);
app.use("/api/manager", managerRoutes);
app.use("/api/institute", instituteRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/teacher", teacherRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/post", postRoutes);
app.use("/api/job", jobRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start server
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
