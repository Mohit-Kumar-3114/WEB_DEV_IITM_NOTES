import { useEffect, useState } from 'react'

export default function App() {
  const [todos, setTodos] = useState([])
  const [count, setCount] = useState(0);


  // You cannot make the useEffect callback itself async because React expects the function you pass 
  // to useEffect to either return nothing (undefined) or a cleanup function, but an async function 
  // always returns a Promise, which React does not handle and will warn about. The correct approach 
  // is to keep the useEffect callback synchronous and define an inner async function inside it to 
  // perform any asynchronous tasks, such as fetching data, and then call that function immediately.


  // Wrong method
  //  useEffect( async function(){
  //   console.log("fetching data....")
  //   let url = 'https://dummyjson.com/todos'
  //   let res = await fetch(url)
  //   let data = await res.json()
  //   setTodos(data.todos)
  //  },[])


  

  // Correct method
  useEffect(function(){
    async function fetchTodo(){
    console.log("fetching data....")
    let url = 'https://dummyjson.com/todos'
    let res = await fetch(url)
    let data = await res.json()
    setTodos(data.todos)
  }
  fetchTodo()
  }, [])


return (
  <>
    <button onClick={()=> setCount(count+1)}>count : {count}</button>
   {todos?.map(function(item){
      return(
        <Todo key={item.id} todo={item.todo}/>
      )
    })}

  </>
  )
}

function Todo(props){
    return(
    <div>
        <p>{props.todo}</p>
    </div>
    )
}




