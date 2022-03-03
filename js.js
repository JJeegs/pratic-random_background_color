//guardó en un array los digitos de un hexadecimal
const hexadecimalArray = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

//funcion para crear numeros aleatorios
function aleatorio(inferior,superior){
    numPosibilidades = superior - inferior
    aleat = Math.random() * numPosibilidades
    aleat = Math.floor(aleat)
    return parseInt(inferior) + aleat
 }
 //funcion q retorna un digito hexadecimal random del array
function digitoHexadecimalRandom(){
    const digito = hexadecimalArray[aleatorio(0,16)];
    return digito;
}
//funcion para concatenar los digitos generados aleatoriamente en una sola variable
function concatenador(digito){
    let color = "";
    const sumarDigitos = () => {
        color += digito;
    }
    sumarDigitos();
    return color;
}
//funcion para generar ya porfin el codigo hexadecimal de 6 digitos y con el #
function colorHexadecimalRandom(){
    let digitoHexadecimal = "#";
    for(i = 0; i < 6; i++){
        const digitoHexa = digitoHexadecimalRandom();
        concatenador(digitoHexa);
        digitoHexadecimal += concatenador(digitoHexa);
    }
    return digitoHexadecimal;
}
//traigo el parrafo del HTML
const parrafo = document.getElementById("look-color");

//funcion encargada de cambiar el color de fondo y de escribir su codigo hexadecimal en el parrafo del HTML
function changeColor (){
    const hexadecimal = colorHexadecimalRandom();
    document.body.style.backgroundColor = hexadecimal;
    parrafo.innerText = "background-color: " + hexadecimal;
}
//ejecuto la funcion para que cuando se inicie la pagina ya este un color aleatorio
changeColor();