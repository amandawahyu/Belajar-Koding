/**
 * Javascript primivite data types
 * 
 * Definition of primitive data type:
 *  A primitive data type is either a data type that is built into a programming language,
 *  or one that could be characterized as a basic structure for building more sophisticated data types.
 * 
 * Currently, There are 5 basic primitive data types on javascript:
 *  - string
 *  - number and NaN
 *  - null
 *  - undefined
 *  - boolean
 * 
 * In a future there will be more than 5 data types, these new data type are proposed
 * from proposal like ES2015, ES2020, etc.
 * 
 * To check data type on a variable, we can use 'typeof` keyword
 */

/**
 * 
 * String data types
 * 
 * In JavaScript, a string is a sequence of zero or more characters.
 * A string literal begins and ends with either a single quote(') or a double quote (").
 * A string that begins with a double quote must end with a double quote.
 * Likewise, a string that begins with a single quote must also end with a single quote
 * 
 */

// Create a string using single quote
const myString1 = 'ini string pakai single quote'

// Create a string using double quote
const myString2 = "ini string pakai double quote"

// Create a string using double quote consist of single quote
const myString3 = "i a'm a doctor"

// Create a string with escaped character for single/double quote
const myString4 = 'i a\'m a doctor'

// Combining strings
const myString5 = "Hello"
const myString6 = "world."
const combinedString1 = myString5 + ' ' + myString6

// ES6 introduced template literals that allow you to define a string backtick (`) characters. This is special symbol,
// usually used when we inject a variable into a string and define a string with multi line (enter)
const myString7 = 'Hello,'
const myString8 = 'World'
const combinedString2 = `${myString7} ${myString8} this is a not placeholder`

const myString9 = `
Hi!

Hello.
`

// We can access character inside of string, eg the 3rd character of 'hello' string is 'l'
const hello = 'hello'

// Also, we can check total character of a string using .length
const howManyCharacters = 'hello, world!'

/**
 * Number data types
 * 
 * JavaScript uses the number type to represent both integer and floating-point numbers.
 * In other programming language like strongly typed programming language (e.g java, go, rust)
 * there are 2 types of number: integer (standard number) and float (decimal number). 
 * JavaScript uses the number type to represent both integers and floating-point values.
 * Technically, the JavaScript number type uses the IEEE-754 format.
 * ES2020 introduced a new primitive type bigint representing big integer numbers with values larger than 2^53 – 1.
 * 
 * NaN stands for Not a Number. It is a special numeric value that indicates an invalid number.
 * This value occurs when there are operation non number with number value.
 * 
 * Infinity is a data type that describe a value for number. This data type occurs when any value is divided with 0.
 */

// Create positive number (integer)
const myNumber1 = 99

// Create negative number (integer)
const myNumber2 = -99

// Create positive number (float)
const myNumber3 = 3.14

// Create negative number (float)
const myNumber4 = -3.14

// Print Maximum Number for javascript
Number.MAX_VALUE

// Print Minimum Number for javascript
Number.MIN_VALUE

// Cast number of string to number data type
const myNumber5 = Number('5')

// Cast non number of string to number data type
const invalidNumber = Number('a')

// Division operation number with a number 0
const infinityNumber = 1/0

/**
 * Boolean data types
 * 
 * The boolean type has two literal values: true and false in lowercase.
 * The following example declares two variables that hold the boolean values.
 * JavaScript allows values of other types to be converted into boolean values of true or false.
 * 
 */

// Create boolean variable with false value
const falseValueBoolean = false

// Create boolean variable with true value
const trueValueBoolean = true

// Convert empty string to boolean
const emptyString = ""

// Convert non empty string to boolean
const notEmptyString = "123"

// Convert zero number to boolean
const zeroNumber = 0

// Convert non zero number to boolean
const nonZeroNumber = -99

// Convert undefined or null to boolean
const isUndefined = null

/**
 * Null data type
 * 
 * The null type is the second primitive data type that also has only one value null. 
 * The typeof null returns object is a known bug in JavaScript.
 * A proposal to fix this was proposed but rejected. The reason was the that fix would break a lot of existing sites.
 * JavaScript defines that null is equal to undefined.
 * 
 * Tip: avoid using Null to initialize a variable unless there is an exception.
 */

// Print typeof Null variable

/**
 * Undefined data type
 * 
 * The undefined type is a primitive type that has only one value undefined.
 * By default, when a variable is declared but not initialized, it is assigned the value of undefined.
 */

// Create an unitialized variable, then print the type
let thisIsUndefined

/**
 * Object data type
 * 
 * Object data type is a type of complex data type. In JavaScript, an object is an unordered
 * collection of key-value pairs. Each key-value pair is called a property. The key of a property can be a string.
 * And the value of a property can be any value, e.g., a string, a number, an array, and even a function.
 * 
 * Tip:
 *  Its common to use string as a key of object to avoid confusion
 */

// Create an empty object
const myObject1 = {}

// Create an object with firstName and lastName as a keys
const myObject2 = {
    firstName: "joni",
    lastName: "hendrawan",
    'nama depan': 'jono'
}

// Access property of firstName using dot (.) syntax
// console.log(myObject2.firstName)

// Access property of firstName using array syntax ([]) 
// console.log(myObject2['nama depan'])

// Add an key "age" to the object
myObject2.age = 27

// Modify age property with new value
myObject2.age = 40

// Print the object
// console.log(myObject2)

// Delete age property from object
delete myObject2.age

// Print the object
// console.log(myObject2)

/**
 * 
 * Array data type
 * 
 * In JavaScript, an array is an ordered list of values. Each value is called an element specified by an index.
 * 
 * A JavaScript array has the following characteristics:
 *  - First, an array can hold values of mixed types.
 *      For example, you can have an array that stores elements with the types number, string, boolean, and null.
 *  - Second, the size of an array is dynamic and auto-growing.
 *      In other words, you don’t need to specify the array size up front.
 * 
 */

// Create an empty array
const emptyArray = []

// Create array with values zero until 5
const oneToFive = [1, 2, 3 ,4 ,5]

// Create array with values of strings 'red', 'green', 'blue'
const myFavouriteColour = ['red', 'green', 'blue']

// Access the first element of array
// console.log(myFavouriteColour[1])

// Access the last element of array
// console.log(myFavouriteColour[2])

// Check total element in array
// console.log(myFavouriteColour.length)

// [5, 10, 20, 30, 40]

// Add element to begining of array using .unshift
const myArray = [10, 20, 30, 40]
myArray.unshift(5)

// Add element to end of array using .push
myArray.push(50)

// Remove first element from array using .shift
myArray.shift()

// Remove end element from array using .pop
myArray.pop()

// Find the index of element of array using .indexOf
// console.log(myArray.indexOf(30))

const currentArray = [10, 20, 30 ,40]

currentArray.splice(2, 0, 25)
// console.log(currentArray)
