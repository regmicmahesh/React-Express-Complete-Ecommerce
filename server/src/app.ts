import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

require("dotenv").config();
import UserRouter from "./routes/UserRoutes";
import ProductRouter from "./routes/ProductRoutes";

const app = express();

//Alow Every Request
app.use(cors({ origin: "*" }));

//Better logs in the console.
app.use(morgan("dev"));

//Using JSON Middleware to parse JSON Body
app.use(json());

//To handle HTTPOnly Cookies used in Auth.
app.use(cookieParser());

//Using Static Middleware to parse Static Body
app.use("/static", express.static("/static"));

app.use("/auth", UserRouter);
app.use("/products", ProductRouter);

const PORT = parseInt(process.env.PORT || "8080");

app.listen(PORT, () => {
  console.log(`Server => http://localhost:${PORT}`);
});
