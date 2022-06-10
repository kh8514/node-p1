"use strict"

//module
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const dotenv = require("dotenv")
dotenv.config()


// app setting
app.set("views", "./src/views")
app.set("view engine", "ejs")
app.use(express.static(`${__dirname}/src/public`))
app.use(bodyParser.json())
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우
// 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}))


// routing
const home = require("./src/routes/home")
app.use("/", home)


module.exports = app