import { lazy, Suspense } from "react"
import Home from "./components/Home"
// import About from "./components/About"
// import Blogs from "./components/Blogs"
const About = lazy(()=> import("./components/About"))
const Blogs = lazy(()=> import ("./components/Blogs"))
const Random  = lazy(()=> import("./components/Blogs").then(module => ({default: module.Random})))
import Loading from "./components/Loading"
import {Routes, Route} from "react-router-dom"



export default function App(){

    return(
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<Suspense fallback={<Loading/>}><About/></Suspense>}/>
    <Route path="/blogs" element={<Suspense fallback={"loading......"}><Blogs/></Suspense>}/>
    <Route path="/random" element={<Suspense fallback={"loading......"}><Random/></Suspense>}/>
    </Routes>  
    )
 
}