import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";
import "./App.css"
import SearchBar from "./components/SearchBar";
import Product from "./pages/Product";
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div className="container">
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/collection' element={<Collection />} />
        <Route path="/product/:productId" element={<Product/>} />
      </Routes>
      <Footer />
    </div>
  )
}


export default App;
