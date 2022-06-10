"use strict"

const express = require("express")
const { route } = require("express/lib/application")
const router = express.Router()
const ctrl = require("./home.ctrl")


router.get("/", ctrl.ouput.home)
router.get("/login", ctrl.ouput.login)
router.get("/register", ctrl.ouput.register)


router.post("/login", ctrl.process.login)
router.post("/register", ctrl.process.register)

module.exports = router