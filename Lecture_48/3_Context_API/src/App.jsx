import { useContext } from "react"
import { CompanyContext } from "./context/companyContext.jsx"

export default function App(){
    return(
        <GrandParent/>
    )
}


function GrandParent(){
    const {setCompanyName} = useContext(CompanyContext)
    return(
        <>
        <div>Hi i am grandparent</div>
        <button onClick={()=>setCompanyName("Amazon")}>Chnage comapny name</button>
        <Parent />
        </>
    )
}

function Parent(){
    return(
        <>
        <div> Hi i am parent</div>
        <Child />
        </>
    )
}

function Child(){
    return(
        <>
        <div> Hi i am child</div>
        <GrandChild1 />
        <GrandChild2 />
        </>
    )
}


function GrandChild1(){
    const {companyName} = useContext(CompanyContext)
    return(
        <>
        <div>Hi i am grand child 1</div>
        <div>CompanyName: {companyName}</div>
        </>

    )
}


function GrandChild2(){
    return(
        <>
        <div>Hi i am grand child 2</div>
        </>

    )
}

