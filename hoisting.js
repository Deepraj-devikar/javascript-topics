//In  javascript in phase 1 it scan code and make space in memory for every variable
// and gives value undefined

/**-------------------------------------------------------- */
// var x = 7;

// function getName(){
//     console.log("Namaste JavaScript");
// }

// getName();
// console.log(x);

/**OUTPUT */
/**
Namaste JavaScript
7
 */
/**----------------------------------------------------------- */

getName();
console.log(x);

console.log(getName);

var x = 7;
function getName(){
    console.log("Namaste JavaScript");
}

console.log(getName);

/**OUTPUT */
/**
Namaste JavaScript
undefined
[Function: getName]
[Function: getName]
 */
/**DESCRB
    if we comment var x = 7; then it gives x is undefined error

    -- see we are printing x before declaration it is undefined
    -- but when we printing function before decalration it prints correctly

    -- In phase 1 javascript allocate memory space for each and every variables and functions
    -- in case of variabels it allocates memory and store value undefined
    -- in case of function it allocates memory and store actual function in it
 */
/**------------------------------------------------------------- */

// getName();
// console.log(x);

// console.log(getName);

// anotherFunction(); // will give error not a function
// // because we defined this function as expression function
// // like we create var another function and saved anonymous function to it
// // so in phase 1 what happen it allocates memory space for anotherFunction
// // but insted of storing function body it stores undefined

// // same in case of anotherFunction2 will give error not a function
// anotherFunction2()

// var x = 7;
// function getName(){
//     console.log("Namaste JavaScript");
// }

// console.log(getName);

// var anotherFunction = function () {
//     console.log("I am another function");
// }

// var anotherFunction2 = () => {
//     console.log("I am another function 2");
// }

/**-------------------------------------------------------------------- */

// variableForFunction(); // TypeError: variableForFunction is not a function

anotherProperFunction(); // ReferenceError: anotherProperFunction is not defined

// var variableForFunction = 
function anotherProperFunction(){
    console.log("I am another proper function");
}

/**OUTPUT 
I am another proper function
*/
/**-------------------------------------------------------------------- */