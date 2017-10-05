function principal(){
	var respuesta = prompt("Indicar el numero de lo que deseamos hacer: \n1)cipher - \n2)decipher");
    do{
        if(respuesta != ""){ 
            if(respuesta == "1") {
                cipher();

            }
            } else if (respuesta == "2") {
                decipher();
            } else {
                alert("Ingrese una opción válida");
            }
        }
     while (respuesta == "" || (respuesta != "1" && respuesta != "2"));
}
principal();


function cipher(message) { //Función
	var message= prompt("Indique si desea cifrar")
var codeMessage = "";  // Aquí va el mensaje que se agregará
for (var i = 0; i < message.length; i++ ) { // for para reconocer las letras del mensaje
caracter = message.charCodeAt(i); // Trabaja sobre cada caracter de la variable
if (caracter >= 65 && caracter <=90){ // Si esta dentro del rango de MAYUSCULAS de ASCII
	var toCipher = ((caracter - 65 +7) % 26) + 65 // Formula: se cifra así para MAYUSCULAS
	codeMessage += string.fromCharCode (toCipher);
} else if (caracter >= 97 && caracter <= 122){ // Si esta dentro del rango de minusculas de ASCII
	var toCipher = ((caracter - 97 + 7)% 26) + 97; // Formula para cifrar minusculas
	codeMessage += String.fromCharCode(toCipher);
	}
}


return codeMessage;
}




function decipher(message) { //Función
	var message= prompt("Indique si desea decifrar")
var codeMessage = "";  // Aquí va el mensaje que se agregará
for (var i = 0; i < message.length; i++ ) { // for para reconocer las letras del mensaje
caracter = message.charCodeAt(i); // Trabaja sobre cada caracter de la variable
if (caracter >= 65 && caracter <=90){ // Si esta dentro del rango de MAYUSCULAS de ASCII
	var toCipher = ((caracter - 65 - 7) % 26) + 65 // Formula: se cifra así para MAYUSCULAS
	codeMessage += string.fromCharCode (toCipher);
} else if (caracter >= 97 && caracter <= 122){ // Si esta dentro del rango de minusculas de ASCII
	var toCipher = ((caracter - 97 -7)% 26) + 97; // Formula para cifrar minusculas
	codeMessage += String.fromCharCode(toCipher);
	}
}


return codeMessage;
}


