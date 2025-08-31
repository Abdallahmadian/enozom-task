import express from "express";
import { PrismaClient } from "@prisma/client";

// Import all routes
import deleteTrainRoutes from "./Server_Chn/DeleteTrain.js";
import getTrainRoutes from "./Server_Chn/getTrain.js";
import getTrainByIdRoutes from "./Server_Chn/getTrainById.js";
import putTrainByIdRoutes from "./Server_Chn/PutTrainById.js";
import postTrainRoutes from "./Server_Chn/post.js";

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
