# MERN URL Shortener

A full-stack URL shortener application built using the MERN stack. This project features user authentication with JWT, allowing users to register, log in, create short URLs that redirect to their original links, and manage their URLs via a protected dashboard.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:**  
  Register and log in using JWT-based authentication.
- **URL Shortening:**  
  Create short URLs that redirect to the original URLs.
- **Dashboard:**  
  A protected dashboard for logged-in users to view, create, and delete their URLs.
- **Public Redirection:**  
  Short URLs can be shared publicly to redirect to the original URL.
- **Dark/Light Mode Toggle:**  
  Easily switch between dark and light themes on the dashboard.

## Technologies Used

- **Backend:**  
  - Node.js  
  - Express  
  - MongoDB & Mongoose  
  - JSON Web Tokens (JWT)  
  - bcrypt  
  - dotenv

- **Frontend:**  
  - React (using Vite)  
  - Axios  
  - React Router DOM  
  - Tailwind CSS  

## Project Structure

    /backend
    ├── config
    │   └── db.js
    ├── controllers
    │   ├── authControllers.js
    │   └── urlController.js
    |   └── redirectController.js
    |   
    ├── models
    │   ├── User.js
    │   └── URL.js
    ├── routes
    │   ├── authRoutes.js
    │   ├── urlRoutes.js
    │   └── redirectRoutes.js
    ├── server.js
    └── .env

    /frontend
    ├── src
    │   ├── components
    │   │   ├── LoginForm.jsx
    │   │   └── ProtectedRoute.jsx
    │   ├── pages
    │   │   ├── Dashboard.jsx
    │   │   └── LoginPage.jsx
    │   ├── axiosInstance.js
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── vite.config.js

## Installation

### Backend Setup

1. **Clone the repository and navigate to the backend folder:**

   ```bash
   git clone <repository_url>
   cd backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the backend folder and add your environment variables:

   ```env
   MONGO_URI=<your_mongo_connection_string>
   JWT_SECRET=<your_jwt_secret>
   PORT=8000
   ```

4. **Start the backend server:**

   ```bash
   npm run dev
   ```

### Frontend Setup

1. **Navigate to the frontend folder:**

   ```bash
   cd ../frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

## Usage

1. **Register or Log In:**  
   - Open your browser and navigate to the login page (e.g., `http://localhost:PORT/login`).
   - Register a new account or log in with an existing one. The backend returns a JWT, which is stored on the client (e.g., in localStorage).

2. **Dashboard:**  
   - Once logged in, you are redirected to the dashboard.
   - In the dashboard, you can create new short URLs using the input field in the header.
   - The dashboard displays a list of your URLs along with options to delete them.
   - Use the dark/light mode toggle to switch themes.
   - Click the logout button to remove your token and return to the login page.

3. **Public URL Redirection:**  
   - Your API exposes a public endpoint for URL redirection.
   - For example, if a short URL is `http://localhost:8000/abc123`, accessing it will redirect to the original URL.

## Deployment

- **Backend:**  
  You can deploy your backend on platforms like Heroku. Make sure to set your environment variables on the platform.

- **Frontend:**  
  Deploy your React app using Vercel, Netlify, or another hosting service.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
