import { useState } from "react"

// export default function App(){ // app is a component  
//   let count = 0
//   function increment(){
//     count++
//   } 

//   return(
//     <div>
//       <h1>Counter App</h1>
//       <p>Count: {count} </p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   )
// }


export default function App(){
  const [count, setCount] = useState(0)

  console.log("App render hua") // state k chnage hone pr component re-render hoga

  function increment(){
    // count++ ye wrong method hai
    setCount(count+1)
  }

 return(
    <div>
      <h1>Counter App</h1>
      <p>Count: {count} </p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}


// useState is a React hook used to manage state in functional components. It returns an array with two 
// elements: the current state value and a function that allows you to update that state. Normal variables 
// are not tracked by React, so their values reset on re-render and UI does not update. useState solves this 
// by storing values internally, remembering them between renders, and notifying React to update the UI.

// Golden Rule:
// React re-renders components when state changes, not when normal variables change.
