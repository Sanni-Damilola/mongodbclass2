import express, { Request, Response, Application } from "express";
import Route from "./Routes/route"
const app: Application = express();
const port: number = 2001;
require("./Config/db");
app.use(express.json());


app.all("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "up",
  });
});

app.use("/api", Route)

app.listen(port, () => {
  console.log("done");
});
