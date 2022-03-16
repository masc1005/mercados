import { Request, Response } from "express";
import { varejaoapi } from "../services/varejao";

class Varejao {
  async save(req: Request, res: Response) {
    const { name, phone } = req.body;

    const data = {
      nome: name,
      celular: phone,
    };

    try {
      const response = await varejaoapi.post("contact", data);

      return res.json(response.data);
    } catch (error) {
      return res.json(error);
    }
  }

  async read(req: Request, res: Response) {
    const data = await varejaoapi.get("contact");

    return res.json(data.data);
  }
}

export default new Varejao();
