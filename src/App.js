import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/project" element={<Project/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>

      </Routes>

    </>
  );
}

export default App;
