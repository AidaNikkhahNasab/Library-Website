import express from "express";
import controller from "../controllers/Manager";
import { Schema, ValidateSchema } from "../middleware/ValidateSchema";

const router = express.Router();

router.post("/create", controller.createManager);
router.get("/get/:managerId", controller.readManager);
router.get("/get/", controller.readAllManager);
router.patch("/update/:managerId", ValidateSchema(Schema.manager.update), controller.UpdateManager);
router.delete("/delete/:managerId", controller.deleteManager);

export = router;
