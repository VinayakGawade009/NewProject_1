# Stock Trading & Portfolio Management Platform

A full-stack **stock trading and portfolio management platform** inspired by Zerodha, built using the **MERN stack**.  
The project includes a **public landing website**, **secure authentication**, and an **interactive trading dashboard** with portfolio analytics.

### 🔗 Live Demos
* **Landing Page (Frontend):** [https://zerodha-frontend-eight-alpha.vercel.app](https://zerodha-frontend-eight-alpha.vercel.app)
* **Trading Dashboard:** [https://zerodha-dashboard-topaz.vercel.app](https://zerodha-dashboard-topaz.vercel.app) -> for this you have to be signed in first
* **Backend API:** Hosted on Render 

---

## Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Environment Variables](#-environment-variables)
- [Running Locally](#-running-the-application)
- [Deployment Architecture](#-deployment-architecture)
- [API Routes](#-api-routes)
- [Security Features](#-security-features)
- [License](#-license)

---

## ✨ Features

### Authentication
- User signup & login using **JWT (JSON Web Tokens)**
- Password hashing with **bcrypt**
- Cross-origin, HTTP-only cookies for secure session management
- Protected routes to prevent unauthorized dashboard access

### Landing Website
- Clean, Zerodha-inspired UI/UX
- Responsive pages: Home, Products, Pricing, About, Support, Signup, and Login
- Modern component-based React architecture using Vite

### Trading Dashboard
- Real-time portfolio overview and account balance
- Dynamic Holdings, Orders, and Positions tracking
- Buy / Sell execution simulation
- Interactive charts using **Chart.js**

---

## Tech Stack

**Frontend & Dashboard:**
- React (Vite)
- React Router DOM
- Axios (for API requests)
- Chart.js & react-chartjs-2
- React Toastify (for notifications)
- CSS / Bootstrap

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- JWT (Cookie-based Auth)
- bcryptjs
- CORS & dotenv

---

## 📁 Project Structure
This repository is set up as a monorepo containing three distinct applications:
```text
Stock-Trading-Platform/
├── backend/                # Node.js/Express API server
│   ├── controllers/
│   ├── middlewares/
│   ├── model/
│   ├── routes/
│   └── index.js
│
├── frontend/               # Public-facing landing & auth website
│   ├── src/
│   │   ├── landing_page/
│   │   └── App.jsx
│   └── vercel.json         # SPA Routing configuration
│
└── dashboard/              # Protected trading dashboard
    ├── src/
    │   ├── components/
    │   └── data/
    └── vercel.json         # SPA Routing configuration
```

---
## Installation & Setup
1. Clone the Repository
```bash
git clone [https://github.com/your-username/stock-trading-platform.git](https://github.com/your-username/stock-trading-platform.git)
cd stock-trading-platform
```

2. Install Dependencies
You will need to install dependencies for all three directories:

```bash
# Install backend dependencies
cd backend && npm install

# Install frontend dependencies
cd ../frontend && npm install

# Install dashboard dependencies
cd ../dashboard && npm install
```

---
## Environment Variables
To run this project, you will need to add environment variables to all three folders. Create a .env file in the root of each respective directory:

backend/.env

```
PORT=3002
MONGO_URL=your_mongodb_atlas_connection_string
NODE_ENV=development
```

frontend/.env
```
VITE_BACKEND_URL=http://localhost:3002
VITE_DASHBOARD_URL=http://localhost:5174
```

dashboard/.env
```
VITE_BACKEND_URL=http://localhost:3002
VITE_FRONTEND_URL=http://localhost:5173
```

---
## Running the Application
Open three separate terminals and run the following commands to start the development servers:

**Terminal 1: Backend**
```bash
cd backend
npm start
```

**Terminal 2: Frontend**
```bash
cd frontend
npm run dev
```

**Terminal 3: Dashboard**
```bash
cd dashboard
npm run dev
```

---
## ☁️ Deployment Architecture
This platform is fully configured for cloud deployment:

- **Frontend & Dashboard (Vercel)**: Both React applications are deployed independently on Vercel. A vercel.json file is included in each to handle React Router SPA rewrites.

- **Backend (Render)**: The Node.js server is hosted on Render as a Web Service.

- **Database (MongoDB Atlas)**: Data is persisted securely in the cloud using MongoDB Atlas.

- **CORS & Cookies**: The backend is explicitly configured to accept cross-origin requests and handle SameSite="none" secure cookies between the Render and Vercel domains.

---
## 🔌 API Routes
**Authentication**
- POST /auth/signup - Register a new user

- POST /auth/login - Authenticate user & set HTTP-only cookie

- POST /auth/logout - Clear session cookie

- GET /auth/me - Verify active user session

**Trading Data**
- GET /allHoldings - Fetch user's long-term holdings

- GET /allPositions - Fetch user's active MIS positions

- GET /allOrders - Fetch user's order history

- POST /newOrder - Execute a new Buy order

- POST /sellOrder - Execute a Sell order

---
## 🔐 Security Features
- Password Hashing: Passwords are never stored in plaintext (bcrypt).

- Stateless Sessions: JWTs are used for authentication.

- XSS Protection: Tokens are stored in httpOnly cookies, making them inaccessible to malicious JavaScript.

- CSRF Protection: Configured via sameSite cookie policies and explicit CORS origin whitelisting.

---
## 📝 License
This project is licensed under the ISC License.

⭐ If you find this project helpful or inspiring, please consider giving it a star on GitHub! ⭐
