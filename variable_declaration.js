// In JavaScript, users can declare a variable using 3 keywords that are var, let, and const.

/** OPEN ONE BLOCK OF CODE AT A TIME */


// var value = "check outside"

// function functionBlock(){
//     var value = "check outside block and inside function"
//     console.log(value+" => printing in function");
//     {
//         var value = "check inside block"
//         console.log(value+" => printing in block");
//     }
// }

// console.log(value+" => print outside");
// functionBlock()
/** OUTPUT */
/**
check outside => print outside
check outside block and inside function => printing in function
check inside block => printing in block
 */
/**------------------------------------------------------------------ */
// var value = "check outside"

// function functionBlock(){
//     // var value = "check outside block and inside function"
//     console.log(value+" => printing in function");
//     {
//         var value = "check inside block"
//         console.log(value+" => printing in block");
//     }
// }

// console.log(value+" => print outside"); // giving error here if commented "check outside"
//                                         // error is -> value is not defined, so i uncommented it
// functionBlock()
/** OUTPUT */
/**
check outside => print outside
undefined => printing in function
check inside block => printing in block
 */
/** CONCLUSION */
/**
value of check outside block and inside function is undefined, it didn't gave error value is not defined 
scope of var is not found inside of function
 */
 /**------------------------------------------------------------------------ */
let value = "check outside"

function functionBlock(){
    // let value = "check outside block and inside function"
    console.log(value+" => printing in function");
    {
        let value = "check inside block"
        console.log(value+" => printing in block");
    }
}

console.log(value+" => print outside"); // giving error here if commented "check outside"
                                        // error is -> value is not defined, so i uncommented it
functionBlock()
/** OUTPUT */
/**
check outside => print outside
check outside => printing in function
check inside block => printing in block
 */
/** CONCLUSION */
/**
value of check outside block and inside function have value of check outside, it didn't gave error value is not defined 
scope of let is found inside of function as well
 */
/**--------------------------------------------------------------------------------- */
// const value = "check outside"

// function functionBlock(){
//     // const value = "check outside block and inside function"
//     console.log(value+" => printing in function");
//     {
//         const value = "check inside block"
//         console.log(value+" => printing in block");
//     }
// }

// console.log(value+" => print outside"); // giving error here if commented "check outside"
//                                         // error is -> value is not defined, so i uncommented it
// functionBlock()
/** OUTPUT */
/**
check outside => print outside
check outside => printing in function
check inside block => printing in block
 */
/** CONCLUSION */
/**
value of check outside block and inside function have value of check outside, it didn't gave error value is not defined 
scope of const is found inside of function as well
 */
/**--------------------------------------------------------------------------------- */

// var a = 10;
// var a = 20;
// a = 30
// console.log(a); // 30

/**-------------------------------------------------------------------------------- */

// let a = 10;
// let a = 20;
// a = 30
// console.log(a); // error:- Identifier 'a' has already been declared

/**--------------------------------------------------------------------------------- */

// let a = 10;
// a = 30
// console.log(a); // 30

/**--------------------------------------------------------------------------------- */

// const a = 10;
// const a = 20;
// a = 30;
// console.log(a); // error:- Identifier 'a' has already been declared

/**--------------------------------------------------------------------------------- */

// const a = 10;
// a = 30;
// console.log(a); // error:-  TypeError: Assignment to constant variable.

/**--------------------------------------------------------------------------------- */

// const a = 10;
// console.log(a); // 10

/**---------------------------------------------------------------------------------- */

// var a = 10;

// functionBlock();

// function functionBlock(){
//     console.log(a); // 10
// }

/**------------------------------------------------------------------------------------- */
// var a = 10;

// functionBlock();

// function functionBlock(){
//     console.log(a); // undefined
//     var a = 20
// }

/**------------------------------------------------------------------------------------- */

// var a = 10;

// functionBlock();

// function functionBlock(){
//     console.log(a); // 10
//     a = 20
//     console.log(a); // 20
// }

/**------------------------------------------------------------------------------------------ */

// let a = 10;

// functionBlock();

// function functionBlock(){
//     console.log(a); // 10
// }

/**------------------------------------------------------------------------------------- */
// let a = 10;

// functionBlock();

// function functionBlock(){
//     console.log(a); // ReferenceError: Cannot access 'a' before initialization
//     let a = 20
// }

/**------------------------------------------------------------------------------------- */

// let a = 10;

// functionBlock();

// function functionBlock(){
//     console.log(a); // undefined
//     var a = 20
// }

/**--------------------------------------------------------------------------------------- */

// let a = 10;

// functionBlock();

// function functionBlock(){
//     console.log(a); // 10
//     a = 20
//     console.log(a); // 20
// }

/**---------------------------------------------------------------------------------------- */

// const a = 10;

// functionBlock();

// function functionBlock(){
//     console.log(a); // 10
// }

/**------------------------------------------------------------------------------------- */
// const a = 10;

// functionBlock();

// function functionBlock(){
//     console.log(a); // ReferenceError: Cannot access 'a' before initialization
//     const a = 20
// }

/**------------------------------------------------------------------------------------- */

// const a = 10;

// functionBlock();

// function functionBlock(){
//     console.log(a); // 10
// }

/**-------------------------------------------------------------------------------------- */
// const a = 10;

// functionBlock();

// function functionBlock(){
//     console.log(a); // 10
//     a = 20 // TypeError: Assignment to constant variable.
//     console.log(a); // 20
// }

//********************************************************************************************************************* */

/**
4 ways to declare javascript variables i.e. var, let, const and also we can declare without using anything
- when we declare variable with var or without using anything then we can access it before its decalration because it hoisted before execution start
but when we decalre variable with let or const then we can not access it before decalration because it is not hoisted before execution

- when we decalre variable using let or const then it will have block scope so if we decalre any variable inside of block then we can not access it outside of that block
but in case of var or without using anything we declare then it will have global scope so in case of var or without using anything we decalre variable than we can access it outside of that block also

var or without using anything has global scope
let has block scope
const has block scope and it will be constant

when we declare any variable using var so we can redeclare it and also reassign values to it
when we decalre any variabel using let so we can not redeclare it but we can reassign values to it
when we declare any variable using const so we can not redeclare it and also we can not reassign values to it

one thing about string and number
2 + 2 = 4
2 + '2' = '22'
'2' + 2 = '22'
'2' + '2' = '22'
2 + 2 + 2 = 6           //****
2 + 2 + '2' = '42'      //****
2 + '2' + 2 = '222'
2 + '2' + '2' = '222'
'2' + 2 + 2 = '222'
'2' + 2 + '2' = '222'
'2' + '2' + 2 = '222'
'2' + '2' + '2' = '222'
 */

