
export default function App(name, description) { 
  return (
     <li>
      <div>{name}</div>
      <p>{description}</p>
     </li>
  )
}

export function App2({name, description}) { 
  return (
     <li>
      <div>{name}</div>
      <p>{description}</p>
     </li>
  )
}

export function App3(props) { 
  return (
     <li>
      <div>{props.name}</div>
      <p>{props.description}</p>
     </li>
  )
}


