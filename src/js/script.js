// Variables

let checkBoxSignos = document.getElementById("checkbox-signos");
let checkBoxNumeros = document.getElementById("checkbox-numeros");
let checkBoxLetras = document.getElementById("checkbox-letras");
let rangeLenght = document.getElementById("rangeLenght");
let spanLenght = document.getElementById("spanLenght");

const passwordCreateHTML = document.getElementById("password");

let password;


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

    console.log(rangeLenght)

    for (let i = 0; i < rangeLenght; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    passwordCreateHTML.style = "color: #fafafa";

    return password;   
    

}


function showError(){
    document.querySelector(".input-retry").style = "display: flex; opacity: 1"

    document.getElementById("buttonCreate").style.display = "none"; 

    document.querySelectorAll(".checkbox-label").forEach(checkBoxLabel => {
        checkBoxLabel.style.color = '#ff0000';
        setTimeout(()=>{
            checkBoxLabel.style.color = '#fafafa';

        },200)
    })

}


rangeLenght.addEventListener("mousemove", ()=>{
    document.getElementById("spanLenght").innerHTML = "LONGITUD : " + rangeLenght.value; 
});

rangeLenght.addEventListener('mouseout', ()=>{
    document.getElementById("spanLenght").innerHTML = "LONGITUD : " + rangeLenght.value; 
})

document.getElementById("buttonCreate").addEventListener("click", ()=>{
    if (checkBoxLetras.checked == true || checkBoxNumeros.checked == true  ||checkBoxSignos.checked == true ) {
        password = generatePassword(rangeLenght.value, checkBoxLetras.checked,checkBoxNumeros.checked,checkBoxSignos.checked);
        passwordCreateHTML.value = password;

    }

    else {
        showError();
    }

})

document.querySelector(".input-retry").addEventListener("click", ()=>{
    if (checkBoxLetras.checked == true || checkBoxNumeros.checked == true  ||checkBoxSignos.checked == true ) {
        password = generatePassword(rangeLenght.value, checkBoxLetras.checked,checkBoxNumeros.checked,checkBoxSignos.checked);
        passwordCreateHTML.value = password;

    }

    else {
        showError();
    }

})