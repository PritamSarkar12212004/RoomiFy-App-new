import express from "express";
import { getMainData } from "../../controller/data/getDataController.js";
import findRoom from "../../controller/data/findRoom.js";
const router = express.Router();
router.post("/main/data", getMainData);
router.post("/find/room",findRoom)
export default router;
