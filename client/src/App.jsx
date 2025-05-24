import React from "react";
import Navbar from "./components/Navbar.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
// import Hero from "./components/Hero.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Rooms from "./pages/AllRooms.jsx";
import RoomDetails from "./pages/RoomDetails.jsx";
import MyBookings from "./pages/MyBookings.jsx";
import HotelReg from "./components/HotelReg.jsx";
import Layout from "./pages/hotelOwner/Layout.jsx";

import AddRoom from "./pages/hotelOwner/AddRoom.jsx";
import Dashboard from "./pages/hotelOwner/Dashboard.jsx";
import ListRoom from "./pages/hotelOwner/ListRoom.jsx";

import {Toaster} from "react-hot-toast";
import { useAppContext } from "./context/AppContext.jsx";

const App = () => {
  const isOpenOwner = useLocation().pathname.includes("owner");
  const {showHotelReg} =useAppContext()
  return (
    <div>
      <Toaster/>
      {!isOpenOwner && <Navbar />}
      {showHotelReg && <HotelReg/>}
      
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