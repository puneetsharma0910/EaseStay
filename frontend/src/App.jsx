import React from "react";
import Navbar from "./components/Navbar.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
// import Hero from "./components/Hero.jsx";
import Home from "./Pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Rooms from "./Pages/Rooms.jsx";
import RoomDetails from "./Pages/RoomDetails.jsx";


const App = () => {
  const isOpenOwner = useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOpenOwner && <Navbar />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
