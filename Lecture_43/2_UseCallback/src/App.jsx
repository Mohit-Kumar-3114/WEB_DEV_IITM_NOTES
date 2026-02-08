
import { useState, memo, useCallback } from "react"

export default function Parent(){
    const [count, setCount] = useState(0)

    const f1 = useCallback(function(){
        console.log("f1 is called")
    }, [])

    return(
        <>
        <button onClick={()=> setCount(count+1)}>Count: {count}</button>
        <br></br>
        <Child f1={f1}/>
        </>
    )
}

const Child = memo(function(props){
    console.log("child is called")
    return(
        <>
        <button onClick={props.f1}>Click me to call f1</button>
        </>
    )
})



// The useCallback hook in React is used to memoize functions, preventing unnecessary re-creation of functions on 
// each render. 

// If you didn’t use useCallback, the f1 function would be re-created on every render. Every time the 
// Parent component renders (for example, when the count state changes), a new instance of f1 is 
// created in memory. Even though the logic of the function doesn't change, its reference is different, meaning it 
// is not referentially equal to the previous f1. If you passed this newly created f1 function as 
// a prop to Child, React would see the function as a new prop (because the reference changed), so it would 
// re-render the child.

// With useCallback: By wrapping f1 in useCallback, you ensure that the reference to f1 stays the 
// same across renders, as long as the dependencies don't change (in this case, the dependency array is empty, so it 
// never changes). This means f1 will have the same reference every time Parent re-renders, and 
// React will not consider it a new prop for Child.