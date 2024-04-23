import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Pricing from "./Pages/Pricing/Pricing";


function App() {
  return (
    <>
      <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/pricing" element={<Pricing />} /> 
            <Route path="/contact" element={<Pricing />} /> 
      </Routes>
    </>
  );
}

export default App;
