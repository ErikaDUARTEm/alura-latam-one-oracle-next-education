
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

function desencriptado (){
    const mensaje = msje.value;
    let mDesencriptado = '';
    if (mensaje === '') {
        noMensaje.style.display = 'flex';
        contenedorEncriptado.style.display = 'none';
    } else{
        const palabrasEncriptadas = mensaje.split(' ')
            for (let i = 0; i < palabrasEncriptadas.length; i++) {
                    if(palabrasEncriptadas[i]=== 'enter'){
                        console.log(palabrasEncriptadas[i])
                        mDesencriptado += 'e';
                    }else if(palabrasEncriptadas[i] === 'imes'){
                        mDesencriptado += 'i';
                    } else if(palabrasEncriptadas[i] === 'ai'){
                        mDesencriptado += 'a';
                    } else if(palabrasEncriptadas[i] === 'ober'){
                        mDesencriptado += 'o';
                    } else if(palabrasEncriptadas[i] === 'ufat'){
                        mDesencriptado += 'u';
                    } else{
                    mDesencriptado += palabrasEncriptadas[i];

                    }
                    if (i < palabrasEncriptadas.length - 1) {
                        mDesencriptado += ' ';
                    }
            }
            mensajeVisualizado = mDesencriptado;
            textareaResultado.innerHTML = mensajeVisualizado;
            noMensaje.style.display = 'none';
            contenedorEncriptado.style.display = 'flex';
    }
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
