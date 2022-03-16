import { Request, Response, Router } from "express";
import user from "./controller/user";
import auth from "./controller/auth";
import macapa from "./controller/macapa";
import varejao from "./controller/varejao";

import authMiddleware from "./middleware/auth";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  res.send("/Home");
});

routes.post("/login", auth.auth);

routes.post("/user", user.create);

routes.post("/macapa", authMiddleware, macapa.save);
routes.get("/macapa", authMiddleware, macapa.read);

routes.post("/varejao", authMiddleware, varejao.save);
routes.get("/varejao", authMiddleware, varejao.read);

export default routes;
