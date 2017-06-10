'use strict';
/*zmienne liczbowe*/
var liczba = 10;

console.log(liczba);
console.log(liczba);
/*zmienne tekstowe string*/
var tekst = '   Dzień dobry! :)';
console.log(tekst);

//split dzieli cos po okreslonym parametrze
console.log(tekst.split(" "));

//trim - usuwa biale znaki - spacje
console.log(tekst.trim());



/*zmienne logiczne boolean*/
var zmiennaLogiczna = true;

console.log(zmiennaLogiczna);
//console.log(2+2 == 5);

if(zmiennaLogiczna){
    console.log('Warunek spelniony');
}
else{
    console.log('Warunek nie spelniony');
}

/*typy specjalne*/

var zmiennaNiezdefiniowana;
console.log(zmiennaNiezdefiniowana);

var tablica = [null, 'Imie1', 'Imie2'];
console.log(tablica[0]);


/*sprawdzanie typu zmiennych*/
console.log(typeof zmiennaLogiczna);
console.log(typeof liczba);