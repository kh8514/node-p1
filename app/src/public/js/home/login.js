"use strict"

const id = document.getElementById("id")
const pw = document.getElementById("pw")
const loginBtn = document.querySelector("button")


function login(){
    const req = {
        id : id.value,
        pw : pw.value
    }
    fetch()
}

loginBtn.addEventListener("click", login);