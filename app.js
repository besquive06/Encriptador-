function encryptWithText() {
    console.log('¡El botón ha sido clickeado!');
    let input = document.getElementById('entradaTexto').value;
    let textoEncriptado = '';
  
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'a') {
            textoEncriptado += 'ai';
        } else if (input[i] === 'e') {
            textoEncriptado += 'enter';
        } else if (input[i] === 'i') {
            textoEncriptado += 'imes';
        } else if (input[i] === 'o') {
            textoEncriptado += 'ober';
        } else if (input[i] === 'u') {
            textoEncriptado += 'ufat';
        } else {
            textoEncriptado += input[i];
        }
    }
 
    document.getElementById('salidaTexto').value = textoEncriptado;
}

function decryptWithText() {
    let encryptedText = document.getElementById('entradaTexto').value;

    let rpta = encryptedText.replaceAll('ai', 'a');
    let rpta1 = rpta.replaceAll('enter', 'e');
    let rpta2 = rpta1.replaceAll('imes', 'i');
    let rpta3 = rpta2.replaceAll('ober', 'o');
    let rpta4 = rpta3.replaceAll('ufat', 'u');

    document.getElementById('salidaTexto').value = rpta4;
    console.log(rpta4);
}

document.getElementById('entradaTexto').addEventListener('input', function(event) {
    const valor = event.target.value;
    if (valor !== valor.toLowerCase()) {
        alert("Ingresar texto en minúscula");
        event.target.value = valor.toLowerCase();
    }
});

// Declaramos la función para copiar el texto
function copyText() {
    let copyText = document.querySelector("#salidaTexto");
    copyText.select();
    document.execCommand("copy");
}


document.querySelector("#copyButton").addEventListener("click", copyText);



