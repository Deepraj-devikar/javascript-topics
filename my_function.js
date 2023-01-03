// Function is block of code.

// we can call function before its defination
console.log(isEven(30)); // => true

// function declaration
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(24)); // => true
console.log(isEven(11)); // => false
console.log(isEven.name); // isEven
console.log(typeof isEven); // function 

// regular function
function sum(value1, value2) {
    return value1 + value2;
}
console.log(sum(5, 6));           // => 11
console.log(([3, 7, 8, 6, 12]).reduce(sum)); // => 36
console.log(([3, 7, 8, 6, 12]).reduce(sum, 11)); // => 47
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// currentIndex and arr is optional

// function expression
const hello = function(person){
    return "Hello "+person;
}
console.log(hello("Deepraj"));   // Hello Deepraj

// Function expression: an argument for .filter()
const numbers = ([1, false, 5]).filter(function(item) {
    return typeof item === 'number';
});
console.log(numbers);    // [1, 5]

// Function expression (IIFE): starts with "("
console.log(
    (function messageFunction(message) {
        return message + ' World!';
    })('Hello')
);              // Hello World


// Function declaration in conditionals
(function() {
//   'use strict';
    if (true) {
        function ok() {
            return 'true ok';
        }
    } else {
        function ok() {
            return 'false ok';
        }
    }
    console.log(typeof ok === 'undefined'); // => true
    console.log(ok()); // Throws "ReferenceError: ok is not defined"
})();
// if we are not writing use strict then we can declare function in conditionals like if, for or while
// if we are writing use strict then we can not declare function in conditionals like if, for or while

// we can do it like this when we are using use strict
(function() {
    'use strict';
    let ok;           // we defined let ok
    if (true) {
        ok = function() {
            return 'true ok';
        };              // assign funtion to ok
    } else {
        ok = function() {
            return 'false ok';
        };              // assign function to ok
    }
    console.log(typeof ok === 'function'); // => true
    console.log(ok()); // => 'true ok'
})();


// function expression in details
const count = function(array) { // Function expression
    return array.length;
}
const methods = {
    numbers: [1, 5, 8],
    sum: function() { // Function expression
        return this.numbers.reduce(function(acc, num) { // func. expression
            return acc + num;
        });
    }
}
console.log(count([5, 7, 8]));  // => 3
console.log(methods.sum());    // => 14 // methods is object sum is key of that object
// methods.sum // expression will return function body it will not execute function
// methods.sum() // expression will call function

// function name indetail
// example 1
console.log(count.name);   // count
console.log(methods.sum.name);   // sum
console.log((
    function(variable) {return typeof variable; }).name
);                          // ''
console.log("nothing printed in last log");

// example 2
const getType = function funName(variable) {
    console.log(typeof funName === 'function'); // => true
    return typeof variable;
}
console.log(getType(3));     // => 'number'
console.log(getType.name);   // => 'funName'
console.log(typeof funName); // => 'undefined'
/*
When a function expression const fun = function() {} is assigned to a variable, 
some engines infer the function name from this variable. However, callbacks might 
be passed as anonymous function expressions, without storing into variables: so 
the engine cannot determine its name.
*/

// Shorthand method definition
const collection = {
    items: [],
    add(...items) {
        this.items.push(...items);
    },
    get(index) {
        return this.items[index];
    }
}; // here method defination is different from : defination by using colon it is annonymous function defination
// here not annonymous function it will benifitial in debuging
collection.add('C', 'Java', 'PHP');
console.log(collection.get(1));   // => 'Java'

class Star {
    constructor(name) {
        this.name = name;
    }
    getMessage(message) {
        return this.name + message;
    }
}
const sun = new Star('Sun');
console.log(sun.getMessage(' is shining'));   // => 'Sun is shining'

// another way of shorthand method declaration
const addMethod = 'add',
getMethod = 'get';
const collection2 = {
    items: [],
    [addMethod](...items) {
        this.items.push(...items);
    },
    [getMethod](index) {
        return this.items[index];
    }
};
collection2[addMethod]('C', 'Java', 'PHP');
console.log(collection2[getMethod](1));  // => 'Java'


//****************ARROW FUNCTION********************
const absValue = (number) => {
    if (number < 0) {
        return -number;
    }
    return number;
}
console.log(absValue(-10));  // => 10
console.log(absValue(5));    // => 5
console.log(absValue);   // [Function: absValue]
console.log(absValue.name); // absValue
console.log(typeof absValue);  // function


//************context transparancy */
class Numbers {
    constructor(array) {
        this.array = array;
    }
    addNumber(number) {
        if (number !== undefined) {
            this.array.push(number);
        } 
        return (number) => { 
            console.log(this === numbersObject); // => true
            this.array.push(number);
        };
    }
}
const numbersObject = new Numbers([]);
const addNumberMethod = numbersObject.addNumber();
addNumberMethod(1);
addNumberMethod(5);
console.log(numbersObject.array); // => [1, 5]

const anotherAddNumberMethod = numbersObject.addNumber(10);
anotherAddNumberMethod(1);
anotherAddNumberMethod(5);
console.log(numbersObject.array); // => [ 1, 5, 10, 1, 5 ]

//*****************Short Callback */
const numbersList = [1, 5, 10, 0];
console.log(numbersList.some(item => item === 0));     // => true

//******************Generator Function */
// a. Function declaration form function* <name>():
function* indexGenerator1(){
    var index = 0;
    while(true) {
        yield index++;
    }
}
const generator1 = indexGenerator1();
console.log(generator1.next().value); // => 0
console.log(generator1.next().value); // => 1

// b. Function expression form function* ():
const indexGenerator2 = function* () {
    let index = 0;
    while(true) {
        yield index++;
    }
};
const generator2 = indexGenerator2();
console.log(generator2.next().value); // => 0
console.log(generator2.next().value); // => 1

// c. Shorthand method definition form *<name>():
const generatorObject = {
    *indexGenerator3() {
        var index = 0;
        while(true) {
            yield index++;
        }
    }
}
const generator3 = generatorObject.indexGenerator3();
console.log(generator3.next().value); // => 0
console.log(generator3.next().value); // => 1