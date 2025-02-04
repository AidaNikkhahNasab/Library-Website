import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import User from '../models/User';
import express from 'express';
import { json } from "body-parser";

const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const createUser = (req: Request, res: Response, next: NextFunction) => {
    const { fname, lname, username, email, password, mobileNumber, role } = req.body;
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        fname,
        lname,
        username,
        email,
        password,
        mobileNumber,
        role
    });
    return user
        .save()
        .then((user) => res.status(201).json({ user }))
        .catch((error) => res.status(500).json({ error }));
};
const readUser = (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId;
    return User.findById(userId)
        .then((user) => (user ? res.status(200).json({ user }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};

const readAllUser = (req: Request, res: Response, next: NextFunction) => {
    return User.find()
        .then((users) => (users ? res.status(200).json({ users }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};
const UpdateUser = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId;
    return await User.findById(userId)
        .then((user) => {
            if (user) {
                user.set(req.body);

                return user
                    .save()
                    .then((user) => res.status(201).json({ user }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                res.status(404).json({ message: 'Not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};
const deleteUser = (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId;

    return User.findByIdAndDelete(userId)
        .then((user) => (user ? res.status(201).json({ mesage: 'deleted' }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createUser, readUser, readAllUser, UpdateUser, deleteUser };
