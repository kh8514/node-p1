const { response } = require("express")
const UserStorage = require("./UserStorage")

class User {
    constructor(body) {
        this.body = body
    }

    async login() {
        const body = this.body
        const data = await UserStorage.getUserInfo(body.id, body.pw)
       if(data){
           return {success: true, result:data}
       }
       return { success: false, msg: "아이디 및 비밀번호를 확인해주세요."}
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