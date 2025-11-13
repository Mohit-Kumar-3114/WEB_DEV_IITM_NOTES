let input = document.querySelector("#inputBox")
let buttons = document.querySelectorAll("button")


let str = ""

buttons.forEach(function(button){
    button.addEventListener("click", function(event){
        let value = event.target.innerText 

        if(value == "="){
            try{
            let ans = eval(str)
            input.value = ans
            str = ans 
            }
            catch{
                input.value = "ERROR"
            }
        }

        else if(value == "AC"){
            str = ""
            input.value = ""
        }

        else if(value == "DEL"){
            let newSub = str.substring(0, str.length - 1)
            str = newSub
            input.value = newSub
        }

        else{
            str += value 
            input.value = str 
        }
    })
})



document.addEventListener("keyup", function(event){
    let key = event.key
    console.log(key)

     if(key == "Enter"){
            try{
            let ans = eval(str)
            input.value = ans
            str = ans 
            }
            catch{
                input.value = "ERROR"
            }
        }

        else if(key == "Escape"){
            str = ""
            input.value = ""
        }

        else if(key == "Backspace"){
            let newSub = str.substring(0, str.length - 1)
            str = newSub
            input.value = newSub
        }

        else if((key >= "0" && key <="9") || key == "+" || key == "-" || key =="*" || key == "%" || key == "/" || key =="."){
            str += key
            input.value = str 
        }
})

