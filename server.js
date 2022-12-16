// dotenv.config();
import express from "express";
import morgan from "morgan";
import "express-async";

const app = express();

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello");
});

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
