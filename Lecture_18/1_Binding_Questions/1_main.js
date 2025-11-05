function outer(){
    console.log(this.name)
    function inner(){
        console.log(this)
    }
    inner()
}

let o1 = {
    name: "jatin"
}

outer.call(o1)

// Output- 
// jatin
// window object







