import { useState } from "react"


export default function App(){
  const [isLoggedIn, setIsLoggedIn]  = useState(false)
   function toggle(){
    setIsLoggedIn(!isLoggedIn)
   }

  return(
    <div>
     <div>
      {/* Used when we want to render different content based on a condition */}
     {isLoggedIn ? (
      <h1>You are a logged in user</h1>
      ) : (
         <h1>Pls login in</h1>
      )
    }

    <button onClick={toggle}>Toggle</button>
     </div>
    </div>
  )
}



export function App2(){
  const [isLoggedIn, setIsLoggedIn]  = useState(false)

  function toggle(){
    setIsLoggedIn(!isLoggedIn)
  }

  return(
    <div>
      {/* Used when we want to render content only if a condition is true */}
      {isLoggedIn && (
          <h1>This is a dashboard page</h1>
      )}

      <button onClick={toggle}>{isLoggedIn ? "Logout" : "Login"}</button>

    </div>
  )
}