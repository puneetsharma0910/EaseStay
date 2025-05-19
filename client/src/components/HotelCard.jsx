import React from "react";
import { assets } from "../assets/assets.js";
import { Link } from "react-router-dom";

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={`/rooms/${room._id}`}
      onClick={() => window.scrollTo(0, 0)}
      className="group relative max-w-72 w-full rounded-2xl overflow-hidden bg-white text-gray-700 shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src={room.images[0]}
        alt={room.hotel.name}
        className="h-48 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />

      {index % 2 === 0 && (
        <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white/90 text-gray-800 font-semibold rounded-full shadow-sm">
          Best Seller
        </p>
      )}

      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <p className="font-playfair text-lg font-semibold text-gray-900">
            {room.hotel.name}
          </p>
          <div className="flex items-center gap-1 text-sm text-yellow-500 font-medium">
            <img src={assets.starIconFilled} alt="star-icon" className="h-4" />
            4.5
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <img src={assets.locationIcon} alt="location-icon" className="h-4" />
          <span className="truncate">{room.hotel.address}</span>
        </div>

        <div className="flex items-center justify-between mt-2">
          <p className="text-base font-semibold text-gray-800">
            ₹{room.pricePerNight}
            <span className="text-sm font-normal"> /night</span>
          </p>
          <button className="px-4 py-1.5 text-sm font-semibold bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;