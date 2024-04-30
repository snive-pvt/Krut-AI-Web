import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Pricing from "./Pages/Pricing/Pricing";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog";
import AddBlog from "./Pages/AddBlog/AddBlog";
import ToolsMobile from "./Pages/ToolsMobile/ToolsMobile";

function App() {
  return (
    <>
      <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/pricing" element={<Pricing />} /> 
            <Route path="/blogs" element={<Blogs />} /> 
            <Route path="/blog" element={<Blog />}/>
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/addblog" element={<AddBlog   />} /> 
            <Route path="/mobiletools" element={<ToolsMobile   />} /> 
      </Routes>
    </>
  );
}

export default App;
