import React from "react";
import Navbar from "./components/Navbar.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import Hero from "./components/Hero.jsx";

const App = () => {
  const isOpenOwner = useLocation().pathname.includes("owner");
  return <div>
    
    
    {!isOpenOwner && <Navbar />}
    <Routes>

      <Route path="/" element={<Hero />} />
    </Routes>
    
    </div>;
};

export default App;
