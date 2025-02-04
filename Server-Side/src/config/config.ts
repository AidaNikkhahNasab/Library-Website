import dotenv from 'dotenv';

dotenv.config();

//define username of mongodb and password which is not null
const MONGO_USERNAME = process.env.MANGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MANGO_PASSWORD || '';
const MONGO_URL = 'mongodb://127.0.0.1:27017/Library';

const SERVER_PORT = process.env.SERVICE_PORT ? Number(process.env.SERVICE_PORT) : 3000;

// define config Object
export const config = {
    mongo: {
        URL: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    }
};
