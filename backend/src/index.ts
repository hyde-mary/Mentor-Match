import express, { Request, Response } from "express";
import mongoose from "mongoose";
import User from "./models/User";
import { config } from "dotenv";
import cors from 'cors';
config();

const PORT = 5000;
const app = express();
app.use(cors());
app.use(express.json());

app.post("/users", async (req: Request, res: Response) => {

  const newUser = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    program: req.body.program,
  });
  
  const createdUser = await newUser.save();
  res.json(createdUser);
});

mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
  });
