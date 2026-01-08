import { useState } from "react"

export default function App(){
    return(
        <GrandParent/>
    )
}


function GrandParent(){
    const [companyName, setCompanyName] = useState("Google")
    return(
        <>
        <div>Hi i am grandparent</div>
        <button onClick={()=>setCompanyName("Amazon")}>Chnage comapny name</button>
        <Parent companyName={companyName} setCompanyName={setCompanyName}/>
        </>
    )
}

function Parent({companyName, setCompanyName}){
    return(
        <>
        <div> Hi i am parent</div>
        <Child companyName={companyName} setCompanyName={setCompanyName} />
        </>
    )
}

function Child({companyName, setCompanyName}){
    return(
        <>
        <div> Hi i am child</div>
        <GrandChild1 companyName={companyName} setCompanyName={setCompanyName} />
        <GrandChild2 />
        </>
    )
}


function GrandChild1({companyName, setCompanyName}){
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

// Prop drilling means passing data from a parent component to a deeply nested child component by sending it through
// multiple intermediate components that don’t actually need the data — they just pass it along. 


