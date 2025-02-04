"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_USERNAME = process.env.MANGO_USERNAME || "";
const MONGO_PASSWORD = process.env.MANGO_PASSWORD || "";
const MONGO_URL = "mongodb://127.0.0.1:27017";
const SERVER_PORT = process.env.SERVICE_PORT ? Number(process.env.SERVICE_PORT) : 1337;
exports.config = {
    mongo: {
        URL: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    }
};
