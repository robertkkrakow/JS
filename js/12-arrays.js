'use strict';

var tablicaImion = ['Inga', 'Robert', 'Jola'];

console.log(tablicaImion[0]);
console.log(tablicaImion);

tablicaImion[2] = 'Marta';
console.log(tablicaImion);

//dodawanie elementow do tablicy
tablicaImion.push('Konrad')
console.log(tablicaImion);

//zdejmowanie elementu - ostatni z tablicy
tablicaImion.pop();
console.log(tablicaImion);

//dodanie na poczatku tablicy
tablicaImion.unshift('Anna');
console.log(tablicaImion);

//usuwanie pierwszego elementu z tablicy
tablicaImion.shift();
console.log(tablicaImion);

console.log(tablicaImion.length);

for (var i = 0; i <tablicaImion.length; i++){
    console.log('imie studenta: ' + tablicaImion[i]);
}

//laczenie elemtow tablicy w jeden ciag znakow () - oddzielone przecinkami, (' ~ ') - oddzielone tylda
console.log(tablicaImion.join(' ~ '));

//odwrocenie kolejnosci tablicy
console.log(tablicaImion.reverse());

//sortowanie i sortowanie z owracaniem
console.log(tablicaImion.sort());
console.log(tablicaImion.sort().reverse());



//dodanie tablicy noweImiona do juz istniejacej
//concat
var noweImiona = ['Luke', 'Andrea'];

console.log(tablicaImion.concat(noweImiona));

//dodanie elementu honda na 3 pozycji bo liczone zera  i 0 elementow do usuniecia
tablicaImion.splice(2,0, 'HONDA');
console.log(tablicaImion);
