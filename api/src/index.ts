import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes";

// const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

// app.use(cors());
// app.use(todoRoutes);

// const uri: string = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@mongo:27017`;

// mongoose
//   .connect(uri)
//   .then(() =>
//     app.listen(PORT, () =>
//       console.log(`Server running on http://localhost:${PORT}`)
//     )
//   )
//   .catch((error) => {
//     throw error;
//   });

console.log(`Server running on http://localhost:${PORT}`);