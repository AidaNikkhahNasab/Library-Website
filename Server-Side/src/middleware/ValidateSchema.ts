import { NextFunction, Response, Request } from 'express';
import Joi, { ObjectSchema } from 'joi';
import Logging from '../library/Logging';
import { IAuthor } from '../models/Author';
import { IBook } from '../models/Book';
import { IUser } from '../models/User';
import { IManager } from '../models/Manager';
import { IContact } from '../models/Contact';
import { ISession } from '../models/Session';


export const ValidateSchema = (schema: ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validateAsync(req.body);
            next();
        } catch (error) {
            Logging.error(error);
            return res.status(422).json({ error });
        }
    };
};

export const Schema = {
    author: {
        create: Joi.object<IAuthor>({
            name: Joi.string().required()
        }),
        update: Joi.object<IAuthor>({
            name: Joi.string().required()
        })
    },
    book: {
        create: Joi.object<IBook>({
            title: Joi.string().required(),
            author:Joi.string().required(),
            year: Joi.number().required(),
            issn: Joi.string(),
            abstract: Joi.string()        
        }),
        update: Joi.object<IBook>({
            title: Joi.string().required(),
            author:Joi.string().required(),
            year: Joi.number().required(),
            issn: Joi.string(),
            abstract: Joi.string()   
        })
    },
    manager: {
        create: Joi.object<IManager>({
            fname: Joi.string().required(),
            lname: Joi.string().required(),          
            email: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required() ,
            password: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required() 
        }),
        update: Joi.object<IManager>({
            email: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required,
            lname: Joi.string().required(),
            fname: Joi.string().required(),
            password: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
        })
    },
    contact: {
        create: Joi.object<IContact>({
            email: Joi.string().required(),
            subject: Joi.string().required(),          
            comment: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required() 
        }),
        update: Joi.object<IContact>({
            email: Joi.string().required(),
            subject: Joi.string().required(),          
            comment: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required() 
        })
    },
    user: {
        create: Joi.object<IUser>({
            fname: Joi.string(),
            lname: Joi.string(),
            username: Joi.string().required(),
            email: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            password: Joi.string().required(),
            mobileNumber: Joi.number(),
            role: Joi.string()

        }),
        update: Joi.object<IUser>({
            fname: Joi.string(),
            lname: Joi.string(),
            username: Joi.string().required(),
            email: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required() ,
            password: Joi.string().required(),
            mobileNumber: Joi.number(),
            role: Joi.string()
        })
    },
    session: {
        create: Joi.object<ISession>({
            email: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            password: Joi.string().required()

        }),
        update: Joi.object<ISession>({
            email: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required() ,
            password: Joi.string().required()
        })
    }
};


