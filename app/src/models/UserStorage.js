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
}


module.exports = UserStorage