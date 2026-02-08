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
    console.log("Child Rendered")
    return(
        <>
        <div> Hi i am child</div>     
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


// Context API prevents prop drilling but it does not prevent re-renders of components that are not 
// using the context value. To prevent re-renders we can use React.memo

