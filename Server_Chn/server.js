import express from "express";
import { PrismaClient } from "@prisma/client";

// Import all routes
import deleteTrainRoutes from "./DeleteTrain.js";
import getTrainRoutes from "./getTrain.js";
import getTrainByIdRoutes from "./getTrainById.js";
import putTrainByIdRoutes from "./PutTrainById.js";
import postTrainRoutes from "./post.js";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Use the routes
app.use(deleteTrainRoutes);
app.use(getTrainRoutes);
app.use(getTrainByIdRoutes);
app.use(putTrainByIdRoutes);
app.use(postTrainRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
