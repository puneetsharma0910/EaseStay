import Hotel from "../models/Hotel.js";
import User from "../models/User.js";

// API to create a new hotel
// // POST /api/hotels
// export const registerHotel = async (req, res) => {
//   try {
//     const { name, address, contact, city } = req.body;
//     const owner = req.auth?.userId;

//     // Check if User Already Registered
//     const hotel = await Hotel.findOne({ owner });
//     if (hotel) {
//       return res.json({ success: false, message: "Hotel Already Registered" });
//     }

//     await Hotel.create({ name, address, contact, city, owner });

//     // Update User Role
//     await User.findByIdAndUpdate(owner, { role: "hotelOwner" });

//     res.json({ success: true, message: "Hotel Registered Successfully" });
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };

// ...existing code...
// export const registerHotel = async (req, res) => {
//   try {
//     const { name, address, contact, city } = req.body;
//     const owner = req.auth?.userId;

//     // Allow up to 5 hotels per user
//     const hotelCount = await Hotel.countDocuments({ owner });
//     if (hotelCount >= 5) {
//       return res.json({ success: false, message: "You can only register up to 5 hotels." });
//     }

//     await Hotel.create({ name, address, contact, city, owner });

//     // Update User Role
//     await User.findByIdAndUpdate(owner, { role: "hotelOwner" });

//     res.json({ success: true, message: "Hotel Registered Successfully" });
//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };


import Hotel from "../models/Hotel.js";
import User from "../models/User.js";

// API to create a new hotel
// POST /api/hotels
export const registerHotel = async (req, res) => {
  try {
    const { name, address, contact, city } = req.body;
    const owner = req.auth?.userId;

    // Check for duplicate hotel name and address for this owner
    const duplicate = await Hotel.findOne({ owner, name, address });
    if (duplicate) {
      return res.json({ success: false, message: "You have already registered a hotel with this name and address." });
    }

    // Allow up to 5 hotels per user
    const hotelCount = await Hotel.countDocuments({ owner });
    if (hotelCount >= 5) {
      return res.json({ success: false, message: "You can only register up to 5 hotels." });
    }

    await Hotel.create({ name, address, contact, city, owner });

    // Update User Role
    await User.findByIdAndUpdate(owner, { role: "hotelOwner" });

    res.json({ success: true, message: "Hotel Registered Successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};