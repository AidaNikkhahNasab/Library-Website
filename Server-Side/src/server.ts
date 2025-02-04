import { Type } from '@angular-devkit/build-angular';
import { Server as httpServer, createServer} from "http";
import express, { application } from 'express';
import http from 'http';
import session from 'express-session';
import mongoose from 'mongoose';
import { config } from './config/config';
import Logging from './library/Logging';
import authorRoutes from './routes/Author';
import bookRoutes from './routes/Book';
import userRoutes from './routes/User';
import managerRoutes from './routes/Manager';
import contactRoutes from './routes/Contact';
import SessionRoutes from './routes/Session';
import { Request, Response } from 'express';

import cors from "cors";
import bodyParser from 'body-parser';
import { Server } from 'socket.io';


const router = express();

router.use(cors());
mongoose.set('strictQuery', false);


/** Connect to mango */
mongoose
    .connect(config.mongo.URL, { retryWrites: true, w: 'majority' }) 
    .then(() => {
        Logging.info('connected to mongoDB.');
        StartServer();
    })
    .catch((error) => {
        Logging.error('unable to connect: ');
        Logging.error(error);
    });

/** Only start the serever */
const StartServer = () => {
    /** Log the request */
    router.use((req, res, next) => {
        Logging.info(`incomming - > Method : [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

        /** Log the request */
        res.on('finish', () => {
            Logging.info(`incomming - > Method : [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`);
        });

        next();
    });



    router.use(express.urlencoded({ extended: true }));
    router.use(express.json());
    
    /** Rules of the API */
    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Header', 'Origin, X-Requested-Width, Content-Type, Accept, Authorization');

        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
            return res.status(200).json({});
        }
        
        next();
    });


    /** Routes */
    router.get('/', (req: Request, res: Response) => {
        res.send("Hello");
        res.render('server', {title: 'Express'});
    });

    module.exports = router;
    
    router.use('/authors', authorRoutes);
    router.use('/books', bookRoutes);
    router.use('/users', userRoutes);
    router.use('/managers', managerRoutes);
    router.use('/contacts', contactRoutes);
    router.use('/sessions', SessionRoutes);

    router.use(cors({origin: 'http://localhost:4200'}));



    /** Healthcheck */

    router.get('./ping', (req, res, next) => res.status(200).json({ message: 'pong' }));

    router.use((req, res, next) => {
        const error = new Error('not found');
        Logging.error(error);

        return res.status(404).json({ message: error.message });
    });


    http.createServer(router).listen(config.server.port, () => Logging.info(`Server is running on port ${config.server.port}.`));
};
