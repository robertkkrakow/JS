'use strict';

var uczen = {
    name: 'Piotr',
    surname: 'Czerski'
};

console.log(uczen.name);

uczen.wzrost = 180;

console.log(uczen);

uczen.printDetails = function () {
    return 'Ten uczen ma imie ' + this.name + ' i ma ' + this.wzrost + ' cm wzrostu';
}
console.log(uczen.printDetails());



/*klasa z Duzej litery*/

function Student(imie, nazwisko) {
    this.imie = imie;
    this.nazwisko = nazwisko || 'nieznane';
    this.wyswietlInfo = function () {
        return 'Imie ' + this.imie + ' Nazwisko ' + this.nazwisko;

    }

}

var kasia = new Student('Kasia', 'Kostrzewa');
console.log(kasia);

var kasia = new Student('Kasia');
console.log(kasia);


console.log(kasia.wyswietlInfo());