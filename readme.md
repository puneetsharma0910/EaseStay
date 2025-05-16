# EaseStay

EaseStay is a full-stack hotel booking platform that enables users to discover, book, and manage hotel stays, while providing hotel owners with tools to manage their listings and bookings. The project is built with a React + Vite frontend and an Express/MongoDB backend, featuring authentication via Clerk, image uploads with Cloudinary, and payment integration with Stripe.

---

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Environment Variables](#environment-variables)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Project Structure](#project-structure)
- [API Overview](#api-overview)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- User authentication and authorization (Clerk)
- Hotel and room listing management for owners
- Room search, filtering, and booking for users
- Image uploads (Cloudinary)
- Payment processing (Stripe)
- Responsive, modern UI (React, TailwindCSS)
- Owner dashboard with analytics
- Email notifications (Nodemailer)
- Webhooks for user and payment events

---

## Architecture

```
frontend/   # React + Vite client
backend/    # Express API, MongoDB models, controllers
```

- **Frontend:** SPA using React, React Router, TailwindCSS, Clerk for auth.
- **Backend:** REST API with Express, MongoDB (Mongoose), Clerk middleware, Stripe, Cloudinary.
- **Deployment:** Vercel (frontend and backend), environment-based configuration.

---

## Tech Stack

- **Frontend:** React 19, Vite, TailwindCSS, Clerk, React Router
- **Backend:** Node.js, Express 5, MongoDB, Mongoose, Clerk, Stripe, Cloudinary, Nodemailer
- **DevOps:** Vercel, dotenv, nodemon

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB Atlas account
- Clerk account (for authentication)
- Cloudinary account (for image uploads)
- Stripe account (for payments)

### Environment Variables

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
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_pass
```

**Sample for `frontend/.env`:**
```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### Installation

```sh
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### Running Locally

**Start the backend:**
```sh
cd backend
npm run server
```

**Start the frontend:**
```sh
cd frontend
npm run dev
```

Frontend will be available at `http://localhost:5173` (default Vite port).

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
    │   ├── Pages/
    │   └── App.jsx
    ├── index.html
    └── package.json
```

---

## API Overview

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

- **Backend:** Use tools like Postman or Insomnia to test API endpoints.
- **Frontend:** Run `npm run lint` for code quality checks.

---

## Deployment

- **Vercel:** Both frontend and backend are configured for Vercel deployment. See [frontend/vercel.json](frontend/vercel.json) and [backend/vercel.json](backend/vercel.json).
- **Environment Variables:** Set all required secrets in your Vercel project settings.

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
