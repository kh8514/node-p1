"use strict"

const id = document.getElementById("id")
const name = document.getElementById("name")
const confirmPw = document.getElementById("confirm-pw")
const registerBtn = document.querySelector("button")


function register(event){
    event.preventDefault()

    if(pw !== confirmPw) return alert("비밀번호가 일치하지 않습니다.")


    const req = {
        id : id.value,
        name: name.value,
        pw : pw.value,
    }

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(req)
    })
        .then(res => res.json())
        .then(res => {
            if(res.success) {
                location.href = "/login"
            } else {
                alert(res.msg)
            }
        })
        .catch(err => {
            console.error(new Error("회원가입 중 에러 발생"))
        })

}

registerBtn.addEventListener("click", register); 