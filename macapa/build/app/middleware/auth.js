"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authMiddleware(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
        res.sendStatus(401);
    }
    const token = authorization.replace("Bearer", "").trim();
    try {
        const data = jsonwebtoken_1.default.verify(token, process.env.AUTH_SECRET);
        const { id } = data;
        req.userId = id;
        return next();
    }
    catch {
        res.sendStatus(401);
    }
}
exports.default = authMiddleware;
