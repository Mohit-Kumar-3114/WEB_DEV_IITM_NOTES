import { useEffect, useState } from "react";

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <MyComponent />} 
    </>
  );
}

function MyComponent() {
 
 useEffect(function(){
    let id = setInterval(function(){
      console.log("my component mounted")
     },1000)

     return function(){
      console.log("component unmounted")
      clearInterval(id)
     }

 },[])

  return(
    <h2>My Component</h2>
  )  
}


// As soon as the component renders for the first time, `useEffect` runs and "component mounted" is printed.
// If a cleanup function is NOT present, the interval will keep running even after the component is unmounted.
// If a cleanup function is present, it runs immediately when the component unmounts and component unmounted 
// is printed. This stops the interval properly and prevents memory leaks.

// The primary use of the return function in useEffect is to clean up any resources or side effects that were 
// set up during the execution of the useEffect function. This can include actions like removing event 
// listeners, unsubscribing from subscriptions, clearing timers, or any other tasks necessary to prevent 
// memory leaks or unexpected behavior when the component is no longer in use.

// In React, lifecycle events are phases that a component goes through during its existence, from creation to 
// removal. These events include actions like initializing, rendering, updating, and cleaning up. With 
// functional components, React Hooks, specifically `useEffect`, are used to handle similar tasks in a more 
// concise and flexible manner.