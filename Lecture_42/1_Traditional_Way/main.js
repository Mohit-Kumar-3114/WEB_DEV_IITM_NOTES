let taskList = document.querySelector("#taskList") 

function setTodos(todos){
    for(let i=0; i<todos.length; i++){
        let li = document.createElement("li")
        let div = document.createElement("div")
        let para = document.createElement("para")
        div.innerText = todos[i].name
        para.innerText = todos[i].description
        li.appendChild(div)
        li.appendChild(para)
        taskList.appendChild(li)
    }
}

let todos = [
    {name: "Coding", description: "Saf is a perfect coder"},
    {name: "Swimming", description: "Saf is a great swimmer"},
    {name: "Singer", description: "Saf bhut mast gata hai bas koi sunnna ni usse"},
    {name: "Dancer", description: "Saf is a rockstar"}
]

setTodos(todos)