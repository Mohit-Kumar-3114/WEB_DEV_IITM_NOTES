import { useState } from "react";

export default function App(){
    const [email, setEmail] = useState("")

    return(
        <>
        <input type="text" 
        placeholder="enter you email" 
        value={email} // state => UI
        onChange={function(e){
            setEmail(e.target.value)  // UI => state
        }}/>

        <div>Email: {email}</div>
        </>
    )
}


// Two-way binding means that data flows in both directions: From state to UI and From UI to state. When the 
// user updates the UI (for example, types in an input field), the state updates. When the state updates, the 
// UI automatically reflects that change.