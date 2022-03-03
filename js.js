const hexadecimalArray = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

function aleatorio(inferior,superior){
    numPosibilidades = superior - inferior
    aleat = Math.random() * numPosibilidades
    aleat = Math.floor(aleat)
    return parseInt(inferior) + aleat
 }
function digitoHexadecimalRandom(){
    const digito = hexadecimalArray[aleatorio(0,16)];
    return digito;
}
function concatenador(digito){
    let color = "";
    const sumarDigitos = () => {
        color += digito;
    }
    sumarDigitos();
    return color;
}
function colorHexadecimalRandom(){
    let digitoHexadecimal = "#";
    for(i = 0; i < 6; i++){
        const digitoHexa = digitoHexadecimalRandom();
        concatenador(digitoHexa);
        digitoHexadecimal += concatenador(digitoHexa);
    }
    return digitoHexadecimal;
}

const parrafo = document.getElementById("look-color");

function changeColor (){
    const hexadecimal = colorHexadecimalRandom();
    document.body.style.backgroundColor = hexadecimal;
    parrafo.innerText = "background-color: " + hexadecimal;
}

changeColor();