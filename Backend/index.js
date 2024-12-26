const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//Dabase Connection with mongodb
mongoose.connect("mongodb+srv://rpengonda1:rohanp@12345@cluster0.6bwcs.mongodb.net/ecommerce")

//API Creation

app.get("/", (req, res) => {
  res.send("Express App is Running")
})

app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running on port " + port)
  }
  else {
    console.log("Error: " + error)
  }
})

