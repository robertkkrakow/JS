'use strict';

function outerFunction() {
    var variable = 'tekst';

    function innerFunction(variable) {

        console.log(variable);
        var variable = 1;
        console.log(variable);

    }

    console.log(variable);
    return innerFunction(variable);
}

outerFunction();