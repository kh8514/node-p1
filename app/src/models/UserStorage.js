"use strict"

class UserStorage {
    static #users = {
        id: ["test", "dele", "tim"],
        pw: ["1111","2222","3333"],
        name: ["ㅗㅜㅑ","ㅇㅅㅇ","ㅇㅇㅇ"]
    }

    static getUsers(...fields) {
        const users = this.#users
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field]
            }
            return newUsers
        }, {})
        return newUsers
    }

    static getUserInfo(id) {
        const users = this.#users
        const idx = users.id.indexOf(id)
        const userKeys = Object.keys(users)
        const userInfo = userKeys.reduce( (newUser, info) => {
            newUser[info] = users[info][idx]
            return newUser
        }, {})
        return userInfo
    }

    static save(userInfo) {
        return { success : true }
    }
}


module.exports = UserStorage