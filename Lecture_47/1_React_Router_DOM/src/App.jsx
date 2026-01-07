import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Courses from "./components/Courses"
import Contact from "./components/Contact"
import NotFound from "./components/404"

function App() {

  return (
    <>
   <Navbar/>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/courses" element={<Courses/>}/>
   <Route path="/contact" element={<Contact/>}/>
   <Route path="*" element={<NotFound/>}/>
   </Routes>
   <Footer/>
    </>
  )
}

export default App


// Routing means showing different pages/components based on the URL without reloading the page. Example:
// / → Home Page
// /about → About Page
// /contact → Contact Page
// React uses Single Page Application (SPA) concept.


// React Router DOM is a popular library for React that lets you add navigation and routing to your app.
// The main components involved in React Router DOM are BrowserRouter, Routes, and Route. 

// 1. BrowserRouter: The BrowserRouter component is a top-level component that should be used to wrap your entire 
// application. It enables the use of routing features throughout your React application. 

// 2. Routes: The Routes component is act as a container for your Route components.The Routes component can contain
// multiple Route components, each representing a different view or page.

// 3. Route: The Route component is responsible for rendering specific components based on the current URL path. It 
// takes two main props: path and element. The path prop defines the URL path that should match for the route to be 
// rendered, and the element prop specifies the component to render when the path matches.






