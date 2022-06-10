const { response } = require("express")
const UserStorage = require("./UserStorage")

class User {
    constructor(body) {
        this.body = body
    }

    async login() {
        const body = this.body
        const {id,pw} = await UserStorage.getUserInfo(body.id)
        if(id) {
            if(id === body.id && pw === body.pw) {
                return {success: true}
            }
            return { success: false, msg: "패스워드를 확인해주세요"}
        }
        return { success: false, msg: "아이디를 확인해주세요"}
    }

    async register() {
        const body = this.body
        try {
            const response = await UserStorage.save(body)
            return response;
        } catch(err) {
            return {success: false, msg:err}
        }
    }
}

module.exports = User