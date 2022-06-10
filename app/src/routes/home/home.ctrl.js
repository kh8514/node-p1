"use strict"

const User = require('../../models/User')
const UserStorage = require('../../models/UserStorage')

const ouput = {
    home : (req, res) => {
        res.render("home/index")
    },
    login : (req, res) => {
        res.render("home/login")
    }, 
    register : (req, res) => {
        res.render("home/register")
    }
}

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login()
        return res.json(response)
    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register()
        console.log("res :: ",response)
        return res.json(response)
    }
}

module.exports = {
    ouput,
    process
}