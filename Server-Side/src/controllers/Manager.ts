import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Manager from "../models/Manager";
import express from 'express';
import { json } from "body-parser";

const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;


const createManager = (req: Request, res: Response, next: NextFunction) => {
    const { fname, lname, email, password, mobilenum, role } = req.body;

    const manager = new Manager({
        _id: new mongoose.Types.ObjectId(),
        fname,
        lname,
        email,
        password,
        mobilenum,
        role
    });
    return manager
        .save()
        .then((manager) => res.status(201).json({ manager }))
        .catch((error) => res.status(500).json({ error }));
};
const readManager = (req: Request, res: Response, next: NextFunction) => {
    const managerId = req.params.managerId;

    return Manager.findById(managerId)
        .then((manager) => (manager ? res.status(200).json({ manager }) : res.status(404).json({ message: "Not found" })))
        .catch((error) => res.status(500).json({ error }));
};
const readAllManager = (req: Request, res: Response, next: NextFunction) => {
    return Manager.find()
        .then((managers) => (managers ? res.status(200).json({ managers }) : res.status(404).json({ message: "Not found" })))
        .catch((error) => res.status(500).json({ error }));
};
const UpdateManager = (req: Request, res: Response, next: NextFunction) => {
    const managerId = req.params.managerId;

    return Manager.findById(managerId)
        .then((manager) => {
            if (manager) {
                manager.set(req.body);

                return manager
                    .save()
                    .then((manager) => res.status(201).json({ manager }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                res.status(404).json({ message: "Not found" });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};
const deleteManager = (req: Request, res: Response, next: NextFunction) => {
    const managerId = req.params.managerId;

    return Manager.findByIdAndDelete(managerId)
        .then((manager) => (manager ? res.status(201).json({ mesage: "deleted" }) : res.status(404).json({ message: "Not found" })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createManager, readManager, readAllManager, UpdateManager, deleteManager };
