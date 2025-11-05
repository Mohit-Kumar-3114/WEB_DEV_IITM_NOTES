let obj = {
    a:1,
    b:2,
    fun: ()=>{
        console.log(this.a) // as this point to window object so this.a is undefined
    }
}
obj.fun()

// Output-
// undefined


