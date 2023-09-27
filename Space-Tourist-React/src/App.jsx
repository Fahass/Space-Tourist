// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Destination from "./destination-moon.jsx";
import "./App.css";
import Home from "./components/home/home.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
