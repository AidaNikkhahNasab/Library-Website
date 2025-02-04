"use strict";
exports.__esModule = true;
// import * as dotenv from "dotenv";
var http_1 = require("http");
var express_1 = require("express");
var socket_io_1 = require("socket.io");
var roomRoutes_1 = require("./routes/roomRoutes");
var cors_1 = require("cors");
// Express Server Typescript
var Server = /** @class */ (function () {
    function Server() {
        this.ioccounter = 0; // counter for Socket IO connections
        // dotenv.config();
        this.app = express_1["default"](); // first create Express App
        this.serv = http_1.createServer(this.app); // to make the server instance available in functions
        this.io = new socket_io_1.Server();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(express_1["default"].json());
        this.app.use(express_1["default"].urlencoded({ extended: true })); // instead of bodyParser.urlencoded({ extended: true })
        this.app.use(cors_1["default"]());
        this.app.options('*', cors_1["default"]());
    };
    Server.prototype.routes = function () {
        this.app.use("/", new roomRoutes_1.RoomRoutes().router); // route /rooms
    }; // routes()
    /**
     * Start the HTTP Server
     * Important: In some examples the Express app object is used for listen, that was not working!
     *  @param: s, http server which listens
     *  @param: p: Portnumber of the server
    */
    Server.prototype.start = function (s, p) {
        //this.initSocket(this.serv); // start (socket)ioServer
        // debug("Server start init Socket this serv: ", this.serv);
        s.listen(p, function () {
            console.log("  API is running at http://localhost:%d", p);
        });
    };
    return Server;
}()); // Server
var server = new Server();
server.start(server.serv, 3000); // server.serv is httpServer, 3000 Portnumber
