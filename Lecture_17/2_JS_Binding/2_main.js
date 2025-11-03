// 2. Implicit Binding


// normal function k ander this ka binding object ke sath hota hai
let obj = {
    a:1,
    b:2,
    fun: function(){
        console.log(this) // { a: 1, b: 2, fun: [Function: fun] }
        console.log(this.a) // 1

        // Adding a new property to the object
        this.c = 10
        console.log(this.c) // 10
    }
}

obj.fun()
console.log(obj) // { a: 1, b: 2, fun: [Function: fun], c: 10 }
console.log(obj.c) // 10





// arrow function k ander this ka binding parent function ke sath hota hai
// kyunki parent function nahi hai toh this ka binding window object k sath hota hai
let obj2 = {
    a:10,
    b:20,
    fun: () =>{
        console.log(this) // window object
        console.log(this.a) // undefined
        console.log(this.b) // undefined
    }
}

obj2.fun()
console.log(obj2) // { a: 10, b: 20, fun: [Function: fun] }



