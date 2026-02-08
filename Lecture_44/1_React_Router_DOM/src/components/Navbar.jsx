import { Link } from "react-router-dom"
import "../styling/navbar.css"

export default function Navbar(){
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
        </>
    )
}