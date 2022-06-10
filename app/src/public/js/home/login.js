"use strict"

const id = document.getElementById("id")
const pw = document.getElementById("pw")
const loginBtn = document.querySelector("button")


function login(){
    const req = {
        id : id.value,
        pw : pw.value
    }
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(req)
    })
        .then(res => res.json())
        .then(res => {
            if(res.success) {
                location.href = "/"
            } else {
                alert(res.msg)
            }
        })
        .catch(err => {
            console.error(new Error("로그인 중 에러 발생"))
        })

}

loginBtn.addEventListener("click", login); 