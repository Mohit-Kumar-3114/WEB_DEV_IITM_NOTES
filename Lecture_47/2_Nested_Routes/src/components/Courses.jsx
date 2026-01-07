
import { Link, Outlet } from "react-router-dom"
import "../styling/page.css"

export default function Courses(){
    return (
        <>
       <div style={{display: "flex", justifyContent: "center"}}>
       <Link style={{ color: "blue", fontSize: "16px", textAlign: "center" }} className="links" to="/courses/web-dev">Web-Dev</Link>
       <Link style={{ color: "blue", fontSize: "16px", textAlign: "center"}} className="links" to="/courses/dsa">DSA</Link>
       </div>
       <Outlet/>
        </>
    )
}