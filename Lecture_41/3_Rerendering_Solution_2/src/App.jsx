
import { useState } from "react"

export default function App(){
 
  return(
    <>
    <ScoreCard score="Ms Dhoni scored 32 runs"/>
    <ScoreCard score="Rohit Sharma scored 45 runs"/>
    <ScoreCardKohli/>
    </>
  )
}


function ScoreCardKohli(){
    const [kohliScore, setKohliScore] = useState("Virat Kohli scored 0 runs")

    function update(){
        setKohliScore("Virat Kohli scored " + Math.floor(Math.random()*100) + " runs")
    }

  return(
    <>
    <button onClick={update}>Update Kohli Score</button>
    <ScoreCard score={kohliScore}/>
    </>
  )
}


function ScoreCard(props){  
    console.log(props.score)
    return (
        <h1>
         {props.score}
        </h1>
    )
}


// Pushing state down in React means keeping state in the lowest component that actually needs it. When state is 
// kept at a higher level in the component tree, any changes to that state can trigger re-renders for all child 
// components, even if they don't directly use that state. However, by pushing the state down to the components 
// that actually need it, you can minimize unnecessary re-renders beacuse only the components that use the state
// will re-render when that state changes. 