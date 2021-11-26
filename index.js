const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoute = require("./routes/authRoute");
const pricesRoute = require("./routes/pricesRoute");

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/prices", pricesRoute);

app.get("/", (req, res) => res.send("Hello World"));

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to DB...");
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err.code);
    process.exit(1);
  });
