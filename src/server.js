import express from "express";
import listEndpoints from "express-list-endpoints";
import mongoose from "mongoose";
import cors from "cors";
import {
  badRequestHandler,
  notFoundHandler,
  genericErrorHandler,
} from "./errorHandlers.js";
import usersRouter from "./api/users/index.js";
import accommodationRouter from "./api/accommodation/index.js";

const server = express();
const port = process.env.PORT;

server.use(cors());
server.use(express.json());

// endpoints
server.use("/users", usersRouter);
server.use("/accommodation", accommodationRouter);

server.use(badRequestHandler);
server.use(notFoundHandler);
server.use(genericErrorHandler);

mongoose.connect(process.env.MONGO_URL);

mongoose.connection.on("connected", () => {
  console.log("connected to MongoDB!");
  server.listen(port, () => {
    console.table(listEndpoints(server));
    console.log(`server is running on port ${port}`);
  });
});
