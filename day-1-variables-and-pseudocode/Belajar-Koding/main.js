/**
 * Variable
 * 
 * Definition:
 *  Variables are used to store information/data to be referenced and manipulated in a computer program.
 *  an variable cannot declared more than 1 declaration.
 *  an variable is sensitive case e.g myVariables and MyVariable are different variable.
 *  usually we use camelCase letter to declare a variable (there are some exception, for example declaring a global variable).
 * 
 * There are 3 keywords to initialize variables
 *  - var
 *  - let
 *  - const
 * 
 * var
 *  var is a keyword to declare a variable, usually used in old javascript. avoid declaring variable using var keyword.
 * 
 * let
 *  let is a keyword that used for store a value on variable that can be altered in future (reusable)
 * 
 * const
 *  const is a keyword that used for store a value on variable that cannot be altered in future  
 *  and must be assigned with a value, cannot empty
 */

// an example of declaring variable with var keyword then assign a value to the variable
var myVariable1 // Declaring a myVariable variable
myVariable1 = 'any value' // assigning myVariable with a value of string

// or we can combine declaring and assigning variable with a value, we call this 'shorthand syntax'
var myVariable2 = 'anything :D'

// an example of declaring variable with let keyword
let myVariable3 = 'this is a string'

// we can alter a let variable in future, no matter how many times we alter this variable
myVariable3 = 'this is modified string' // first modified
myVariable3 = 'this is variable that modified 2 times after declared' // second modified

// an example of declaring variable with const
const myVariable4 = 'there must be a value in order to use const keyword'

// if we reassign value to const variable, the program will throw an error
myVariable4 = 'oppsie, encounter an error!'

/**
 * Pseudocode
 * 
 * Definition:
 *  Pseudocode is an informal way of programming description that does not require
 *  any strict programming language syntax or underlying technology considerations.
 *  It is used for creating an outline or a rough draft of a program. Pseudocode summarizes
 *  a program’s flow, but excludes underlying details. Pseudocode usually used for
 *  describing a algorithm/step in order to solving a problem.
 * 
 * Example:
 *  problem:
 *      How to write an email to abc@example.com with 'Hi, There!' as a message?
 * 
 *  steps:
 *      1. open a web browser / email client
 *      2. write abc@example.com as a recipient
 *      3. write 'Hi, There!' to the body of an email
 *      4. click send button
 * 
 * Another Example:
 *  problem:
 *      How to determine a number is an odd or an even
 * 
 *  step:
 *      1. Check if a number is divisible by 2
 *          1a. if yes, the number is even
 *      2. If not, check if a number is divisible by 3
 *          2a. if yes, the number is odd
 * 
 */