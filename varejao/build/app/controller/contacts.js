"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prismaClient_1 = require("../../database/prismaClient");
class Contacts {
    async create(req, res) {
        const { nome, celular } = req.body;
        const save = await prismaClient_1.prismaClient.contacts.create({
            data: {
                nome,
                celular,
            },
        });
        return res.json(save);
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
