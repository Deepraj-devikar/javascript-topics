/**
There are different types of JavaScript operators:

Arithmetic Operators
Assignment Operators
Comparison Operators
Logical Operators
Conditional Operators
Type Operators
 */

// ARITHMATIC OPERATOR
let a = 3;
let x = (100 + 50) * a;

console.log(a); // 3
console.log(x); // 450

/**
Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement
 */

//********************************************************************************* */

// ASSIGNMENT OPERATOR
let assignmentX = 10;
assignmentX += 5;

console.log(assignmentX); // 15

/**
Operator	Example	Same As
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y
 */

//************************************************************************************** */

// COMPARISION OPERATOR

/**
Operator	Description
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator
 */

//****************************************************************************************** */

// LOGICAL OPERATOR

/**
Operator	Description
&&	logical and
||	logical or
!	logical not
 */

//************************************************************************************************* */

// TYPE OPERATORS

/**
Operator	Description
typeof	Returns the type of a variable
instanceof	Returns true if an object is an instance of an object type
 */

/****************************************************************************************************** */

// BITWISE OPERATORS

/**
Operator	Description	Example	Same as	Result	Decimal
&	AND	5 & 1	0101 & 0001	0001	 1
|	OR	5 | 1	0101 | 0001	0101	 5
~	NOT	~ 5	 ~0101	1010	 10
^	XOR	5 ^ 1	0101 ^ 0001	0100	 4
<<	left shift	5 << 1	0101 << 1	1010	 10
>>	right shift	5 >> 1	0101 >> 1	0010	  2
>>>	unsigned right shift	5 >>> 1	0101 >>> 1	0010	  2
 */

//************************************************************************************************ */

// PRECEDENCE

/**
**********Operator Precedence Values***********
Expressions in parentheses are computed before the rest of the expression
Function are executed before the result is used in the rest of the expression
Val	Operator	Description	Example
18	( )	Expression Grouping	(100 + 50) * 3
17	.	Member Of	person.name
17	[]	Member Of	person["name"]
17	?.	Optional Chaining ES2020	x ?. y
17	()	Function Call	myFunction()
17	new	New with Arguments	new Date("June 5,2022")
16	new	New without Arguments	new Date()
*************Increment Operators***************
Postfix increments are executed before prefix increments
15	++	Postfix Increment	i++
15	--	Postfix Decrement	i--
14	++	Prefix Increment	++i
14	--	Prefix Decrement	--i
***************NOT Operators********************
14	!	Logical NOT	!(x==y)
14	~	Bitwise NOT	~x
**************Unary Operators********************
14	+	Unary Plus	+x
14	-	Unary Minus	-x
14	typeof	Data Type	typeof x
14	void	Evaluate Void	void(0)
14	delete	Property Delete	delete myCar.color
**************Arithmetic Operators**************
Exponentiations are executed before multiplications
Multiplications and divisions are executed before additions and subtractions
13	**	Exponentiation ES2016	10 ** 2
12	*	Multiplication	10 * 5
12	/	Division	10 / 5
12	%	Division Remainder	10 % 5
11	+	Addition	10 + 5
11	-	Subtraction	10 - 5
11	+	Concatenation	"John" + "Doe"
**************Shift Operators****************
10	<<	Shift Left	x << 2
10	>>	Shift Right (signed)	x >> 2
10	>>>	Shift Right (unsigned)	x >>> 2
*************Relational Operators*************
9	in	Property in Object	"PI" in Math
9	instanceof	Instance of Object	x instanceof Array
***********Comparison Operators***************
9	<	Less than	x < y 
9	<=	Less than or equal	x <= y
9	>	Greater than	x > y
9	>=	Greater than or equal	x >= Array
8	==	Equal	x == y
8	===	Strict equal	x === y
8	!=	Unequal	x != y
8	!==	Strict unequal	x !== y
************Bitwise Operators*****************
7	&	Bitwise AND	x & y
6	^	Bitwise XOR	x ^ y
5	|	Bitwise OR	x | y
************Logical Operators******************
4	&&	Logical AND	x && y
3	||	Logical OR	x || y
3	??	Nullish Coalescing ES2020	x ?? y
*******Conditional (ternary) Operator**********
2	? :	Condition	? "yes" : "no"
******Assignment Operators**********************
Assignments are executed after other operations
2	=	Simple Assignment	x = y
2	:	Colon Assignment	x: 5
2	+=	Addition Assignment	x += y
2	-=	Subtraction Assignment	x -= y
2	*=	Multiplication Assignment	x *= y
2	**=	Exponentiation Assignment	x **= y
2	/=	Division Assignment	x /= y
2	%=	Remainder Assignment	x %= y
2	<<=	Left Shift Assignment	x <<= y
2	>>=	Right Shift Assignment	x >>= y
2	>>>=	Unsigned Right Shift	x >>>= y
2	&=	Bitwise AND Assignment	x &= y
2	|=	Bitwise OR Assignment	x |= y
2	^=	Bitwise XOR Assignment	x ^= y
2	&&=	Logical AND Assignment	x &= y
2	||=	Logical OR Assignment	x ||= y
2	=>	Arrow	x => y
2	yield	Pause / Resume	yield x
2	yield*	Delegate	yield* x
2	...	Spread	... x
1	,	Comma	x , y
 */


// DATA TYPES

/**
JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The Object Datatype
The object data type can contain:

1. An object
2. An array
3. A date
 */

// STRING METHODS

/**
String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()
 */

/**
Extracting string parts
slice(start, end)
substring(start, end)
substr(start, length)
 */

/**
javaScript Search Methods
String indexOf()
String lastIndexOf()
String search()
String match()
String matchAll()
String includes()
String startsWith()
String endsWith() */

/**
Multiline Strings
Template literals allows multiline strings:

Example
let text =
`The quick
brown fox
jumps over
the lazy dog`;
 */

/**
Variable Substitutions
Template literals allow variables in strings:

Example
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`; 
*/

/**
Expression Substitution
Template literals allow expressions in strings:

Example
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
 */