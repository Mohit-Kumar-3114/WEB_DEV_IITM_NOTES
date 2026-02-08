import { Link } from "react-router-dom"
import "../styling/navbar.css"
import { useNavigate } from "react-router-dom";


export default function Navbar(){
    const navigate = useNavigate()
    return(
        <>
        <div id="parent">
            <h1>Coding Blocks</h1>
            <div>
            {/* anchor tag makes a full page reload  */}
            {/* <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/course">Courses</a>
            <a href="/contact">Contact</a> */}


            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/contact">Contact</Link>
            
            </div>
        
        </div> 
        <div>
            <button onClick={() => {
                navigate("/")
            }} style={{border: "none", backgroundColor: "red", margin: "10px", height: "30px", borderRadius: "4px", padding: "5px"}}>Return to home page</button>
            <button onClick={() => {
                navigate(-1)
            }}  style={{border: "none", backgroundColor: "red", margin: "10px", height: "30px", borderRadius: "4px", padding: "5px"}}>Back</button>
            <button onClick={() => {
                navigate(+1)
            }}  style={{border: "none", backgroundColor: "red", margin: "10px", height: "30px", borderRadius: "4px", padding: "5px"}}>Next</button>
        </div>
        </>
    )
}

