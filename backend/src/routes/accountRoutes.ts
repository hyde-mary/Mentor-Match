import express, { Request, Response } from "express";
import Account from "../models/Account";
import { clerkClient } from "@clerk/clerk-sdk-node";


const router = express.Router();

// Create account
router.post("/register", async (req: Request, res: Response) => {
  try {
    const { username, password, email } = req.body;
    const existingAccount = await Account.findOne({ username });

    if (existingAccount) {
      return res.status(409).json({ message: "Username Already Exists!" });
    } else {
      const newAccount = new Account({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
      });
      await newAccount.save();
    }
    return res.status(200).json({ message: "Account Created!" });
  } catch (error) {
    console.error("Error creating account:", error);
    res.status(500).json({ message: "Error creating account" });
  }
});

// login to account validation
router.post("/login", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const existingAccount = await Account.findOne({ username });

    if (existingAccount) {
      if (password === existingAccount.password) {
        res.status(200).json({ message: "Login Successful" });
      } else {
        res.status(401).json({ message: "Invalid Email or Password" });
      }
    } else {
      res.status(401).json({ message: "Invalid Email or Password" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// update roels for clerk
router.post('/updateRole', async (req, res) => {
 
  const { role, userId } = req.body;
 
  const createRole = await clerkClient.users.updateUserMetadata(userId, {
    publicMetadata: {
      role
    }
  });
  
  res.status(200).json(createRole);
});

export default router;
