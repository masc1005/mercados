import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import route from "./routes";

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());
server.use(route);

server.listen(process.env.SERVER_PORT, () => {
  console.log("server on!");
});
