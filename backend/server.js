const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("connect db successfully");
});

const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");
const bookCategoryRouter = require("./routes/bookcategories");

app.use("/users", userRouter);
app.use("/books", bookRouter);
app.use("/bookcategories", bookCategoryRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
