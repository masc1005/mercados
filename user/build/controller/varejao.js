"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const varejao_1 = require("../services/varejao");
class Varejao {
    async save(req, res) {
        const { name, phone } = req.body;
        const data = {
            nome: name,
            celular: phone,
        };
        try {
            const response = await varejao_1.varejaoapi.post("contact", data);
            return res.json(response.data);
        }
        catch (error) {
            return res.json(error);
        }
    }
    async read(req, res) {
        const data = await varejao_1.varejaoapi.get("contact");
        return res.json(data.data);
    }
}
exports.default = new Varejao();
