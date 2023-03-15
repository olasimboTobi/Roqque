import React from "react"
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="flex h-[100vh] justify-center items-center bg-[#000000]">
     <ToastContainer
        position="top-center"
        className="w-full"
        style={{ width: "600px" }}
      /> 
      
      <HomePage/>
      <Router>
        <Routes>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
