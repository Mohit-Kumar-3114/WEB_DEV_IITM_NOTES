

export default function LoadTodos(props){
  return(
    <div>
     {props.todos.map((item, index) => (
        <Todo key={index} name={item.name} description={item.description}/>
      ))}
    </div>
  )
}


function Todo(props){
  return (
   <div>
      <div>{props.name}</div>
      <p>{props.description}</p>
    </div>
  )
}




