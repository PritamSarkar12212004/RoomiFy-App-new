import express from "express";
import roomPostController from "../../../controller/post/room/roomPostController.js";
const router = express.Router();
router.post("/post", roomPostController);
export default router;
