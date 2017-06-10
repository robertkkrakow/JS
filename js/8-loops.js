'use strict';

/*petla for*/


for (var i = 0; i < 5; i++) {
    console.log('wykonanie petli ' + i);
}

var studenci = ['Student1', 'Stud2', 'stud3'];

for (var i = 1; i <= studenci.length; i++) {
    console.log('Student' + i + ' ma na imie ' + studenci[i - 1]);
}

/*while*/
var it = 0;
while (it < 10) {
    console.log(it);
    it++;
}

var it = Math.floor(Math.random() * 10);
while (it != 5) {
    console.log(it);
    it = Math.floor(Math.random() * 10);

}


do {
    console.log(it);
    it = Math.floor(Math.random() * 10);

} while (it != 5);

/*instrukcja break*/
for (var i = 0; i < 5; i++){
    if(i == 3){
        break;
    }
    console.log(i);
}

/*continue*/
for (var i = 0; i < 50; i++){
    if(i%2 == 0){
        continue;
    }
    console.log(i);
}
