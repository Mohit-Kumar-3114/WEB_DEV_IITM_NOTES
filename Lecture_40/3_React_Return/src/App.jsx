import React from "react"

// shows error
// export default function App(){
//   return(
//     <div>
//       This is div 1
//     </div>
//     <div>
//       This is div 2
//     </div>
//   )
// }


export default function App(){
  return(
    <>
      <div>
        this is  div 1
      </div>
      <div>
        this is div 2
      </div>
    </>
  )
}



export function App2(){
  return(
    <React.Fragment>
      <div>
        this is  div 1
      </div>
      <div>
        this is div 2
      </div>
    </React.Fragment>
  )
}


// React enforces a single parent element in components mainly for Reconciliation. Reconciliation is the process
// where React compares the previous and current virtual DOM to determine the minimal changes needed for the real DOM.
// By having a single root element, React can efficiently perform this reconciliation and update the DOM with optimal performance.


// While a single root element is required, React provides a feature called fragments (<></> or <React.Fragment>
// </React.Fragment>) that allows you to group multiple elements without introducing an extra node in the real DOM. 
// Fragments don't create an additional parent in the DOM but still satisfy the single-root rule.