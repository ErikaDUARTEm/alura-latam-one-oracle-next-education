const msje = document.querySelector(".encriptar-mensaje")
const contenedorEncriptado= document.querySelector(".resultado-encriptado");
const textareaResultado = document.querySelector(".desencriptar-mensaje")
const btnEncriptar = document.querySelector(".btn-encriptar")
const noMensaje = document.querySelector('.no-mensaje')
const btnCopiar= document.querySelector('.btn-copiar')
console.log(noMensaje)

btnEncriptar.addEventListener('click', encriptado)

function encriptado() {
   
    const mensaje = msje.value;
    let mEncriptado = '';

    for (let i = 0; i < mensaje.length; i++) {
        if(msje === ''){
            noMensaje.style = 'display:flex'
        }else{
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
    }
   
    textareaResultado.textContent = mEncriptado
    noMensaje.style.display = 'none'
    contenedorEncriptado.style.display = 'flex'
    console.log(mEncriptado);
}
btnCopiar.addEventListener('click', copiarMensaje)
function copiarMensaje(){
    const mensajeCopiado = textareaResultado.value
    msje.value = ''
    msje.value= mensajeCopiado
}