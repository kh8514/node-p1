"use strict"

const fs = require("fs").promises

class UserStorage {
    static #users = {
        id: ["test", "dele", "tim"],
        pw: ["1111","2222","3333"],
        name: ["ㅗㅜㅑ","ㅇㅅㅇ","ㅇㅇㅇ"]
    }

    static #getUserInfo (data, id) {
        const users = JSON.parse(data)
        const idx = users.id.indexOf(id)
        const userKeys = Object.keys(users)
        const userInfo = userKeys.reduce( (newUser, info) => {
            newUser[info] = users[info][idx]
            return newUser
        }, {})
        return userInfo
    }

    static getUsers(...fields) {
        //const users = this.#users
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field]
            }
            return newUsers
        }, {})
        return newUsers
    }

    static getUserInfo(id) {
        
        return fs
            .readFile("./src/database/users.json")
            .then((data) => {
                return this.#getUserInfo(data, id)
            })
            .catch(err => console.error)  
        }
        
    static save(userInfo) {
        return { success : true }
    }
}


module.exports = UserStorage