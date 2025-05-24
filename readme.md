# EaseStay

EaseStay is a modern, full-stack hotel booking platform designed to streamline the process of discovering, booking, and managing hotel stays. Built with a scalable architecture and industry-standard technologies, EaseStay provides a seamless experience for both guests and hotel owners.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

EaseStay enables users to:
- Search and filter hotels and rooms by city and amenities
- Book rooms with secure payment integration
- Manage their bookings and recent searches

Hotel owners can:
- Register and manage their hotels
- Add, update, and toggle room availability
- View analytics and booking data

---

## Features

- **Authentication:** Secure user and owner authentication via Clerk
- **Hotel & Room Management:** CRUD operations for hotels and rooms
- **Image Uploads:** Cloudinary integration for fast, reliable image hosting
- **Payments:** Stripe integration for secure transactions
- **Recent Searches:** Personalized user experience with recent city searches
- **Responsive UI:** Built with React and TailwindCSS for modern, mobile-friendly design
- **Notifications:** Toast notifications for user feedback

---

## Tech Stack

- **Frontend:** React, Vite, TailwindCSS, Clerk, React Router
- **Backend:** Node.js, Express, MongoDB (Mongoose), Clerk, Stripe, Cloudinary, Nodemailer
- **DevOps:** Vercel, dotenv, nodemon

---

## Architecture

```
frontend/   # React + Vite client
backend/    # Express API, MongoDB models, controllers
```

- **Frontend:** SPA using React, React Router, TailwindCSS, Clerk for authentication.
- **Backend:** REST API with Express, MongoDB (Mongoose), Clerk middleware, Stripe, Cloudinary.
- **Deployment:** Vercel (frontend and backend), environment-based configuration.

---

## Setup & Installation

### Prerequisites

- Node.js (v18+)
- npm or yarn
- MongoDB Atlas account
- Clerk account (for authentication)
- Cloudinary account (for image uploads)
- Stripe account (for payments)

### Installation Steps

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/EaseStay.git
    cd EaseStay
    ```

2. **Install dependencies:**
    ```sh
    # Backend
    cd backend
    npm install

    # Frontend
    cd ../frontend
    npm install
    ```

3. **Configure environment variables:**  
   See [Environment Variables](#environment-variables).

4. **Run the application locally:**
    ```sh
    # Start backend
    cd backend
    npm run server

    # Start frontend (in a new terminal)
    cd ../frontend
    npm run dev
    ```

---

## Environment Variables

Create `.env` files in both `backend/` and `frontend/` directories.

**Sample for `backend/.env`:**
```
MONGODB_URI=your_mongodb_connection_string
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_pass
```

**Sample for `frontend/.env`:**
```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BACKEND_URL=http://localhost:5000
VITE_CURRENCY=&#8377;
```

---

## Project Structure

```
.
├── backend/
│   ├── configs/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
└── frontend/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── context/
    │   ├── Pages/
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    └── package.json
```

---

## API Endpoints

- `POST /api/hotels/` — Register a new hotel (owner only)
- `POST /api/rooms/` — Add a new room (owner only)
- `GET /api/rooms/` — List all available rooms
- `GET /api/rooms/owner` — List rooms for the authenticated owner
- `POST /api/rooms/toggle-availability` — Toggle room availability
- `GET /api/user/` — Get user profile and recent searches
- `POST /api/user/store-recent-search` — Store a recent search city

See [backend/controllers](backend/controllers) and [backend/routes](backend/routes) for implementation details.

---

## Testing

- **Backend:** Use Postman or Insomnia to test API endpoints.
- **Frontend:** Run `npm run lint` for code quality checks.

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License.

---

**Contact:**  
For questions or support, please open an issue or contact the maintainer.
