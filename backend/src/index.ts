import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from "cors";
import accountRoutes from "./routes/accountRoutes";
import userRoutes from "./routes/usersRoutes";

config();

const PORT = 5000;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/accounts", accountRoutes);
app.use("/users", userRoutes);

mongoose.connect(process.env.MONGO_URL!)
  .then(() => {
    console.log(`Connected to MongoDB`);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(`Error connecting to MongoDB: ${error}`);
  });

