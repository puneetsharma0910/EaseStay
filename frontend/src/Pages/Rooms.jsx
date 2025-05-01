import React from "react";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";

const Rooms = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-32">
      <div>
        <div className="flex flex-col items-start text-left ">
          <h1 className="font-playfair text-4xl  md:text-[40px]">All rooms</h1>
          <p className="text-gray-500/90 mt-2 max-w-172 text:sm md:text-base">
            Take a look at our selection of rooms and find the perfect one for
            your stay. We have a variety of options to suit your needs, whether
            you're looking for a cozy single room or a spacious suite.
          </p>
        </div>

        {roomsDummyData.map((room) => {
          return (
            <div
              key={room._id}
              className="flex flex-col md:flex-row items-start justify-between gap-6 py-10 border-b border-gray-300 last:border-b-0 last:pb-30"
            >
              <img
                onClick={() => {
                  navigate(`/room/${room._id}`);
                  scrollTo(0, 0);
                }}
                className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
                src={room.images[0]}
                alt="room-image"
                title="View room details"
              />
              <div className="md:w-1/2 flex flex-col gap-2">
                <p className="text-gray-500">{room.hotel.city}</p>
                <p
                  onClick={() => {
                    navigate(`/room/${room._id}`);
                    scrollTo(0, 0);
                  }}
                  className="text-gray-500 text-3xl font-playfair cursor-pointer"
                >
                  {room.hotel.name}
                </p>
                <div className="flex items-center ">
                  <StarRating />
                  <p className="ml-2">200+ reviews</p>
                </div>
                <div className="flex items-center gap-1 mt-2 text-sm ">
                  <img src={assets.locationIcon} alt="location-icon" />
                  <span className="text-gray-500">{room.hotel.address}</span>
                </div>
                {/* room amenities */}
                <div className="flex items-center flex-wrap  gap-4 mt-3 mb-6">
                  {room.amenities.map((item, index) => {
                    return <div>

                      <img src={facilityIcons[item ]} alt={item}
                      className="w-5 h-5 " />
                      <p className="text-xs">{item}</p>
                    </div>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* filers */}
      <div></div>
    </div>
  );
};

export default Rooms;
