"use strict"

const fs = require("fs").promises

const { throws } = require("assert")
const DBConn = require('../database/dbConn')

class UserStorage {

    static #getUserInfoQuery () {
        return "select * from tb_us001 where id =? and password=?;"
    }

    static #setUserInfoQuery () {
        return "insert into tb_us001(id, password, nm) values (?,?,?);"
    }

    static async getUserInfo(id,pw) {
        const select = new DBConn(this.#getUserInfoQuery(),[id,pw])
        const data = await select.execute().catch(err => console.log)
        return data[0]
    }
        
    static async save(userInfo) {
        const user = await this.getUserInfo(userInfo.id,userInfo.pw)
        if(user){
            throw "이미 존재하는 아이디입니다."
        }
        
        const params = []
        params.push(userInfo.id)
        params.push(userInfo.pw)
        params.push(userInfo.name)

        const insert = new DBConn(this.#setUserInfoQuery(), params)
        await insert.execute()
            .then(res => {
               if(!res){
                   throw "db error"
               }
               return {success: true}
            })
            .catch(err=>{
                throw err
            })
    }
}


module.exports = UserStorage