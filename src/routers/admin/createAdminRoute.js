import express from "express";
import createAdminController from "../../controller/auth/admin/createAdminController.js";
import createAdminUpdaterController from "../../controller/auth/admin/createAdminUpdaterController.js";
import { createGooglesemiController } from "../../controller/auth/admin/createAdminGoogleController.js";
import {
  semiLogin,
  mainLogin,
} from "../../controller/auth/admin/createLoginController.js";
import signUpCheker from "../../controller/auth/admin/createSignUpcheker.js";
import loginCheker from "../../controller/auth/admin/loginCheker.js";
const router = express.Router();

router.post("/semi/signup", createAdminController);
router.post("/main/signup", createAdminUpdaterController);
router.post("/google/semi/signup", createGooglesemiController);
router.post("/SignUp/cheker", signUpCheker);
router.post("/semi/login", semiLogin);
router.post("/main/login", mainLogin);
router.post("/user/login/cheker", loginCheker);
export default router;
