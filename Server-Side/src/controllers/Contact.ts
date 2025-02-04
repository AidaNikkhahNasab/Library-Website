import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Contact from "../models/Contact";
import express from 'express';
import { json } from "body-parser";

const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;


const createContact = (req: Request, res: Response, next: NextFunction) => {
    const { email, subject, comment } = req.body;

    const contact = new Contact({
        _id: new mongoose.Types.ObjectId(),
        email,
        subject,
        comment
    });
    return contact
        .save()
        .then((contact) => res.status(201).json({ contact }))
        .catch((error) => res.status(500).json({ error }));
};
const readContact = (req: Request, res: Response, next: NextFunction) => {
    const contactId = req.params.contactId;

    return Contact.findById(contactId)
        .then((contact) => (contact ? res.status(200).json({ contact }) : res.status(404).json({ message: "Not found" })))
        .catch((error) => res.status(500).json({ error }));
};
const readAllContact = (req: Request, res: Response, next: NextFunction) => {
    return Contact.find()
        .then((contacts) => (contacts ? res.status(200).json({ contacts }) : res.status(404).json({ message: "Not found" })))
        .catch((error) => res.status(500).json({ error }));
};
const UpdateContact = (req: Request, res: Response, next: NextFunction) => {
    const contactId = req.params.contactId;

    return Contact.findById(contactId)
        .then((contact) => {
            if (contact) {
                contact.set(req.body);

                return contact
                    .save()
                    .then((contact) => res.status(201).json({ contact }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                res.status(404).json({ message: "Not found" });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};
const deleteContact = (req: Request, res: Response, next: NextFunction) => {
    const contactId = req.params.contactId;

    return Contact.findByIdAndDelete(contactId)
        .then((contact) => (contact ? res.status(201).json({ mesage: "deleted" }) : res.status(404).json({ message: "Not found" })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createContact, readContact, readAllContact, UpdateContact, deleteContact };
