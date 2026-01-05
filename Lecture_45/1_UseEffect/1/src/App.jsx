import { useEffect, useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(10);

  // Case 1: runs on every render
useEffect(function () {
  console.log("case 1 ran")
})

// Case 2: runs only once on the first render (component mount)
useEffect(function () {
  console.log("case 2 ran")
}, [])

// Case 3: runs on first render and whenever `num` changes
useEffect(function () {
  console.log("case 3 ran")
}, [num])

  function update(){
    setCount(count+1)
  }
  return (
    <>
    <div>
     Count : {count}
    </div>
    <button onClick={update}>Increase count</button>
    {/* <button onClick={function(){setCount(count+1)}}> increae</button> */}
     <div>
     Num : {num}
    </div>
    <button onClick={()=> setNum(num+1)}>Increase num</button>
    </>
  )
}




// useEffect is another important React hook that allows you to perform side effects typically include data fetching, 
// setting up subscriptions, or manually changing the DOM. The useEffect hook takes a function as its first argument. 
// This function contains the code that should be executed as a side effect. The second argument of useEffect is an 
// array of dependencies. The effect runs again whenever the dependencies change. If the array is empty ([]), the 
// effect runs once after the initial render.

