"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
const prismaClient_1 = require("../../database/prismaClient");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Authenticate {
    async auth(req, res) {
        const { email, senha } = req.body;
        const user = await prismaClient_1.prismaClient.user.findFirst({ where: { email: email } });
        if (!user) {
            res.json({ msg: "usuário não encontrado" });
        }
        const isValid = await (0, bcryptjs_1.compare)(senha, user.password);
        if (!isValid) {
            res.json({ msg: "senha errada!!" });
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id }, process.env.AUTH_SECRET, {
            expiresIn: "1d",
        });
        delete user.password;
        return res.json({
            user,
            token,
        });
    }
}
exports.default = new Authenticate();
