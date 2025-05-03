import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { roomsDummyData, assets, facilityIcons, roomCommonData } from '../assets/assets'
import StarRating from '../components/StarRating'

const RoomDetails = () => {
  // State Management
  const { id } = useParams()  // Gets the room ID from URL parameters
  const [room, setRoom] = useState(null)  // Stores the room data
  const [loading, setLoading] = useState(true)  // Tracks loading state
  const [mainImage, setMainImage] = useState(null)  // Changed setmainImage to setMainImage

  // Data Fetching Logic
  useEffect(() => {
    const fetchRoom = () => {
      setLoading(true)  // Start loading
      const foundRoom = roomsDummyData.find(room => room._id === id)
      setRoom(foundRoom)  // Update room state
      foundRoom && setMainImage(foundRoom.images[0])  // Set initial main image
      setLoading(false)  // End loading
    }

    fetchRoom()
  }, [id])  // Re-run when ID changes

  // Loading State
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        <h1 className="text-2xl font-playfair">Loading...</h1>
      </div>
    )
  }

  // Error State (Room Not Found)
  if (!room) {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        <h1 className="text-2xl font-playfair">Room not found</h1>
      </div>
    )
  }

  // Main Component Render
  return (
    <div className="px-4 md:px-16 lg:px-32 py-20">
      {/* Room Images Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {/* Main Image */}
        <img 
          src={mainImage} 
          alt="room-main" 
          className="w-full h-100 object-cover rounded-xl"
        />
        {/* Thumbnail Images */}
        <div className="grid grid-cols-2 gap-4">
          {room.images.map((image, index) => (
            <img 
              onClick={() => setMainImage(image)}
              key={index}
              src={image} 
              alt={`room-${index + 1}`} 
              className={`w-full h-48 object-cover rounded-xl cursor-pointer transition-all ${
                mainImage === image ? 'border-2 border-orange-500 scale-95' : 'hover:scale-95'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Room Information Section */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Column - Room Details */}
        <div className="md:w-2/3">
          {/* Hotel Name - Large, prominent display */}
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-playfair">{room.hotel.name}</h1>
            <div className="flex items-center gap-4">
              {/* Room Type Badge */}
              <div className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">
                {room.roomType}
              </div>
              {/* Discount Badge */}
              <div className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                20% OFF
              </div>
            </div>
          </div>
          
          {/* Location - With icon */}
          <div className="flex items-center gap-2 mt-2">
            <img src={assets.locationIcon} alt="location" className="h-5" />
            <p className="text-gray-600">{room.hotel.address}</p>
          </div>
          
          {/* Rating - With star component */}
          <div className="flex items-center gap-2 mt-4">
            <StarRating />
            <p className="text-gray-600">200+ reviews</p>
          </div>

          {/* About Section - Room description */}
          <div className="mt-8">
            <h2 className="text-2xl font-playfair mb-4">About this room</h2>
            <p className="text-gray-600 leading-relaxed">
              Experience luxury and comfort in our {room.roomType.toLowerCase()} room. 
              Perfect for both business and leisure travelers, this room offers a 
              peaceful retreat with modern amenities and stunning views.
            </p>
          </div>

          {/* Amenities Section - Room-specific features */}
          <div className="mt-8">
            <h2 className="text-2xl font-playfair mb-4">Amenities</h2>
            <div className="flex flex-wrap gap-4">
              {room.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                  <img src={facilityIcons[amenity]} alt={amenity} className="h-5" />
                  <span className="text-gray-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Common Features Section - Standard hotel features */}
          <div className="mt-8">
            <h2 className="text-2xl font-playfair mb-4">What this place offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {roomCommonData.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <img src={item.icon} alt={item.title} className="h-6 mt-1" />
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Host Section */}
          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <h2 className="text-2xl font-playfair mb-6">Hosted by</h2>
            <div className="flex items-start gap-4">
              {/* Host Image */}
              {room.hotel.owner?.image && (
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img 
                    src={room.hotel.owner.image} 
                    alt="Host" 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {/* Host Info */}
              <div className="flex-1">
                <h3 className="text-lg font-medium text-orange-500 mb-1">{room.hotel.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{room.hotel.address}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>⭐ Superhost</span>
                  <span>•</span>
                  <span>Joined in 2020</span>
                </div>
              </div>
              
            </div>
            {/* Host Description */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-gray-600 text-sm leading-relaxed">
                Dedicated to providing exceptional hospitality and ensuring your stay is comfortable and memorable. 
                Available 24/7 to assist with any needs during your visit.
              </p>
              <button className="w-1/4 mt-8 bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors">
              Contact Us
            </button>
            </div>
          </div>
          
        </div>

        {/* Right Column - Booking Card */}
        <div className="md:w-1/3">
          <div className="sticky top-20 p-6 border border-gray-200 rounded-xl shadow-sm">
            {/* Price Display */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-medium">₹{room.pricePerNight}/night</h3>
            </div>
            
            {/* Booking Form */}
            <div className="space-y-6">
              {/* Check-in Date */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Check-in</label>
                <input 
                  type="date" 
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Check-out Date */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Check-out</label>
                <input 
                  type="date" 
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Guests */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Guests</label>
                <input 
                  type="number" 
                  min="1" 
                  max="4" 
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Book Now Button */}
            <button className="w-full mt-8 bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomDetails