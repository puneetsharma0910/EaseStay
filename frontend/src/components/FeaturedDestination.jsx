import React from "react";
import { roomsDummyData } from "../assets/assets.js";
import HotelCard from "./HotelCard.jsx";
import Title from "./Title.jsx";
import { useNavigate } from "react-router-dom";
const FeaturedDestination = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 py-10">
      <Title
        title="Featured destination"
        subtitle="✨ Discover our handpicked stays for a memorable escape"
      />
      <div className="flex flex-wrap items-center justify-center mt-20 gap-6">
        {roomsDummyData && roomsDummyData.length > 0 ? (
          roomsDummyData
            .slice(0, 4)
            .map((room, index) => (
              <HotelCard key={room._id} room={room} index={index} />
            ))
        ) : (
          <p>No rooms available</p> // Fallback if roomsDummyData is empty
        )}
      </div>
      <button
        onClick={() => {
          navigate("/rooms");
          window.scrollTo(0, 0);
        }}
        className="block mx-auto mt-10 px-6 py-2 text-sm font-semibold bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
      >
        View all destinations
      </button>
    </div>
  );
};

export default FeaturedDestination;