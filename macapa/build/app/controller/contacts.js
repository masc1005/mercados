"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prismaClient_1 = require("../../database/prismaClient");
class Contacts {
    async create(req, res) {
        const { nome, phone } = req.body;
        return res.json({ data: "phone" });
    }
    async read(req, res) {
        const data = await prismaClient_1.prismaClient.contacts.findMany({});
        const contacts = { contacts: [] };
        for (let i = 0; i < data.length; i++) {
            delete data[i].id;
            contacts.contacts.push(data[i]);
        }
        return res.json(contacts);
    }
}
exports.default = new Contacts();
