/**
 Archivo con todo el codigo JS necesario para implementar la funcionalidad de reserva de sitios

 Queremos crear un sencillo sistema de gestion de entradas de una sala de cine. Para ello nos serviremos de los metodos:
 - initialize: Inicializa la sala, representada por una matriz NxN (siempre cuadrada)
 - show: Muestra el estado de la sala (butacas libres y ocupadas)
 - suggest: Sugiere una opcion de reserva en base al numero de butacas que se quieren
 - order: Reserva aquellas butacas que suggest haya indicado.

 Las declaraciones de las cabeceras de los metodos NO DEBEN MODIFICARSE.
 Deberás:
 - Crear una variable que almacene el estado de la sala (pon especial atención al tipo de esta variable y su ámbito)
 - Implementar todos los métodos indicados anteriormente.

 Puedes usar el siguiente programa principal para probar
*/
//-------------------------------------------------------------------------------------------
//Programa principal (para comprobar el correcto funcionamiento - puede ser modificado)

//Creamos la sala y la mostramos (deberia estar toda vacia)
initialize(10);
show();

//Obtenemos los valores de algunas sugerencias
let suggestion1 = suggest(5);
let suggestion2 = suggest(8);
let suggestion3 = suggest(11);
console.log(suggestion1);
console.log(suggestion2);
console.log(suggestion3);

//Reservamos butacas
let reservation1 = order(6);
let reservation2 = order(8);
let reservation3 = order(3);
let reservation4 = order(11);
console.log(reservation1);
console.log(reservation2);
console.log(reservation3);
console.log(reservation4);

//Mostramos el estado de la sala
show();


//-------------------------------------------------------------------------------------------
//Declarar aqui, de la forma adecuada, el estado de la sala


var n;                         //dimension
var matrizButacas = [];       // butacas cine


//-------------------------------------------------------------------------------------------
//Metodos a implementar (la declaracion de cada metodo NO se puede modificar)

/**
 * initialize - Crea una nueva sala de cine
 * @param {*} size - Numero de filas y longitud de las filas.
 */

function initialize(size) {
    n = size;
    matrizButacas = [n]
    for ( x=0; x<n; x++) {
        let row = [n]
        for ( y=0; y<n; y++) {
            row[y]=" - "
        }
        matrizButacas[x] = row
    }
}

/**
 * show - No recibe argumentos
 * Devuelve un String que representa el estado actual de la sala.
 * Formato: X para asientos ocupados, - para asientos libres.
 * Ejemplo (3x3):
 * - - X
 * - X -
 * X X X
 * 
 */
function show() {
    console.table(matrizButacas)
    // console.log("-".repeat(n*4));
    // console.log("SALA: #");
    // console.log("-".repeat(n*4));

    // for ( x=0;x<n ;x++ ) {
    //     let string_builder = "";
    //     for ( y=0; y<n ;y++ ) {
    //         string_builder += " " + matrizButacas[x][y]
    //     }
    //     console.log(string_builder);
    // }
    // console.log("\n".repeat(2));
}


/**
 * suggest - Dada una cantidad de butacas deseadas, devuelve una posible acomodacion
 * Devuelve un String indicando la fila y columna de la butaca
 * La sugerencia debe contener butacas que esten siempre en la misma fila. Si no es posible, se devolvera 'null'
 * Ejemplo: suggest(3)
 * Resultado: F6B6, F6B7, F6B8 (fila 6, butacas 6, 7 y 8)
 * 
 * Esta operacion NO RESERVA ninguna butaca, solo ofrece una sugerencia. El criterio para ofrecer la sugerencia es de libre eleccion.
 * @param {*} requestSize 
 */
function suggest(requestSize) {
    let count=0;
    var butacas = [];
    let stringBuilder = "";

    if (n > requestSize) {
        for ( x=0;x<n ;x++ ) {
            for (  y=0; y<n ;y++ ) {
                if (count == requestSize){
                    for ( i=y-requestSize; i<y ;i++ ) {
                        butacas.push("F"+(x+1)+"B"+(i+1))
                        stringBuilder += "F"+(x+1)+"B"+(i+1) +","
                    }
                    return stringBuilder.slice(0,-1)
                }
                else if (matrizButacas[x][y] == " - "){
                    count ++;
                }
            }
        }
    }
    return null;
}


/**
 * order - Dada una cantidad de butacas deseadas, reserva aquellas que 'suggest' indique.
 * Devuelve un String indicando la fila y columna de la butaca
 * Si 'suggest' devuelve 'null' entonces se devuelve un mensaje indicando que no es posible reservar.
 * @param {*} requestSize 
 */
function order(requestSize) {
    suggestRequest = suggest(requestSize);
    let stringBuilder = "Butacas reservadas: ";
    if (suggestRequest){
        var butacas = suggestRequest.split([","])
        for ( i=0; i<butacas.length ;i++ ) {
            let items = get_row_column(butacas[i])
            matrizButacas[ items["x"] -1 ] [ items["y"] -1] = " X ";
        }
        return stringBuilder+suggestRequest
    }
    return "No es posible reservar"
}


function get_row_column(butaca) {
    let separete = butaca.split("B")
    return {
        "x": parseInt(separete[0].slice(1)),
        "y": parseInt(separete[1]),
    }
}