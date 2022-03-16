import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import routes from "./routes";

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(process.env.SERVER_PORT, () => {
  console.log("server on!");
});
