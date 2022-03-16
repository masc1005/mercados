import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

class Contacts {
  async create(req: Request, res: Response) {
    const { nome, celular } = req.body;

    const save = await prismaClient.contacts.create({
      data: {
        nome,
        celular,
      },
    });

    return res.json(save);
  }

  async read(req: Request, res: Response) {
    const data = await prismaClient.contacts.findMany({});

    return res.json(data);
  }
}

export default new Contacts();
