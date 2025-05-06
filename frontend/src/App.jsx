import React from "react";
import Navbar from "./components/Navbar.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
// import Hero from "./components/Hero.jsx";
import Home from "./Pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Rooms from "./Pages/Rooms.jsx";
import RoomDetails from "./Pages/RoomDetails.jsx";
import MyBookings from "./Pages/MyBookings.jsx";
import HotelReg from "./components/HotelReg.jsx";
import Layout from "./Pages/hotelOwner/Layout.jsx";

import AddRoom from "./Pages/hotelOwner/AddRoom.jsx";
import Dashboard from "./Pages/hotelOwner/Dashboard.jsx";
import ListRoom from "./Pages/hotelOwner/ListRoom.jsx";

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
         
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/owner" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="list-room" element={<ListRoom />} />
          </Route>
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
