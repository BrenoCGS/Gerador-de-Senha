let slider = document.getElementById("slider");
let button = document.getElementById("btn");

let sizePassword = document.getElementById("valor");
let password = document.getElementById("password");

let containerPassword = document.getElementById("container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let novaSenha = "";

sizePassword.innerHTML = slider.value;

slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    
    let pass = "";
    for(let i = 0, n = charset.length; i < slider.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword() {
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(novaSenha);
}