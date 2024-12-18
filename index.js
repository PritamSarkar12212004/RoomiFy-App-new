import express from "express";
import "dotenv/config";
import cors from "cors";
import DataBase from "./src/database/database.js";
import OtpAuth from "./src/routers/auth/OtpAuth.js";
import createAdminRoute from "./src/routers/admin/createAdminRoute.js";
import roomPostRoute from "./src/routers/post/room/roomPostRoute.js";
import getData from "./src/routers/data/getData.js";
import controllerRoute from "./src/routers/post/controllerRoute/controllerRoute.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", OtpAuth);
app.use("/user", createAdminRoute);
app.use("/room", roomPostRoute);
app.use("/get", getData);
app.use("/controller/post", controllerRoute);

DataBase()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server start at server ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
