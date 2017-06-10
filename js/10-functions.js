'use strict';

function addNumbers(parametr1, parametr2) {
    var num1 = parametr1;
    var num2 = parametr2;

    var wynik = num1 + num2;
    console.log('wynik dodawania to: ' + wynik);

    return wynik;

}

addNumbers(7, 3);
addNumbers('czesc ', 'kolego');
addNumbers(1);
addNumbers('czesc ');

var wynikFunkcji = addNumbers(6, 9);





function evenCounts(parametr, par2) {
    var evenNumbers = 0;

    for (var i = 1; i <= parametr; i++) {
        if (i % par2 == 0) {
            evenNumbers++;
        }

    }
    return evenNumbers;
}
console.log(evenCounts(100,5));