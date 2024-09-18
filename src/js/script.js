// Variables

let checkBoxSignos = document.getElementById("checkbox-signos");
let checkBoxNumeros = document.getElementById("checkbox-numeros");
let checkBoxLetras = document.getElementById("checkbox-letras");
let rangeLenght = document.getElementById("rangeLenght");

const passwordCreateHTML = document.getElementById("password");


function generatePassword(rangeLenght, useUppercase, useNumbers, useSymbols) {
    let chars = '';

    if (useUppercase) {
        chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (useNumbers) {
        chars += '0123456789';
    }

    if (useSymbols) {
        chars += '!@#$%^&*()_+-={}:<>?';
    }

    chars += ' ';


    let password = '';

    for (let i = 0; i <= rangeLenght; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    if (!useNumbers && !useSymbols && !useUppercase) {
        passwordCreateHTML.style = "color: #f00;"
        return 'Selecciona un tipo'
    }

    return password;
}


rangeLenght.addEventListener("mousemove", ()=>{
    document.getElementById("spanLenght").textContent = "LONGITUD : " + rangeLenght.value;
})

document.getElementById("buttonCreate").addEventListener("click", ()=>{
    console.log(checkBoxLetras.checked)
    let password = generatePassword(rangeLenght.value, checkBoxLetras.checked,checkBoxNumeros.checked,checkBoxSignos.checked);

    console.log(password)
    passwordCreateHTML.value = password;

    document.querySelector(".input-retry").style = "display: flex; opacity: 1"
})