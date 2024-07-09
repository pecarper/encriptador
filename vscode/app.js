
function encriptarVocales() {
    let palabraUsuario = document.getElementById('palabraUsuario').value;
    let resultado = "";
    let i = 0;
    
    while (i < palabraUsuario.length) {
        let letrasPalabraUsuario = palabraUsuario[i];
        
        if (letrasPalabraUsuario === 'a') {
            resultado += "ai";
        } else if (letrasPalabraUsuario === 'e') {
            resultado += "enter";
        } else if (letrasPalabraUsuario === 'i') {
            resultado += "imes";
        } else if (letrasPalabraUsuario === 'o') {
            resultado += "ober";
        } else if (letrasPalabraUsuario === 'u') {
            resultado += "ufat";
        } else {
            resultado += letrasPalabraUsuario;            
        }
        i++;
    }
    return document.getElementById('muestraPalabra').textContent = `${resultado}`;
}

function desencriptarPalabra() {
    let palabraEncriptada = document.getElementById('palabraUsuario').value;
    let resultado = "";
    let i = 0;
    
    while (i < palabraEncriptada.length) {
        if (palabraEncriptada.startsWith("ai", i)) {
            resultado += "a";
            i += 2; // Avanza 2 posiciones porque "ai" tiene 2 caracteres
        } else if (palabraEncriptada.startsWith("enter", i)) {
            resultado += "e";
            i += 5; // Avanza 5 posiciones porque "enter" tiene 5 caracteres
        } else if (palabraEncriptada.startsWith("imes", i)) {
            resultado += "i";
            i += 4; // Avanza 4 posiciones porque "imes" tiene 4 caracteres
        } else if (palabraEncriptada.startsWith("ober", i)) {
            resultado += "o";
            i += 4; // Avanza 4 posiciones porque "ober" tiene 4 caracteres
        } else if (palabraEncriptada.startsWith("ufat", i)) {
            resultado += "u";
            i += 4; // Avanza 4 posiciones porque "ufat" tiene 4 caracteres
        } else {
            resultado += palabraEncriptada[i];
            i++;
        }
    }
    return document.getElementById('muestraPalabra').textContent = `${resultado}`;
}

function copiarPalabra() {
    let palabraCopiada = document.getElementById('muestraPalabra').value;
    console.log(palabraCopiada);
    navigator.clipboard.writeText(palabraCopiada);
}