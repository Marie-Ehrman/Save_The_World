const body = document.querySelector("body");
const button = document.querySelector(".button");
const input = document.querySelector(".user-input");
const error = document.querySelector(".error");
let userInput;
const code = "UF08300830UF";
let match = false;


console.log(input)
input.addEventListener("keyup", (e) => {

    userInput = e.target.value;
    if(userInput.toLowerCase() === code.toLowerCase()) {
        match = true;
    }
    console.log(e.target.value)
});

button.addEventListener("click", () => {

    if(match) {
        body.style.background = "lightgreen";
        error.innerHTML = "YOU DID IT! You have saved the world!";


    }
    else {
        console.log("error message")
        input.classList.add("apply-shake")
        error.innerHTML = "OH NO! That wasn't it!";
        input.value = '';


    }

})

input.addEventListener("animationend", (e) => {
    input.classList.remove("apply-shake");
    input.value = '';
});