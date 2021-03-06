const express = require('express');
const mongoose = require('./src/database/connecton')
const routes = require("./src/routes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./src/config/swagger");
const cors = require("cors");
const app = express();


app.use(express.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-type, Accept, Authorization"
  );
  if (req.method === "OPTION") {
    res.header("Access-Control-Allow-Methods", "*");
    return res.status(200).json({});
  }
  next();
});
    
// use swagger-Ui-express for your app documentation endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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