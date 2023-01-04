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