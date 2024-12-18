import express from "express";
import OtpAuthController from "../../controller/auth/OtpAuthController.js";
const router = express.Router();
router.post("/signup", OtpAuthController);
export default router;
