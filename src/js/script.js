// Variables

const checkBoxSignos = document.getElementById("checkbox-signos");
const checkBoxNumeros = document.getElementById("checkbox-numeros");
const checkBoxLetras = document.getElementById("checkbox-letras");
const rangeLenght = document.getElementById("rangeLenght");
const spanLenght = document.getElementById("spanLenght");
const inputRetry = document.querySelector(".input-retry");
const buttonCreate = document.getElementById("buttonCreate");

const passwordCreateHTML = document.getElementById("password");

let password;


function generatePassword(rangeLenght, useUppercase, useNumbers, useSymbols) {

    document.querySelector(".input-retry").style = "display: flex; opacity: 1"

    buttonCreate.style.display = "none"; 

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
    password = '';

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

    buttonCreate.style.display = "none"; 

    document.querySelectorAll(".checkbox-label").forEach(checkBoxLabel => {
        checkBoxLabel.style.color = '#ff0000';
        setTimeout(()=>{
            checkBoxLabel.style.color = '#fafafa';

        },200)
    })

}

function copyPassword (text){
    if (text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(()=>{
                console.log("Texto copiado correctamente");
            }).catch((error)=>{
                console.error("Error al copiar texto al portapapeles:", error);
            })
    
            passwordCreateHTML.style.backgroundColor = "#01ffff93";
            passwordCreateHTML.style.outline = "none !important";
            passwordCreateHTML.style.border = "none !important";
    
            passwordCreateHTML.value = "COPIADA!"

            setTimeout(()=>{
                passwordCreateHTML.style.backgroundColor = "transparent";
                passwordCreateHTML.value = text;
            },300)
    
        } else {
            console.error("La API de portapapeles no esta disponible:");
        }
    }
}


rangeLenght.addEventListener("mousemove", ()=>{
    spanLenght.innerHTML = "LONGITUD : " + rangeLenght.value; 
});


rangeLenght.addEventListener('mouseout', ()=>{
    spanLenght.innerHTML = "LONGITUD : " + rangeLenght.value; 
})


buttonCreate.addEventListener("click", ()=>{
    if (checkBoxLetras.checked == true || checkBoxNumeros.checked == true  ||checkBoxSignos.checked == true ) {
        password = generatePassword(rangeLenght.value, checkBoxLetras.checked,checkBoxNumeros.checked,checkBoxSignos.checked);
        passwordCreateHTML.value = password;


    }

    else {
        showError();
    }

})


inputRetry.addEventListener("click", ()=>{
    if (checkBoxLetras.checked == true || checkBoxNumeros.checked == true  ||checkBoxSignos.checked == true ) {
        password = generatePassword(rangeLenght.value, checkBoxLetras.checked,checkBoxNumeros.checked,checkBoxSignos.checked);
        passwordCreateHTML.value = password;
    }


    else {
        showError();
    }

})

passwordCreateHTML.addEventListener("click",()=>{
    copyPassword(password);
})