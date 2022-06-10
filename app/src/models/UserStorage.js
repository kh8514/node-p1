"use strict"

const fs = require("fs").promises

const DBConn = require('../database/dbConn')

class UserStorage {

    static #getUserInfoQuery () {
        return "select * from tb_us001 where id =? and password=?;"
    }

    static async getUserInfo(id,pw) {
        const select = new DBConn(this.#getUserInfoQuery(),[id,pw])
        const data = await select.execute().catch(err => console.log)
        return data[0]
    }
        
    static async save(userInfo) {
        // const users = await this.getUsers(true)
        // if(users.id.includes(userInfo.id)) {
        //     throw "이미 존재하는 아이디입니다."
        // }
        // users.id.push(userInfo.id)
        // users.name.push(userInfo.name)
        // users.pw.push(userInfo.pw)
        // fs.writeFile("./src/database/users.json", JSON.stringify(users))
        return { success: false }
    }
}


module.exports = UserStorage