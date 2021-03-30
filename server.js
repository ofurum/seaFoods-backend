const express = require('express');
const mongoose = require('./src/database/connecton')
const routes = require("./src/routes");
const cors = require("cors");
const app = express();
app.use(express.json())
app.use(cors({origin:"*"}))

app.use('/', routes)

const port = process.env.PORT || 8000;
const db = mongoose.connection;

db.on("error", () => {
  console.log("> error occurred from the database");
});

db.once("open", () => {
  console.log("> successfully opened the database...");
});

app.listen(port, console.log(`listening on port ${port}....`));