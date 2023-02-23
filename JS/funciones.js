const textoIngresado = 'HOLA SOY CRISTIAN y voy a ser tu mejor amigo'
const texto = textoIngresado.toLowerCase()
var textoEncriptado = ''

function replacer(str) {
        for (var i=0; i<str.lenght; i++) {
            var caracter = str.charAt(i);
            if (caracter == 'e'){
                caracter.replace('e', 'enter');
                textoEncriptado += caracter;
            }
            else if(caracter == 'a'){
                caracter.replace('a', 'ai');
                textoEncriptado += caracter;
            }
            else if(caracter == 'i'){
                caracter.replace('i', 'imes');
                textoEncriptado += caracter;
            }
            else if(caracter == 'o'){
                caracter.replace('o', 'ober');
                textoEncriptado += caracter;
            }
            else if(caracter == 'u'){
                caracter.replace('u', 'ufat');
                textoEncriptado += caracter;
            }
            else {
                textoEncriptado += caracter
            }
        }
    return textoEncriptado
}

var resultado = replacer(texto)
console.log(resultado)


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"



// Requisitos:
// - Debe funcionar solo con letras minúsculas
// - No deben ser utilizados letras con acentos ni caracteres especiales
// - Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"