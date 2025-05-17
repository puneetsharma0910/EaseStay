import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages_temp/Home'
import Navbar from './components/Navbar'
import Layout from './ages/hotelOwner/Layout'
import Dashboard from './pages_temp/hotelOwner/Dashboard'
import AddRoom from './pages_temp/hotelOwner/AddRoom'
import ListRoom from './pages_temp/hotelOwner/ListRoom'
import HotelReg from './components/HotelReg'
import { useAppContext } from './context/AppContext'
import { Toaster } from 'react-hot-toast'
import AllRooms from './pages_temp/AllRooms'
import RoomDetails from './pages_temp/RoomDetails'
import Footer from './components/Footer'
import MyBookings from './pages_temp/MyBookings'
import Loader from './components/Loader'

const App = () => {

  // Check Is Route Starts With Owner
  const isOwnerPath = useLocation().pathname.includes("owner");

  const { showHotelReg } = useAppContext();

  return (
    <div className='font-inter'>
      <Toaster />
      {!isOwnerPath && <Navbar />}
      {showHotelReg && <HotelReg />}
      <div className='min-h-[70vh]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rooms' element={<AllRooms />} />
        <Route path='/rooms/:id' element={<RoomDetails />} />
        <Route path='my-bookings' element={<MyBookings />} />
        < Route path="/loader/:nextUrl" element={<Loader />} />
        <Route path="/owner" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-room" element={<AddRoom />} />
          <Route path="list-room" element={<ListRoom />} />
        </Route>
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App