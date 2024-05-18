import Admin from "../models/Admin";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Request, Response } from "express"; // Importing Request and Response types from express

export = {
  login: async (req: Request, res: Response) => {
    // Adding types for req and res parameters
    const { username, email, password } = req.body;

    try {
      // Check if admin exists with the provided username or email
      const admin = await Admin.findOne({ $or: [{ username }, { email }] });

      if (!admin) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }

      // Check password using bcrypt.compare
      const isMatch = await bcrypt.compare(password, admin?.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }

      const payload = {
        admin: {
          id: admin._id,
        },
      };

      jwt.sign(
        payload,
        process.env.jwtSecret,
        { expiresIn: 10800 },
        (err: Error | null, token?: string) => {
          // Adding types for err and token parameters
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err?.message);
      res.status(500).send("Server Error");
    }
  },

  createAdmin: async (req: Request, res: Response) => {
    // Adding types for req and res parameters
    const { username, password, email, name } = req.body;

    try {
      // Check if admin with provided email already exists
      let existingAdmin = await Admin.findOne({ email });
      if (existingAdmin) {
        return res
          .status(400)
          .json({ msg: "Admin with this email already exists" });
      }

      // Check if admin with provided username already exists
      existingAdmin = await Admin.findOne({ username });
      if (existingAdmin) {
        return res
          .status(400)
          .json({ msg: "Admin with this username already exists" });
      }

      const admin = new Admin({
        username,
        password,
        email,
        name,
      });

      await admin.save();

      res.json({ msg: "Admin created successfully" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },
};
