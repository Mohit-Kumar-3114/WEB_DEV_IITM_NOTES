// OBJECTS IN JS
// Objects are used to store data in key-value pairs separated by commas

let obj = {
    name: "mohit", // key: value
    age: 21,
    graduation: "B.Tech",
}
console.log(obj) // { name: 'mohit', age: 21, graduation: 'B.Tech' }
console.log(obj.name) // mohit
console.log(obj.graduation) // B.Tech




let nestedObj = {
    name: "Saf", 
    age: 21,
    marks: {
        eng: 23,
        maths: 24,
        hindi: 32
    }
}
console.log(nestedObj) // { name: 'Saf', age: 21, marks: { eng: 23, maths: 24, hindi: 32 } }
console.log(nestedObj.marks.maths) // 24




let obj2 = {
    movies: {
        firstMovie: "Dil wale dhulaniya le jayenge",
        secondMovie: "PK",
        thirdMovie: "Three Idiots"
    },
    actor: "Amir Khan",
    releasedOn: "12 Dec"
}

let obj2Keys = Object.keys(obj2) // returns an array of keys
console.log(obj2Keys) // [ 'movies', 'actor', 'releasedOn' ]

let obj2Values = Object.values(obj2) // returns an array of values
console.log(obj2Values) // print all values

obj2.actor = "Sharukh Khan" 
console.log(obj2)

obj2["actor"] = "Salman Khan"
console.log(obj2)




let obj3 = {
    "my name is": "mohit" // key is a string
}
console.log(obj3["my name is"])
// console.log(obj3.my name is) wrong syntax




let obj4 = {
   name: "zakir",
   age: 20
}

let obj5 = {
   name: "zakir",
   age: 20
}

let obj6 = obj4 // obj6 is a reference to obj4
console.log(obj4 == obj5) // false as their references are different
console.log(obj4.name == obj5.name) // true
console.log(obj6) // { name: 'zakir', age: 20 }
console.log(obj4 == obj6) /// true as their references are same




// for in loop
for(let k in obj4){
    console.log(k) // prints the key
    console.log(obj4[k]) // prints the value of the key
}