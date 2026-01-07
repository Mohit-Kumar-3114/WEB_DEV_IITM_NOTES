import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Courses from "./components/Courses"
import Contact from "./components/Contact"
import NotFound from "./components/404"
import WebDev from "./components/WebDev"
import DSA from "./components/DSA"
import ProductDetails from "./components/ProductDetails"



function App() {

  return (
    <>
   <Navbar/>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/about" element={<About/>}/>
   {/* <Route path="/courses" element={<Courses/>}/>
   <Route path="/courses/web-dev" element={<WebDev/>}/>
   <Route path="/courses/dsa" element={<DSA/>}/> */}

   <Route path="/courses" element={<Courses/>}>
     <Route path="web-dev" element={<WebDev/>}/>
     <Route path="dsa" element={< DSA/>}/>
   </Route>

   <Route path="/contact" element={<Contact/>}/>
   <Route path="*" element={<NotFound/>}/>
   <Route path="/products/:id" element={<ProductDetails/>}/>
   </Routes>
   <Footer/>
    </>
  )
}

export default App







