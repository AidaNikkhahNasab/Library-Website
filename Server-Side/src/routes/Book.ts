import express from "express";
import controller from "../controllers/Book";
import { Schema, ValidateSchema } from "../middleware/ValidateSchema";

const router = express.Router();

router.post("/create" , controller.createBook);
router.get("/get/:bookId",controller.readBook);
router.get("/get/", controller.readAllBook);
router.put("/update/:bookId", controller.UpdateBook);
router.delete("/delete/:bookId", controller.deleteBook);

export = router;
