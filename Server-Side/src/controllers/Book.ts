import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Book from "../models/Book";
import express from 'express';
import { json } from "body-parser";

const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;


const createBook = (req: Request, res: Response, next: NextFunction) => {
    const { title, author, year, issn, abstract } = req.body;

    const book = new Book({
        _id: new mongoose.Types.ObjectId(),
        title, 
        author,
        year,
        issn,
        abstract
    });
    return book
        .save()
        .then((book) => res.status(201).json({ book }))
        .catch((error) => res.status(500).json({ error }));
};
const readBook = (req: Request, res: Response, next: NextFunction) => {
    const bookId = req.params.bookId;
    return Book.findById(bookId)
        .then((book) => (book ? res.status(200).json({ book }) : res.status(404).json({ message: "Not found" })))
        .catch((error) => res.status(500).json({ error }));
};

const readAllBook = (req: Request, res: Response, next: NextFunction) => {
    return Book.find()
        .then((books) => (books ? res.status(200).json({ books }) : res.status(404).json({ message: "Not found" })))
        .catch((error) => res.status(500).json({ error }));
};
const UpdateBook = async (req: Request, res: Response, next: NextFunction) => {
    const bookId = req.params.bookId;
    return await Book.findById(bookId)
        .then((book) => {
            if (book) {
                book.set(req.body);

                return book
                    .save()
                    .then((book) => res.status(201).json({ book }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                res.status(404).json({ message: "Not found" });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};
const deleteBook = (req: Request, res: Response, next: NextFunction) => {
    const bookId = req.params.bookId;

    return Book.findByIdAndDelete(bookId)
        .then((book) => (book ? res.status(201).json({ mesage: "deleted" }) : res.status(404).json({ message: "Not found" })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createBook, readBook, readAllBook, UpdateBook, deleteBook };
