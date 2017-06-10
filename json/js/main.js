'use strict';

var pracownicy = {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"},
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}

console.log(pracownicy.pracownicy);

pracownicy.pracownicy.forEach( function(elment, index){
    console.log('pracownik ' + (index+1) + ' ma na imie ' + elment.firstName + ' i nazwisko ' + element.lastName);
});


