import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
import bcryptjs from "bcryptjs";

class User {
  async create(req: Request, res: Response) {
    const { name, email, senha } = req.body;

    const userExists = await prismaClient.user.findFirst({
      where: { email: email },
    });

    if (userExists) {
      res.json({ status: "409", msg: "email já cadastrado" });
    }

    const password = await bcryptjs.hash(senha, 10);

    const save = await prismaClient.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    res.json(save);
  }
}

export default new User();
