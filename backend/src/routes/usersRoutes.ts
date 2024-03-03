import express, { Request, Response } from "express";
import User from "../models/User";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const users = await User.find();
  res.json(users);
});

router.post("/", async (req: Request, res: Response) => {
  const newUser = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    program: req.body.program,
  });

  const createdUser = await newUser.save();
  res.json(createdUser);
});

router.delete("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  await User.findByIdAndDelete(userId);

  res.json({
    message: "successfully deleted the entry",
  });
});

export default router;