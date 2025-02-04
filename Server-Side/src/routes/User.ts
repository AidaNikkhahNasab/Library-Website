import express from 'express';
import controller from '../controllers/User';
import { Schema, ValidateSchema } from '../middleware/ValidateSchema';

const router = express.Router();

//Register new user
router.post('/create', controller.createUser);
router.get('/get/:userId', controller.readUser);
router.get('/get', controller.readAllUser);
router.put('/update/:userId', controller.UpdateUser);
router.delete('/delete/:userId', controller.deleteUser);

// GET /api/post /api/posts/postId
export = router;
