const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 6001;
const mongoose = require("mongoose");
require("dotenv").config();

// user_name: nion
// password: test123

// middleware
app.use(cors());
app.use(express.json());

// mongo-db configuration using mongoose
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cafe-server.86g1lab.mongodb.net/cafe-server?retryWrites=true&w=majority&appName=cafe-server`
  )
  .then(console.log("Succesfully Connected to Mongodb"))
  .catch((error) => console.log("Error connecting to Mongodb", error));

//   import routes here
const menuRoutes = require('./api/routes//menuRoutes');
const cartRoutes = require('./api/routes/cartRoutes');
app.use('/menu', menuRoutes)
app.use('/carts', cartRoutes)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
