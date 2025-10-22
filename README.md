# 💉Doctortime🩺
#### 📹Video Demo: <URL HERE>
#### 🔗<a href='https://doctortime.netlify.app/'>Live Demo</a>

### 🩺 Description
**Doctortime** is a full-stack medical appointment booking platform that connects patients, doctors, and administrators in one system.
Users can easily sign up, login, and book appointments with doctors based on their specialty and availability.
Doctors can manage their schedules, accept or reject appointments, and update their profiles.
Admins can oversee the entire system, manage doctors, and monitor all appointments.

---

### 👤 User Features
- Sign up and log in securely (JWT authentication)
- View all available doctors by specialty
- Book and cancel appointments online
- View appointment history and upcoming visits
- Receive real-time notifications (React Toastify)
- Responsive design for mobile and desktop
- update profile

---

### 🩺 Doctor Panel
- Login and manage profile information (photo, specialty, bio, etc.)
- Set and update availability schedule
- Accept or reject patient appointments
- View all current and past appointments
- See latest appointments and updates

---

### 🧑‍💼 Admin Panel
- View all registered doctors and patients
- Approve or remove doctor accounts
- Add new doctors and set availability
- See all booked and latest appointments
- Manage system data and monitor performance

---

### ⚙️ Tech Stack
| Layer | Technologies |
|--------|-----------------------------|
| **Frontend (User + Doctor + Admin)** | React, React Router DOM, Axios, TailwindCSS, React-Toastify |
| **Backend** | Node.js, Express.js, MongoDB, Mongoose |
| **Authentication** | JWT, bcrypt |
| **File Uploads** | Multer, Cloudinary |
| **Payments** | Stripe API |
| **Validation & Config** | Validator, dotenv |

---

### 🚀 Setup Instructions
1. **Clone the project**
   ```bash
   git clone <repo-url>
   cd doctortime

2. **Install dependencies**
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   cd ../admin && npm install
   
3. **Create ```.env``` files in backend with:** 
   ```bash
   MONGO_URI=your_mongodb_connection
   JWT_SECRET=your_secret_key
   STRIPE_SECRET=your_stripe_key
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret

4. **Run the servers**
   ```bash
   npm run server     # for backend
   npm run dev        # for frontend/admin

### 👩‍💻 Author

- **Developed by Zahra (2025)**

### 🌐 Summary
**Doctortime** makes doctor appointment booking simple and efficient for patients, while providing powerful management tools for doctors and admins — all within one seamless platform.



