import dotenv from "dotenv";
import express from "express";
import connectDb from "./config/connectdb.js";
import userRoutes from "./route/userRoute.js";
dotenv.config();
connectDb();

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.use("/api/user", userRoutes);


app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
