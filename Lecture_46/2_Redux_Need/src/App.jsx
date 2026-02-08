import { memo, useContext } from "react"
import { CompanyContext } from "./context/CompanyContext.jsx"

export default function App(){
    return(
        <GrandParent/>
    )
}

const GrandParent = memo(function(){
    console.log("GrandParent Rendered")
    const {setCompanyName} = useContext(CompanyContext)
    return(
        <>
        <div>Hi i am grandparent</div>
        <button onClick={()=>setCompanyName(Math.random().toString(36).substring(2, 10))}>Chnage comapny name</button>
        <Parent />
        </>
    )
})


const Parent = memo(function(){
    console.log("Parent Rendered")
    return(
        <>
        <div> Hi i am parent</div>
        <Child />
        </>
    )
})


const Child = memo(function(){
    const { setCount } = useContext(CompanyContext)
    console.log("Child Rendered")
    return(
        <>
        <div> Hi i am child</div> 
        <button onClick={()=>setCount(c=>c+1)}>Increment Count</button>      
        <GrandChild1 />
        <GrandChild2 />
        </>
    )
})


const GrandChild1 = memo(function(){
    console.log("GrandChild1 Rendered")
    const {companyName} = useContext(CompanyContext)
    return(
        <>
        <div>Hi i am grand child 1</div>
        <div>CompanyName: {companyName}</div>
        </>
    )
})


const GrandChild2 = memo(function(){
    console.log("GrandChild2 Rendered")
    return(
        <>
        <div>Hi i am grand child 2</div>
        </>
    )
})


// When we click on the Increment Count button, along with the Child component, the GrandParent and GrandChild1
// components also re-render. This happens because Context works with a single value object reference. When count 
// changes, the context value object is recreated, so its reference changes. Due to this reference change, all 
// components consuming the context re-render, even if they do not directly use the count value.

// To prevent unnecessary re-renders caused by context value changes, we use a state management library (like Redux).