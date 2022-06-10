"use strict"

const id = document.getElementById("id")
const name = document.getElementById("name")
const confirmPw = document.getElementById("confirm-pw")
const registerBtn = document.querySelector("button")


function register(event){
    event.preventDefault()
    const req = {
        id : id.value,
        name: name.value,
        pw : pw.value,
        confirmPw: confirmPw.value
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