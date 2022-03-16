import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

class Contacts {
  async create(req: Request, res: Response) {
    const { nome, phone } = req.body;

    const pais = phone.slice(0, 2);
    const ddd = phone.slice(2, 4);
    const parte1 = phone.slice(4, 9);
    const parte2 = phone.slice(9, 13);

    const celular = `+${pais} (${ddd}) ${parte1}-${parte2}`;

    const save = await prismaClient.contacts.create({
      data: {
        nome: nome.toUpperCase(),
        celular: celular,
      },
    });

    delete save.id;

    return res.json(save);
  }

  async read(req: Request, res: Response) {
    const data = await prismaClient.contacts.findMany({});

    const contacts = { contacts: [] };

    for (let i = 0; i < data.length; i++) {
      delete data[i].id;

      contacts.contacts.push(data[i]);
    }

    return res.json(contacts);
  }
}

export default new Contacts();
