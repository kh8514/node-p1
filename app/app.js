"use strict"

//module
const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const dotenv = require("dotenv")
const fs = require("fs")
dotenv.config()

const app = express()

const accessLogStream = fs.createWriteStream(
    `${__dirname}/log/access.log`,
    { flags: 'a'}
) 

// app setting
app.set("views", "./src/views")
app.set("view engine", "ejs")
app.use("/", home)
app.use(express.static(`${__dirname}/src/public`))
app.use(bodyParser.json())
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우
// 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan("dev", {stream: accessLogStream}))


// routing
const home = require("./src/routes/home")

// log
const logger = require('./src/config/logger')



module.exports = app