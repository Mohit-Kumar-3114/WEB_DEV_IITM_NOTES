import { useState } from "react"

export default function App(){
  const [kohliScore, setKohliScore] = useState("Virat Kohli scored 0 runs")

  function update(){
   setKohliScore("Virat Kohli scored " + Math.floor(Math.random()*100) + " runs")
  }
  return(
    <>
    <button onClick={update}>Update Kohli Score</button>
    <ScoreCard score="Ms Dhoni scored 32 runs"/>
    <ScoreCard score="Rohit Sharma scored 45 runs"/>
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


// Problem:
// When we click the button, the App component re-renders because kohliScore state changes.
// Due to this, all ScoreCard components re-render, even those with static data
// (Dhoni and Rohit scores), although their props have not changed.
// We want to prevent unnecessary re-rendering of static ScoreCard components
// to optimize performance.
