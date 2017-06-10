'use strict';

/*operatory*/

var liczbaPierwsza = 5;
var liczbaDruga = 2;

console.log(liczbaPierwsza % liczbaDruga);
console.log('----------------------');

/*inkrementacja*/

while (liczbaPierwsza > liczbaDruga) {
    console.log(liczbaPierwsza);
    //zmiejszanie liczby pierwszej o 1
    --liczbaPierwsza;
    console.log('------------[]----------');
}

/*operatory przypsania*/
var liczbaTrzecia = 6
console.log(liczbaTrzecia);
//przypisanie nowej wartosci do liczby pierwszej
liczbaTrzecia += 3;
liczbaTrzecia -= 1;
liczbaTrzecia *= 2;
liczbaTrzecia /= 4;
liczbaTrzecia %= 4;
console.log(liczbaTrzecia);


/*operatory porownania*/
if (2 == 2){
    console.log('to jest prawda');
}
else{
    console.log('false');
} 


/*operatory logiczne*/
if (2 <= 2 && 8 > 9){
    console.log('to jest prawda');
}
else{
    console.log('to jest falsz');
}

/*negacja logiczna*/
if (!(2<2)){
    console.log('to jest prawda');
}
else{
    console.log('falsz');
}


/*operator warunkowy - skrocony if*/
/*jezeli 2< 3 do do zmiennej przypisz mi dwa jest.. else etam*/
var zmienna = (2 < 3)?'Dwa mniejsze od trzy':'e tam';
console.log(zmienna);
