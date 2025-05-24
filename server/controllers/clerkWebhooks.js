// import { Webhook } from "svix";
// import User from "../models/User.js";

// // API Controller Function to Manage Clerk User with database
// // POST /api/clerk
// const clerkWebhooks = async (req, res) => {
//   try {
//     // Create a Svix instance with clerk webhook secret.
//     const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

//     // Getting Headers
//     const headers = {
//       "svix-id": req.headers["svix-id"],
//       "svix-timestamp": req.headers["svix-timestamp"],
//       "svix-signature": req.headers["svix-signature"],
//     };

//     // Verifying Headers
//     await whook.verify(JSON.stringify(req.body), headers);

//     // Getting Data from request body
//     const { data, type } = req.body;

//     // Switch Cases for differernt Events
//     switch (type) {
//       case "user.created": {
//         const userData = {
//           _id: data.id,
//           email: data.email_addresses[0].email_address,
//           username: data.first_name + " " + data.last_name,
//           image: data.image_url,
//           role: "user", // <-- required by your model
//           recentSearchedCities: [], // <-- required by your model
//         };
//         await User.create(userData);
//         break;
//       }

//       case "user.updated": {
//         const userData = {
//           _id: data.id,
//           email: data.email_addresses[0].email_address,
//           username: data.first_name + " " + data.last_name,
//           image: data.image_url,
//           role: "user", // <-- required by your model
//           recentSearchedCities: [], // <-- required by your model
//         };

//         await User.findByIdAndUpdate(data.id, userData);
//         break;
//       }

//       case "user.deleted": {
//         await User.findByIdAndDelete(data.id);
//         break;
//       }

//       default:
//         break;
//     }

//     res.json({ success: true, message: "Webhook Recieved" });
//   } catch (error) {
//     console.log(error.message);
//     res.json({ success: false, message: error.message });
//   }
// };

// export default clerkWebhooks;


import User from "../models/User.js";

const clerkWebhooks = async (req, res) => {
  try {
    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          username: data.first_name + " " + data.last_name,
          image: data.image_url,
          role: "user",
          recentSearchedCities: [],
        };
        await User.create(userData);
        break;
      }
      case "user.updated": {
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          username: data.first_name + " " + data.last_name,
          image: data.image_url,
          role: "user",
          recentSearchedCities: [],
        };
        await User.findByIdAndUpdate(data.id, userData);
        break;
      }
      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        break;
      }
      default:
        break;
    }

    res.json({ success: true, message: "Webhook received" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

export default clerkWebhooks;