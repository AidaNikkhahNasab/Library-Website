"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config/config");
const Logging_1 = __importDefault(require("./library/Logging"));
const Author_1 = __importDefault(require("./routes/Author"));
const Book_1 = __importDefault(require("./routes/Book"));
const router = (0, express_1.default)();
mongoose_1.default
    .connect(config_1.config.mongo.URL, { retryWrites: true, w: "majority" })
    .then(() => {
    Logging_1.default.info("connected to mongoDB.");
    StartServer();
})
    .catch((error) => {
    Logging_1.default.error("unable to connect: ");
    Logging_1.default.error(error);
});
/** Only start the serever */
const StartServer = () => {
    router.use((req, res, next) => {
        Logging_1.default.info("incomming - > Methos : [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]");
        res.on("finish", () => {
            Logging_1.default.info("incomming - > Methos : [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]");
        });
        next();
    });
    router.use(express_1.default.urlencoded({ extended: true }));
    router.use(express_1.default.json());
    router.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Header", "Origin, X-Requested-Width, Content-Type, Accept, Authorization");
        if (req.method == "OPTIONS") {
            res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
            return res.status(200).json({});
        }
        next();
    });
    /** Routes */
    router.use("/authors", Author_1.default);
    router.use("/books", Book_1.default);
    /** Healthcheck */
    router.get("./ping", (req, res, next) => res.status(200).json({ message: "pong" }));
    router.use((req, res, next) => {
        const error = new Error("not found");
        Logging_1.default.error(error);
        return res.status(404).json({ message: error.message });
    });
    http_1.default.createServer(router).listen(config_1.config.server.port, () => Logging_1.default.info("Server is running on port ${config.server.port}."));
};
