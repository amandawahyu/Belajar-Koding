let rows1 = 5;
// do loops using rows1 variable to display asterisks in the console.
// insert your code here

for (let i = 0; i < rows1; i++) {
    console.log("*")
}

let rows2 = 5;
// do loops using rows2 variable to display asterisks in the console.
// insert your code here

for (let i = 0; i < rows2; i++) {
    let result = ""
    for (let j = 0; j < rows2; j++) {
        result += "*"
    }
    console.log(result)
}

let rows3 = 5;
// do loops using rows3 variable to display asterisks in the console.
// insert your code here

for (let i = 0; i < rows3; i++) {
    let result = ""
    for (let j = 0; j <= i; j++) {
        result += "*"
    }
    console.log(result)
}

let rows4 = 5;
// do loops using rows4 variable to display asterisks in the console.
// insert your code here

for (let i = 0; i < rows4; i++) {
    let result = ""
    for (let j = 0; j < rows4 - i; j++) {
        result += "*"
    }
    console.log(result)
}