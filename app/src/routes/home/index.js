"use strict"

const express = require("express")
const { route } = require("express/lib/application")
const router = express.Router()
const ctrl = require("./home.ctrl")

router.get("/", ctrl.hello)
router.get("/login", ctrl.login)

module.exports = router