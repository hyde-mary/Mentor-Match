import express, { Request, Response } from "express";
import Account from "../models/Account";

const router = express.Router();

// Create account
router.post("/", async (req: Request, res: Response) => {
  try {
    const { username, password, email } = req.body;
    const existingAccount = await Account.findOne({ username });

    const newAccount = new Account({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });

    if (existingAccount) {
      return res.status(409).json({ message: "Username Already Exists!"});
    }

    await newAccount.save();
    return res.status(200).json({ message: "Account Created!"});
  } catch (error) {
    console.error("Error creating account:", error);
    res.status(500).json({ message: "Error creating account" });
  }
});

export default router;