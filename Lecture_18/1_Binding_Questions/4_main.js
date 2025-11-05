function outer(){
    console.log(this.name)
    let inner = () => {
        console.log(this.name)
    }
    inner()
}

let o1 = {
    name: "jatin"
}

outer.call(o1)

// Output- 
// jatin
// jatin