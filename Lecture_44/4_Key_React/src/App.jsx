import { useState } from "react";
let global_id=4

export default function App(){
    const [todos, setTodos] = useState([
        {
            id: 1,
            name: "go to gym",
            description: "going to gym from 6 am to 8 am"
        },
        {
            id: 2,
            name: "go to college",
            description: "going to college from 9 am to 3 pm"
        },
        {
            id: 3,
            name: "go to coding class",
            description: "going to coding class from 4 pm to 8 pm"
        },
    ])


    function addNewTodo(){        
       setTodos([...todos,{
        id: global_id++,
        name: "new todo",
        description: "new todo added"
       }])
    }


    return(
        <>
        <button onClick={addNewTodo}>Add todo</button>
        {todos.map(function(item){
            return(
            <Todo key={item.id} name={item.name} description={item.description}/>
            )
        })}
        </>
    )
}

function Todo(props){
    return(
    <div>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
    </div>
    )
}

// React uses the Virtual DOM to optimize rendering. When changes occur, React compares the new Virtual DOM with the 
// previous one to determine the minimal updates needed. The key helps React efficiently identify which items have
// changed, been added, or removed.

// 1. Without key: React has to compare each element one-by-one to find changes, which can be inefficient.
// 2. With key: React can directly track and update only the changed elements because each item has a unique key.