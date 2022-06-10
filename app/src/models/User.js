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
}

module.exports = User