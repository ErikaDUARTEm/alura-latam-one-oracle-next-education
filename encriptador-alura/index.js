const msje = document.querySelector(".encriptar-mensaje")
const  desencriptar= document.querySelector(".desencriptar-mensaje");
const btnEncriptar = document.querySelector(".btn-encriptar")
const noMensaje = document.querySelector('.no-mensaje')
console.log(noMensaje)

btnEncriptar.addEventListener('click', encriptado)

function encriptado() {
   
    const mensaje = msje.value;
    let mEncriptado = '';

    for (let i = 0; i < mensaje.length; i++) {
        if (mensaje[i] === 'e') {
            mEncriptado += 'enter';
        } else if (mensaje[i] === 'i') {
            mEncriptado += 'imes';
        } else if(mensaje[i] === 'a'){
            mEncriptado += 'ai';
        }else if(mensaje[i] === 'o'){
            mEncriptado += 'ober';
        }else if(mensaje[i] === 'u'){
            mEncriptado += 'ufat';
        }else {
            mEncriptado += mensaje[i];
        }
    }
    desencriptar.textContent = mEncriptado
    noMensaje.style = 'display:none'
    desencriptar.style.display = 'flex'
    console.log(mEncriptado);
}
