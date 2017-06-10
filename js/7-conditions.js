'use strict';

/*instrukcje warukowe*/

/*if*/

var wzrostKasi = 167;
var wzrostPiotra = 178;

if (wzrostKasi < wzrostPiotra) {
    console.log('To jest prawda');
}


/*if-else*/
if (wzrostKasi > wzrostPiotra) {
    console.log('To jest prawda');
} else {
    console.log('To nie jest prawda');
}


if (wzrostKasi > wzrostPiotra) {
    console.log('To jest prawda');
} else if (wzrostKasi == wzrostPiotra) {
    console.log('Kasia i Piotr sa tego samego wzrotu');
} else {
    console.log('To nie jest prawda');
}


/*switch*/
var kolor = 'zielony';

switch (kolor) {
    case 'czerwony':
        console.log('kolor jest czerwony');
        break;
    case 'zielony':
        console.log('Kolor jest zielony');
        break;
    default:
        console.log('inny kolor');
}