"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const macapa_1 = require("../services/macapa");
class Macapa {
    async save(req, res) {
        const { name, phone } = req.body;
        const data = {
            nome: name,
            phone: phone,
        };
        try {
            const response = await macapa_1.macapapi.post("contact", data);
            return res.json(response.data);
        }
        catch (error) {
            return res.json(error);
        }
    }
    async read(req, res) {
        const data = await macapa_1.macapapi.get("contact");
        return res.json(data.data);
    }
}
exports.default = new Macapa();
