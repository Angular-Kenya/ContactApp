import express from "express"
import detailsRoute from "./src/routes";
import dotenv from "dotenv";
import db from "./src/db";
import cors from "cors";

dotenv.config()

db().then(() => console.log("database is now connected")).catch((error) => console.log(error))

const app:any = express();

const port = process.env.PORT || 3001;

app.use(cors())
app.use(express.json())

app.use(detailsRoute)

app.listen(port, () =>  console.log("server is running..."))