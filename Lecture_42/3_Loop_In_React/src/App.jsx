


export default function App(props){
  return(
    <div>
      {props.todos.map((item, index) => (
        <div id={index}>
          <div>{item.name}</div>
          <p>{item.description}</p>
        </div>
      ))}

      {/* {props.todos.map(function(item, index){
        return (
           <div id={index}>
          <div>{item.name}</div>
          <p>{item.description}</p>
        </div>
        )
      })} */}
    </div>
  )
}