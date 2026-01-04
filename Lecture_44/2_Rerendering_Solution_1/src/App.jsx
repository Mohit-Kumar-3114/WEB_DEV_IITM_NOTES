import { useState } from "react"
import React from "react"

export default function App(){
  const [kohliScore, setKohliScore] = useState("Virat Kohli scored 0 runs")

  function update(){
   setKohliScore("Virat Kohli scored " + Math.floor(Math.random()*100) + " runs")
  }
  return(
    <>
    <button onClick={update}>Update Kohli Score</button>
    <ScoreCard score={kohliScore}/>
    <ScoreCard score="Ms Dhoni scored 32 runs"/>
    <ScoreCard score="Rohit Sharma scored 45 runs"/>
    </>
  )
}

const ScoreCard = React.memo(function ScoreCard(props){
    console.log(props.score)
    return (
        <h1>
         {props.score}
        </h1>
    )
}) 


// React.memo is a higher-order component that memoizes a component.
// It stores (caches) the last received props and performs a comparison on every re-render.
// If the props have not changed, React skips re-rendering the component.
// If the props change, the component re-renders normally.
