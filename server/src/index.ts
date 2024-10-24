import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

/* Route */
import projectRoute from "./routes/projectRoute";
import taskRoute from "./routes/taskRoute";
/* Configurations */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* Routes */
app.get("/", (req, res) => {
  res.send("This is home route");
});

app.use("/projects", projectRoute);
app.use("/tasks", taskRoute);

/* Server */
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server runningon port ${port}`);
});
