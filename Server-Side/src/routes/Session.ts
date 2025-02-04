import express from 'express';
import controller from '../controllers/Session';
import { Schema, ValidateSchema } from '../middleware/ValidateSchema';

const router = express.Router();

router.post('/create', controller.createSession);
router.get('/get/:sessionId', controller.readSession);
router.get('/get', controller.readAllSession);
router.patch('/update/:sessionId', ValidateSchema(Schema.session.update), controller.UpdateSession);
router.delete('/delete/:sessionId', controller.deleteSession);

export = router;
