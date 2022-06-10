const UserStorage = require("./UserStorage")

class User {
    constructor(body) {
        this.body = body
    }

    login() {
        const body = this.body
        const {id, pw } = UserStorage.getUserInfo(body.id)

        if(id) {
            if(id === body.id && pw === body.pw) {
                return {success: true}
            }
            return { success: false, msg: "패스워드를 확인해주세요"}
        }
        return { success: false, msg: "아이디를 확인해주세요"}

    }

    register() {
        const body = this.body
        const res = UserStorage.save(this.body)
        if(res.success) {
            return {success : true}
        }
        return { success: false, msg: " 회원가입 실패"}
    }
}

module.exports = User