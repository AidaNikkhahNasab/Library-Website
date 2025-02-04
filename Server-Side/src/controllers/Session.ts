import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Session from '../models/Session';

const createSession = (req: Request, res: Response, next: NextFunction) => {
    const { fname, lname, sessionname, email, password, mobileNumber, role } = req.body;

    const session = new Session({
        _id: new mongoose.Types.ObjectId(),
        fname,
        lname,
        sessionname,
        email,
        password,
        mobileNumber,
        role
    });
    return session
        .save()
        .then((session) => res.status(201).json({ session }))
        .catch((error) => res.status(500).json({ error }));
};
const readSession = (req: Request, res: Response, next: NextFunction) => {
    const sessionId = req.params.sessionId;

    return Session.findById(sessionId)
        .then((session) => (session ? res.status(200).json({ session }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};

const readAllSession = (req: Request, res: Response, next: NextFunction) => {
    return Session.find()
        .then((sessions) => (sessions ? res.status(200).json({ sessions }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};
const UpdateSession = (req: Request, res: Response, next: NextFunction) => {
    const sessionId = req.params.sessionId;

    return Session.findById(sessionId)
        .then((session) => {
            if (session) {
                session.set(req.body);

                return session
                    .save()
                    .then((session) => res.status(201).json({ session }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                res.status(404).json({ message: 'Not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};
const deleteSession = (req: Request, res: Response, next: NextFunction) => {
    const sessionId = req.params.sessionId;

    return Session.findByIdAndDelete(sessionId)
        .then((session) => (session ? res.status(201).json({ mesage: 'deleted' }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createSession, readSession, readAllSession, UpdateSession, deleteSession };
