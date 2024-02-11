
const msje = document.querySelector(".encriptar-mensaje")
const contenedorEncriptado= document.querySelector(".resultado-encriptado");
const textareaResultado = document.querySelector(".desencriptar-mensaje")
const btnEncriptar = document.querySelector(".btn-encriptar")
const noMensaje = document.querySelector('.no-mensaje')
const btnCopiar= document.querySelector('.btn-copiar')
const btnDesencriptar = document.querySelector(".btn-desencriptar")
const mensajeInf = document.querySelector('.mensajeInfor')

let mensajeVisualizado = '';
let mensajeCopiado =false;
//Evento del botón encriptar
btnEncriptar.addEventListener('click', encriptado);
msje.addEventListener('input', actualizarResultado);

function encriptado() {
    const mensaje = msje.value;

    if (mensaje === '') {
        noMensaje.style.display = 'flex';
        contenedorEncriptado.style.display = 'none';
    } else {
        const regex = /[A-ZÁÉÍÓÚÜÑáéíóúüñ0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/

        if (regex.test(mensaje)) {
            contenedorEncriptado.style.display = 'none';
            mensajeInf.style.color= 'red';
            noMensaje.style.display = 'flex';
            
        alert('El input no debe contener mayúsculas, números o caracteres especiales.');
        
        }else{
            let mEncriptado = '';
            for (let i = 0; i < mensaje.length; i++) {
                if (mensaje[i] === 'e') {
                    mEncriptado += 'enter';
                } else if (mensaje[i] === 'i') {
                    mEncriptado += 'imes';
                } else if (mensaje[i] === 'a') {
                    mEncriptado += 'ai';
                } else if (mensaje[i] === 'o') {
                    mEncriptado += 'ober';
                } else if (mensaje[i] === 'u') {
                    mEncriptado += 'ufat';
                } else {
                    mEncriptado += mensaje[i];
                }
            }
            mensajeVisualizado = mEncriptado;
            textareaResultado.textContent = mensajeVisualizado;
            noMensaje.style.display = 'none';
            contenedorEncriptado.style.display = 'flex';
    
            }
        }      
        
}

//Evento del botón desencriptar

btnDesencriptar.addEventListener('click', desencriptado)

const llaves = new Map();
// Se agregan pares clave-valor al mapa 'llaves'
llaves.set('ai', 'a');
llaves.set('enter', 'e');
llaves.set('imes', 'i');
llaves.set('ober', 'o');
llaves.set('ufat', 'u');
function replacer(match) {
    // Retorna el valor asociado a la clave proporcionada desde el mapa 'llaves'
    return llaves.get(match);
}

function desencriptado (){
    const mensaje = msje.value;
    let mDesencriptado = '';
    if (mensaje === '') {
        noMensaje.style.display = 'flex';
        contenedorEncriptado.style.display = 'none';
    } else{
        const regex = /enter|imes|ai|ober|ufat/g
        
                    if (mensaje.match(regex)){
                        mDesencriptado += mensaje.replaceAll(/enter|imes|ai|ober|ufat/g, replacer)
                    } else{
                    mDesencriptado += mensaje[i];
                    }
                   
            }
            console.log(mDesencriptado)
            mensajeVisualizado = mDesencriptado;
            textareaResultado.textContent = mensajeVisualizado;
            noMensaje.style.display = 'none';
            contenedorEncriptado.style.display = 'flex';
    
}



//Evento del botón copiar
btnCopiar.addEventListener('click', copiarMensaje)


function actualizarResultado() {
    const mensaje = msje.value;
    if (mensaje === '') {
        location.reload();
    } else {
        textareaResultado.textContent = mensajeVisualizado;
        noMensaje.style.display = 'none';
        contenedorEncriptado.style.display = 'flex';
    }
    
}


function copiarMensaje() {
  mensajeCopiado = true;
  let mensajeVisualizado = textareaResultado.value;
  msje.value = mensajeVisualizado;
  textareaResultado.value = "";

}
