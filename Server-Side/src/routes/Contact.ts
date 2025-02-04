import express from "express";
import controller from "../controllers/Contact";
import { Schema, ValidateSchema } from "../middleware/ValidateSchema";

const router = express.Router();

router.post("/create", controller.createContact);
router.get("/get/:contactId", controller.readContact);
router.get("/get/", controller.readAllContact);
router.patch("/update/:contactId", controller.UpdateContact);
router.delete("/delete/:contactId", controller.deleteContact);

export = router;
