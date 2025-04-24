let kata = 'xoxoxo';
// insert your coding here

let xCount = 0
let oCount = 0

for (let i = 0; i < kata.length; i++) {
    if (kata[i] === "x") {
        xCount++
    } else if (kata[i] === "o") {
        oCount++
    }
}

if (xCount === oCount) {
    console.log(true)
} else {
    console.log(false)
}