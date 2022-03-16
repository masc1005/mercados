import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
import jwt from "jsonwebtoken";

class Authenticate {
  async auth(req: Request, res: Response) {
    const { email, pwd } = req.body;

    const user = await prismaClient.user.findFirst({ where: { email: email } });

    if (!user) {
      res.json({ status: "404", msg: "email não encontrado" });
    }

    const isValid = await compare(pwd, user.password);

    if (!isValid) {
      res.json({ status: "401", msg: "senha invalida" });
    }

    const token = jwt.sign({ id: user.id }, process.env.AUTH_SECRET, {
      expiresIn: "1d",
    });

    delete user.password;

    return res.json({
      user,
      token,
    });
  }
}

export default new Authenticate();
