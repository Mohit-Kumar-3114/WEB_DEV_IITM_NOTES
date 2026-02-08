import { useMemo } from "react";
import { useState } from "react";

export default function App(){
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState(0);

  const result = useMemo(function(){
   console.log("heavy calculation")
   console.log(inputValue)
    let sum = 0;
    for(let i = 0; i <= inputValue; i++){
      sum = sum + i
    }
    return sum  
  }, [inputValue])


  // function calculateSum(inputValue){
  //   console.log("heavy calculation")
  //   console.log(inputValue)
  //   let sum = 0;
  //   for(let i = 0; i <= inputValue; i++){
  //     sum = sum + i
  //   }
  //   return sum
  // }

  // const result = calculateSum(inputValue)

  return(
    <>
    <button onClick={()=> setCount(count+1)}>Increase count</button>
    <div>Count: {count}</div>
    <input value={inputValue} onChange={function(e){
      setInputValue(e.target.value)
    }}></input>
    <div>Sum of inputValue: {result}</div>
    </>
  )
}

// useMemo is a React Hook that is used to memoize the result of a computation, preventing unnecessary 
// recalculations when the component re-renders. It takes a function and an array of dependencies. The memoized 
// function will only be recomputed when the values in the dependencies array change.