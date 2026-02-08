import { useEffect } from "react"
import { useRef } from "react"

 export default function App() {
  let salary = 2000
  const spanRef = useRef()

  // useEffect(function(){
  //    setTimeout(function(){
  //    document.getElementById("s1").innerText = 10000
  // }, 5000)
  // }, [])
  // return (
  //   <>
  //   <div>
  //     You salary is <span id="s1">{salary}</span>
  //   </div>
  //   </>
  // )

  useEffect(function(){
     setTimeout(function(){
     spanRef.current.innerText = 10000
  }, 5000)
  }, [])

   return (
    <>
    <div>
      You salary is <span ref={spanRef}>{salary}</span>
    </div>
    </>
  )
}


// useRef is a hook that allows you to directly access a DOM element without using the methods like 
// document.getElementById. It is more efficient and cleaner than using the traditional methods of accessing DOM 
// elements.