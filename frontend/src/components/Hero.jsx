import React from "react";
import { assets, cities } from "../assets/assets";

const Hero = () => {
  return (
    <div className='relative flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32
      text-white bg-[url("/src/assets/raj.jpg")] bg-no-repeat bg-cover bg-center h-screen'>

      {/* Soft dark overlay on the background for better text visibility */}
      <div className="absolute inset-0 bg-black/20 backdrop-brightness-90"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-3xl">
        <p className="bg-white/20 text-white px-4 py-1 rounded-full mt-20 text-sm font-semibold tracking-wide backdrop-blur-sm">
          The Ultimate Hotel Experience
        </p>

        <h1 className="font-playfair text-3xl md:text-5xl md:text-[56px] md:leading-[64px] font-extrabold max-w-xl mt-6 drop-shadow-2xl">
          Discover Your Perfect Gateway Destination
        </h1>

        <p className="max-w-lg mt-4 text-white/90 text-sm md:text-base leading-relaxed drop-shadow">
          Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.
        </p>

        {/* Form Section */}
        <form className="bg-white/80 backdrop-blur-md text-gray-700 rounded-xl px-8 py-6 mt-8 flex flex-col md:flex-row md:items-end gap-4 w-full shadow-xl">
          
          {/* Destination Input */}
          <div className="flex flex-col w-full md:w-1/4">
            <label className="flex items-center gap-2 text-sm font-semibold mb-1">
              <img src={assets.locationIcon} alt="location" className="h-5" />
              Destination
            </label>
            <input
              list="destinations"
              id="destinationInput"
              type="text"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Type here"
              required
            />
            <datalist id="destinations">
              {cities.map((city, index) => (
                <option value={city} key={index}></option>
              ))}
            </datalist>
          </div>

          {/* Check-in Input */}
          <div className="flex flex-col w-full md:w-1/5">
            <label className="flex items-center gap-2 text-sm font-semibold mb-1">
              <img src={assets.calenderIcon} alt="calendar" className="h-5" />
              Check in
            </label>
            <input
              id="checkIn"
              type="date"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Check-out Input */}
          <div className="flex flex-col w-full md:w-1/5">
            <label className="flex items-center gap-2 text-sm font-semibold mb-1">
              <img src={assets.calenderIcon} alt="calendar" className="h-5" />
              Check out
            </label>
            <input
              id="checkOut"
              type="date"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Guests Input */}
          <div className="flex flex-col w-full md:w-1/6">
            <label className="flex items-center gap-2 text-sm font-semibold mb-1">
              Guests
            </label>
            <input
              min={1}
              max={4}
              id="guests"
              type="number"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="0"
            />
          </div>

          {/* Search Button */}
          <button className="flex items-center justify-center gap-2 rounded-lg bg-[#1B1B1B] hover:bg-black py-3 px-6 text-white text-sm font-semibold transition-all w-full md:w-auto">
            <img src={assets.searchIcon} alt="search" className="h-6" />
            Search
          </button>

        </form>
      </div>
    </div>
  );
};

export default Hero;
