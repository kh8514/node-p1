"use strict"

const User = require('../../models/User')
const UserStorage = require('../../models/UserStorage')

const ouput = {
    home : (req, res) => {
        res.render("home/index")
    },
    login : (req, res) => {
        res.render("home/login")
    }
}

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        console.log(user.login())
        const response = user.login()
        return res.json(response)
    }
}

module.exports = {
    ouput,
    process
}