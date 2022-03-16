"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prismaClient_1 = require("../database/prismaClient");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class User {
    async create(req, res) {
        const { name, email, senha } = req.body;
        const userExists = await prismaClient_1.prismaClient.user.findFirst({
            where: { email: email },
        });
        if (userExists) {
            res.json({ status: "409", msg: "email já cadastrado" });
        }
        const password = await bcryptjs_1.default.hash(senha, 10);
        const save = await prismaClient_1.prismaClient.user.create({
            data: {
                name,
                email,
                password,
            },
        });
        res.json(save);
    }
}
exports.default = new User();
