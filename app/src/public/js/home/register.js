"use strict"

const id = document.getElementById("id")
const name = document.getElementById("nm")
const confirmPw = document.getElementById("confirm-pw")
const registerBtn = document.querySelector("button")

const link = document.querySelector(".message a")


function register(event){
    event.preventDefault()

    if(pw.value !== confirmPw.value) return alert("비밀번호가 일치하지 않습니다.")

    const req = {
        id : id.value,
        name: nm.value,
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
    
    
function animate() {
    const form = document.querySelector("form")
    form.animate({height: "toggle", opacity: "toggle"}, "slow");
}

registerBtn.addEventListener("click", register); 

link.addEventListener('click', animate)