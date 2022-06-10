"use strict"

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
        const id = req.body.id
        const pw = req.body.pw

        const users = UserStorage.getUsers("id", "pw")

        
        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id)
            if(users.pw[idx] === pw){
                return res.json({
                    success: true,

                })
            }

        }
        
        return res.json({
            success: false,
            msg: "로그인에 실패하였습니다"
        })
    }
}



module.exports = {
    ouput,
    process
}