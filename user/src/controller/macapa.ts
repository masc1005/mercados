import { Request, Response } from "express";
import { macapapi } from "../services/macapa";

class Macapa {
  async save(req: Request, res: Response) {
    const { name, phone } = req.body;

    const data = {
      nome: name,
      phone: phone,
    };

    try {
      const response = await macapapi.post("contact", data);

      return res.json(response.data);
    } catch (error) {
      return res.json(error);
    }
  }

  async read(req: Request, res: Response) {
    const data = await macapapi.get("contact");

    return res.json(data.data);
  }
}

export default new Macapa();
