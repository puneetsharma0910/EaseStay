// import { Webhook } from "svix";
// import User from "../models/User.js";

// const clerkWebhooks = async (req, res) => {
//   try {
//     // Use raw body for verification
//     const payload = req.body instanceof Buffer ? req.body.toString() : JSON.stringify(req.body);

//     const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

//     const headers = {
//       "svix-id": req.headers["svix-id"],
//       "svix-timestamp": req.headers["svix-timestamp"],
//       "svix-signature": req.headers["svix-signature"],
//     };

//     // Verifying Headers
//     const evt = whook.verify(payload, headers);

//     // Getting Data from request body
//     const { data, type } = typeof evt === "string" ? JSON.parse(evt) : evt;

//     const userData = {
//       _id: data.id,
//       email: data.email_addresses[0].email_address,
//       username: data.first_name + " " + data.last_name,
//       image: data.image_url,
//       role: "user",
//       recentSearchedCities: [],
//     };

//     switch (type) {
//       case "user.created":
//         await User.create(userData);
//         break;
//       case "user.updated":
//         await User.findByIdAndUpdate(data.id, userData);
//         break;
//       case "user.deleted":
//         await User.findByIdAndDelete(data.id);
//         break;
//       default:
//         break;
//     }

//     res.json({ success: true, message: "Webhook Received" });
//   } catch (error) {
//     console.log(error.message);
//     res.json({ success: false, message: error.message });
//   }
// };

// export default clerkWebhooks;

import User from "../models/User.js";

const clerkWebhooks = async (req, res) => {
  try {
    // Directly use req.body (no signature verification)
    const { data, type } = req.body;

    const userData = {
      _id: data.id,
      email: data.email_addresses[0].email_address,
      username: data.first_name + " " + data.last_name,
      image: data.image_url,
      role: "user",
      recentSearchedCities: [],
    };

    switch (type) {
      case "user.created":
        await User.create(userData);
        break;
      case "user.updated":
        await User.findByIdAndUpdate(data.id, userData);
        break;
      case "user.deleted":
        await User.findByIdAndDelete(data.id);
        break;
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

