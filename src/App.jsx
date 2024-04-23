import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Pricing from "./Pages/Pricing/Pricing";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";


function App() {
  return (
    <>
      <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/pricing" element={<Pricing />} /> 
            <Route path="/blogs" element={<Blogs />} /> 
            <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </>
  );
}

export default App;
