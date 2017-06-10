'use strict';

var student = {
    imie: 'Robert',
    wzrost: 178,
    przedstawSie: function() {
        console.log('Czesc, mam na imie ' + this.imie + ' i mam: ' +this.wzrost + ' cm wzrostu' );    
    }
}

console.log(student);