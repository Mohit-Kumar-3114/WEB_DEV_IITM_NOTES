// STRING IN JS
// String is a sequence of characters

let str = "my name is jatin"
console.log(str) // my name is jatin
console.log(str[11]) // j
console.log(str[-2]) // undefined
console.log(str.at(4)) // a
console.log(str.at(-2)) // i
console.log(str.length) // 16
console.log(str.indexOf("is")) // 8
console.log(str.includes("jatin")) // true




console.log(str.slice(3,6)) // nam
console.log(str.slice(6,3)) // no output
let newStr = str.slice(3,6) // slice is a method that returns a new string
console.log(str) // my name is jatin
console.log(newStr) // nam

// substring is a method that returns a new string
console.log(str.substring(3,6)) // nam
console.log(str.substring(6,3)) // nam




let str2 = "hello hello hello hello"
console.log(str2.indexOf("hello")) // 0
console.log(str2.lastIndexOf("hello")) // 18




let str3 = "     hello world     "
console.log(str3.trim()) // remove leading and ending spaces
console.log(str3) // no change
console.log(str3.trim().toLowerCase()) // hello world
console.log(str3.trim().toUpperCase()) // HELLO WORLD
console.log(str3.replace("hello", "hi").trim()) // hi world




let str4 = "grapes"
let str5 = "grapes"
console.log(str4 === str5)




let str6 = "my name is vansh"
str6[1] = "i" // this will not work because strings are immutable
console.log(str6) // my name is vansh




// for of loop
let str7 = "hlo world"
for(let char  of str7){
    // if(char == "o"){
    //     break
    // }
    console.log(char)
}