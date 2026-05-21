<p align="center">
  <img src="https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License" />
</p>

# 🏠 ParentPlus — Single Parenting Support Platform

> **Empowering single parents with resources, community, and hope.**

ParentPlus is a full-stack web application built to support single parents by providing a centralized platform for resources, community connection, donations, blogs, FAQs, and more. Born from the real-world observation of children left unsupervised near railway tracks — whose single parents were battling addiction, poverty, or forced labor — this project aims to create a safety net for single-parent families.

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [🖼️ Pages Overview](#️-pages-overview)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [🔌 API Documentation](#-api-documentation)
- [🔐 Authentication & Authorization](#-authentication--authorization)
- [🗄️ Database Models](#️-database-models)
- [🧩 Components](#-components)
- [📜 Available Scripts](#-available-scripts)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

### 🔐 Authentication & User Management
- **User Registration** — Sign up with name, email, password, and terms agreement
- **User Login** — Secure login with JWT-based authentication
- **Google OAuth** — Sign up / Login with Google (OAuth integration ready)
- **Profile Management** — View and edit profile details, change password
- **Role-Based Access Control** — `user` and `admin` roles with protected routes
- **Token Persistence** — Auth state persisted via `localStorage`
- **Auto Auth Check** — Automatically verifies token validity on app load

### 💰 Donation System
- **Donation Form** — Preset amounts (₹25, ₹50, ₹100, ₹250, ₹500) or custom amount entry
- **Donor Info Collection** — First name, last name, email, phone, address, city, pin code
- **Auto-fill for Logged-in Users** — Pre-populates donor info from the user profile
- **Payment Gateway** — Supports Google Pay and Credit/Debit Card payments
- **Gateway Fee Calculation** — Automatic 1.8% gateway fee calculation with INR formatting
- **Donation Summary** — Detailed breakdown of amount, fees, and total before payment
- **Donation Status Tracking** — Tracks `pending`, `completed`, and `failed` statuses
- **Success Page** — Post-donation confirmation with donation ID, receipt download option, and social sharing (Facebook, Twitter, WhatsApp)

### 📝 Blog / Resources System
- **Blog Listing** — Grid layout displaying 6 curated blog posts on parenting topics
- **Blog Detail View** — Full blog content with author, date, category, image, and tags
- **Social Sharing** — Share blog posts on Facebook, Twitter, and WhatsApp
- **Admin Blog Management** — Admins can create new blog posts with title, content, excerpt, category, image, and tags
- **Blog Categories** — Health, Parenting, Work-Life Balance, Self-Care, Finance, Child Development
- **Newsletter Subscription** — Email subscription form for latest resource updates

### ❓ FAQ System
- **Searchable FAQ** — Real-time keyword search through questions and answers
- **Accordion UI** — Expandable/collapsible question-answer pairs
- **Question Submission** — Users can submit new questions directly from the FAQ page
- **Feedback System** — "Was this helpful?" feedback buttons (Yes/No)
- **Admin FAQ Management** — Admins can view all submitted questions, add answers, change status, and delete FAQs

### 📞 Contact
- **Contact Form** — Name, email, and message fields with form validation
- **Contact Information Display** — Email, phone number, and 24/7 chat support details
- **Team Section Integration** — Displays the team directly on the contact page
- **FAQ Cross-link** — Quick link to the FAQ page for self-service answers

### 👥 Team
- **Team Member Display** — Showcases team members with photos uploaded via the backend
- **Image Upload** — Team member images stored in `uploads/team/` directory
- **Admin Team Management** — Full CRUD operations for team member profiles

### 👤 User Profile
- **Profile Dashboard** — Displays name, email, member since date, and role
- **Edit Mode** — Inline editing for name and password
- **Password Change** — Current password verification + new password with confirmation
- **Logout** — Secure logout with token removal

### 🛡️ Admin Dashboard
- **FAQ Management Panel** — View all submitted questions with status badges
- **Answer Questions** — Inline editing to add/update answers to user-submitted questions
- **Delete Questions** — Remove unwanted or duplicate FAQ entries
- **Status Tracking** — Visual status indicators (`pending`, `answered`)
- **Admin-Only Routes** — `/admin` and `/admin/faq` protected with role-based guards

### 🎨 UI/UX Features
- **Responsive Design** — Fully responsive across desktop, tablet, and mobile
- **Animated Hero Sections** — Floating shapes animation with parallax effects on the homepage
- **Scroll Animations** — IntersectionObserver-based reveal animations for feature cards, testimonials, and resource cards
- **Framer Motion** — Smooth page transitions and component animations
- **Consistent Footer** — Reusable footer component across all pages
- **Navigation Bar** — Persistent navbar with auth-aware menu items

---

## 🖼️ Pages Overview

| Page | Route | Access | Description |
|------|-------|--------|-------------|
| **Home** | `/` | Public | Hero section, support services, testimonials, resources, newsletter |
| **About** | `/about` | Public | Origin story, mission cards (Awareness, Support, Community), CTA |
| **Sign Up** | `/signup` | Public | Registration form with Google OAuth option |
| **Login** | `/login` | Public | Email/password login form |
| **Donate** | `/donate` | Public | Donation form with preset/custom amounts |
| **Payment** | `/payment` | Protected | Google Pay / Card payment with fee breakdown |
| **Donation Success** | `/donation-success` | Public | Confirmation page with receipt & social sharing |
| **Blogs** | `/blogs` | Public | Blog listing grid with newsletter subscription |
| **Blog Post** | `/blogs/:id` | Public | Individual blog with meta, tags, and sharing |
| **Add Blog** | `/add-blog` | Admin Only | Blog creation form |
| **FAQ** | `/faq` | Public | Searchable FAQ accordion with question submission |
| **Contact** | `/contact` | Public | Contact form, team section, contact info |
| **Team** | `/team` | Public | Team members showcase |
| **Profile** | `/profile` | Protected | User profile with edit capability |
| **Admin Dashboard** | `/admin` | Admin Only | FAQ management panel |
| **Admin FAQ** | `/admin/faq` | Admin Only | Advanced FAQ management |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 18.2.0 | UI library & component framework |
| **React Router DOM** | 6.20.0 | Client-side routing & navigation |
| **Axios** | 1.6.2 | HTTP client for API requests |
| **Framer Motion** | 10.16.4 | Animations & page transitions |
| **React Scripts** | 5.0.1 | Build tooling (Create React App) |

### Backend
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Express.js** | 4.18.2 | Web server framework |
| **Mongoose** | 8.13.2 | MongoDB ODM |
| **bcryptjs** | 2.4.3 | Password hashing |
| **jsonwebtoken** | 9.0.2 | JWT authentication |
| **multer** | 1.4.5 | File upload handling |
| **nodemailer** | 6.9.7 | Email notifications |
| **cors** | 2.8.5 | Cross-origin resource sharing |
| **dotenv** | 16.3.1 | Environment variable management |
| **validator** | 13.11.0 | Input validation |
| **body-parser** | 1.20.2 | Request body parsing |

### Database
| Technology | Purpose |
|-----------|---------|
| **MongoDB** | NoSQL database for all data storage |

### Dev Tools
| Technology | Purpose |
|-----------|---------|
| **Nodemon** | Auto-restart server on file changes |
| **Jest + React Testing Library** | Frontend unit testing |

---

## 📁 Project Structure

```
FieldProjSem4-master/
│
├── public/                          # Static assets
│   ├── images/                      # Blog & page images
│   ├── index.html                   # HTML entry point
│   ├── manifest.json                # PWA manifest
│   └── robots.txt                   # SEO robots config
│
├── src/                             # Frontend source code
│   ├── components/                  # Reusable components
│   │   ├── Navbar/                  # Navigation bar component
│   │   ├── Footer/                  # Footer component
│   │   └── TeamSection/             # Team display component
│   │
│   ├── context/                     # React Context providers
│   │   └── AuthContext.js           # Authentication state management
│   │
│   ├── pages/                       # Page components
│   │   ├── Home.js / Home.css       # Landing page
│   │   ├── About.js / About.css     # About / origin story
│   │   ├── Signup.js / Signup.css   # User registration
│   │   ├── Login.js / Login.css     # User login
│   │   ├── Donate.js / Donate.css   # Donation form
│   │   ├── Payment.js / Payment.css # Payment processing
│   │   ├── DonationSuccess.js/css   # Donation confirmation
│   │   ├── Blogs.js / Blogs.css     # Blog listing
│   │   ├── BlogPost.js / css        # Blog detail view
│   │   ├── AddBlog.js / css         # Blog creation (admin)
│   │   ├── FAQ.js / FAQ.css         # FAQ page
│   │   ├── Contact.js / Contact.css # Contact page
│   │   ├── Team.js / Team.css       # Team page
│   │   ├── Profile.js / Profile.css # User profile
│   │   ├── AdminDashboard.js / css  # Admin panel
│   │   └── AdminFAQ.js / css        # Admin FAQ management
│   │
│   ├── services/                    # API service layer
│   │   └── api.js                   # Axios instance & API methods
│   │
│   ├── styles/                      # Global styles
│   │   ├── global.css               # Global CSS reset
│   │   ├── variable.css             # CSS custom properties
│   │   └── components/              # Component-specific styles
│   │
│   ├── App.js                       # Root component with routing
│   ├── App.css                      # App-level styles
│   └── index.js                     # React entry point
│
├── backend/                         # Backend source code
│   ├── models/                      # Mongoose schemas
│   │   ├── user.model.js            # User schema (name, email, password, role)
│   │   ├── blog.model.js            # Blog schema (title, content, category, tags)
│   │   ├── donation.model.js        # Donation schema (amount, status, payment method)
│   │   ├── contact.model.js         # Contact submission schema
│   │   ├── faq.model.js             # FAQ schema (question, answer, status)
│   │   └── team.model.js            # Team member schema
│   │
│   ├── routes/                      # Express route handlers
│   │   ├── auth.routes.js           # Authentication endpoints
│   │   ├── blog.routes.js           # Blog CRUD endpoints
│   │   ├── donation.routes.js       # Donation management endpoints
│   │   ├── contact.routes.js        # Contact form endpoints
│   │   ├── faq.routes.js            # FAQ CRUD endpoints
│   │   └── team.routes.js           # Team management endpoints
│   │
│   ├── middleware/                   # Express middleware
│   │   ├── auth.middleware.js        # JWT token verification
│   │   └── adminAuth.middleware.js   # Admin role verification
│   │
│   ├── scripts/                     # Utility scripts
│   │   └── seedBlogs.js             # Database seeder for blog posts
│   │
│   ├── uploads/                     # File upload directory
│   │   └── team/                    # Team member images
│   │
│   ├── server.js                    # Express server entry point
│   ├── .env                         # Environment variables
│   └── package.json                 # Backend dependencies
│
├── package.json                     # Frontend dependencies
└── .gitignore                       # Git ignore rules
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

| Software | Version | Download |
|----------|---------|----------|
| **Node.js** | ≥ 16.x | [nodejs.org](https://nodejs.org/) |
| **npm** | ≥ 8.x | Comes with Node.js |
| **MongoDB** | ≥ 6.x | [mongodb.com](https://www.mongodb.com/try/download/community) |
| **Git** | Latest | [git-scm.com](https://git-scm.com/) |

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Udasi05/Single_Parenting.git
   cd Single_Parenting
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

### Environment Variables

Create a `.env` file in the `backend/` directory:

```env
# MongoDB Connection String
MONGODB_URI=mongodb://localhost:27017/field-project

# JWT Secret Key (change this in production!)
JWT_SECRET=your_secure_jwt_secret_key_2025

# Server Port (optional, defaults to 5000)
PORT=5000
```

### Running the Application

You need **two terminals** — one for the frontend and one for the backend.

**Terminal 1 — Start the Backend Server:**
```bash
cd backend
npm run dev
```
> Backend runs at `http://localhost:5000`

**Terminal 2 — Start the Frontend Dev Server:**
```bash
npm start
```
> Frontend runs at `http://localhost:3000`

### 🌱 Seeding the Database (Optional)

To populate the database with sample blog posts:

```bash
cd backend
node scripts/seedBlogs.js
```

---

## 🔌 API Documentation

All API endpoints are prefixed with `http://localhost:5000/api`

### Authentication (`/api/auth`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `POST` | `/auth/register` | Register a new user | ❌ |
| `POST` | `/auth/login` | Login and receive JWT token | ❌ |
| `GET` | `/auth/me` | Get current user profile | ✅ |
| `POST` | `/auth/logout` | Logout user | ✅ |

### Donations (`/api/donations`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `POST` | `/donations` | Create a new donation | ❌ |
| `GET` | `/donations` | Get all donations | ✅ |
| `GET` | `/donations/:id` | Get a single donation | ✅ |
| `PATCH` | `/donations/:id` | Update donation status | ✅ |
| `DELETE` | `/donations/:id` | Delete a donation | ✅ Admin |

### Blogs (`/api/blogs`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `GET` | `/blogs` | Get all published blogs | ❌ |
| `GET` | `/blogs/all` | Get all blogs (incl. drafts) | ✅ Admin |
| `GET` | `/blogs/:id` | Get a single blog | ❌ |
| `POST` | `/blogs` | Create a new blog post | ✅ Admin |
| `PATCH` | `/blogs/:id` | Update a blog post | ✅ Admin |
| `DELETE` | `/blogs/:id` | Delete a blog post | ✅ Admin |

### FAQ (`/api/faq`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `GET` | `/faq` | Get all active FAQs | ❌ |
| `GET` | `/faq/all` | Get all FAQs (admin) | ✅ Admin |
| `GET` | `/faq/admin/all` | Get all FAQs (admin panel) | ✅ Admin |
| `GET` | `/faq/category/:cat` | Get FAQs by category | ❌ |
| `GET` | `/faq/:id` | Get a single FAQ | ❌ |
| `POST` | `/faq` | Create a new FAQ | ✅ Admin |
| `POST` | `/faq/submit` | Submit a question (user) | ❌ |
| `PATCH` | `/faq/:id` | Update a FAQ | ✅ Admin |
| `PUT` | `/faq/admin/:id` | Admin update FAQ | ✅ Admin |
| `DELETE` | `/faq/:id` | Delete a FAQ | ✅ Admin |

### Contact (`/api/contact`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `POST` | `/contact` | Submit a contact message | ❌ |
| `GET` | `/contact` | Get all messages | ✅ Admin |
| `GET` | `/contact/:id` | Get a single message | ✅ Admin |
| `PATCH` | `/contact/:id` | Update message status | ✅ Admin |
| `DELETE` | `/contact/:id` | Delete a message | ✅ Admin |

### Team (`/api/team`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `GET` | `/team` | Get all team members | ❌ |
| `GET` | `/team/all` | Get all (incl. hidden) | ✅ Admin |
| `GET` | `/team/:id` | Get a single member | ❌ |
| `POST` | `/team` | Add a team member (with image) | ✅ Admin |
| `PATCH` | `/team/:id` | Update a team member | ✅ Admin |
| `DELETE` | `/team/:id` | Delete a team member | ✅ Admin |

---

## 🔐 Authentication & Authorization

### How It Works

```
┌─────────┐    POST /auth/login    ┌─────────┐    JWT Token    ┌──────────┐
│  Client  │ ────────────────────▶ │  Server │ ─────────────▶ │  Client  │
│  (React) │   email + password    │ (Express)│               │  stores  │
└─────────┘                        └─────────┘               │  in      │
                                                              │ localStorage
                                                              └──────────┘
```

1. **Registration** — User submits name, email, password → Password hashed with `bcryptjs` → JWT token returned
2. **Login** — User submits email + password → `bcrypt.compare()` validates → JWT token returned
3. **Protected Routes** — Frontend `<ProtectedRoute>` component checks `isAuthenticated` from `AuthContext`
4. **API Auth** — Axios interceptor attaches `Authorization: Bearer <token>` to every request
5. **Admin Routes** — Additional `requireAdmin` check verifies `user.role === 'admin'`

### Middleware

- **`auth.middleware.js`** — Verifies JWT token from the `Authorization` header
- **`adminAuth.middleware.js`** — Verifies the user has the `admin` role

---

## 🗄️ Database Models

### User
| Field | Type | Constraints |
|-------|------|------------|
| `name` | String | Required, trimmed |
| `email` | String | Required, unique, lowercase |
| `password` | String | Required, min 6 chars, hashed with bcrypt |
| `role` | String | `user` or `admin` (default: `user`) |
| `createdAt` | Date | Auto-generated |

### Blog
| Field | Type | Constraints |
|-------|------|------------|
| `title` | String | Required, trimmed |
| `content` | String | Required |
| `excerpt` | String | Required |
| `author` | String | Required |
| `image` | String | Optional URL |
| `category` | String | Required |
| `tags` | [String] | Array of trimmed strings |
| `status` | String | `draft` or `published` |
| `createdAt` / `updatedAt` | Date | Auto-generated |

### Donation
| Field | Type | Constraints |
|-------|------|------------|
| `donorName` | String | Required |
| `email` | String | Required |
| `amount` | Number | Required |
| `paymentMethod` | String | `credit_card`, `debit_card`, `bank_transfer`, `upi`, `googlePay` |
| `message` | String | Optional |
| `status` | String | `pending`, `completed`, `failed` |
| `createdAt` | Date | Auto-generated |

### Contact
| Field | Type | Constraints |
|-------|------|------------|
| `name` | String | Required |
| `email` | String | Required |
| `message` | String | Required |

### FAQ
| Field | Type | Constraints |
|-------|------|------------|
| `question` | String | Required |
| `answer` | String | Optional |
| `status` | String | `pending`, `answered` |
| `isActive` | Boolean | Visibility toggle |

### Team
| Field | Type | Constraints |
|-------|------|------------|
| `name` | String | Required |
| `role` | String | Required |
| `image` | String | File path to uploaded image |

---

## 🧩 Components

### Reusable Components

| Component | Location | Description |
|-----------|----------|-------------|
| **Navbar** | `src/components/Navbar/` | Responsive navigation bar with auth-aware links |
| **Footer** | `src/components/Footer/` | Consistent footer across all pages |
| **TeamSection** | `src/components/TeamSection/` | Team member cards used on Contact page |
| **ProtectedRoute** | `src/App.js` | HOC for route-level auth & role guards |

### Context Providers

| Context | Location | Provides |
|---------|----------|----------|
| **AuthContext** | `src/context/AuthContext.js` | `user`, `login`, `register`, `logout`, `isAuthenticated`, `isAdmin`, `loading`, `error` |

### Service Layer

| Service | Location | APIs |
|---------|----------|------|
| **api.js** | `src/services/api.js` | `authAPI`, `donationAPI`, `blogAPI`, `contactAPI`, `teamAPI`, `faqAPI` |

---

## 📜 Available Scripts

### Frontend

| Command | Description |
|---------|-------------|
| `npm start` | Starts the development server on `http://localhost:3000` |
| `npm run build` | Creates an optimized production build in `build/` |
| `npm test` | Launches the test runner in interactive watch mode |
| `npm run eject` | Ejects CRA config (⚠️ irreversible) |

### Backend

| Command | Description |
|---------|-------------|
| `npm start` | Starts the production server with Node.js |
| `npm run dev` | Starts the development server with Nodemon (auto-restart) |

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Guidelines
- Follow existing code style and conventions
- Write meaningful commit messages
- Update documentation for new features
- Test your changes before submitting

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Built With ❤️ by the ParentPlus Team

> *"Every child deserves a safe childhood. Every parent deserves support."*

<p align="center">
  <a href="mailto:support@parentplus.com">📧 support@parentplus.com</a> •
  <a href="tel:1-800-PARENT-1">📞 1-800-PARENT-1</a> •
  💬 24/7 Chat Support
</p>
