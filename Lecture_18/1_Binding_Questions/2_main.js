function outer(){
    console.log(this.name)
    function inner(){
        console.log(this.name)
    }
    return inner
}

let o1 = {
    name: "jatin"
}

outer.call(o1)
let res = outer()
res.call(o1)

// Output-
// jatin
// undefined
// jatin