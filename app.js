"use strict"

//module
const express = require("express")
const app = express()

const PORT = 3000

// app setting
app.set("views", "./views")
app.set("view engine", "ejs")

// routing
const home = require("./routes/home")

app.use("/", home)

module.exports = app