import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";

require("dotenv").config();
import UserRouter from "./routes/UserRoutes";

const app = express();

//Alow Every Request
app.use(cors({ origin: "*" }));

//Better logs in the console.
app.use(morgan("dev"));

//Using JSON Middleware to parse JSON Body
app.use(json());

//Using Static Middleware to parse Static Body
app.use("/static", express.static("/static"));

app.use("/auth", UserRouter);

const PORT = parseInt(process.env.PORT || "8080");

app.listen(PORT, () => {
  console.log(`Server => http://localhost:${PORT}`);
});
