# Real Estate Frontend

This is the frontend for the Real Estate application built with Next.js.

## 🚀 Setup Instructions

Follow these steps to set up and run the project locally:

### 1️⃣ Clone the Repository

git clone <repository-url>
cd <repository-folder>

### 2️⃣ Add Environment Variables

Create a .env file in the root directory and add the necessary environment variables.

### 3️⃣ Install Dependencies
```bash
npm install
```
### 4️⃣ Run in Development Mode

npm run dev

This will start the development server at http://localhost:3000/.

### 5️⃣ Build and Run for Production

If you want to build and run the project in production mode:
```bash
npm install
npm run build
npm run start
```
## 🌍 API Details

This project uses the Location API from OpenStreetMap:

API Source: [Nominatim](https://nominatim.openstreetmap.org/ui/search.html) Search API

Used for fetching geolocation data.

## 🌐 Deployment Link

The frontend is deployed at:
👉  [Live Demo](https://realestate-frontend-06gq.onrender.com/)

## 📌 Tech Stack

Framework: [Next.js with App Router](https://nextjs.org/)

Styling: [Tailwind CSS](https://tailwindcss.com/) 

API Requests: [Axios](https://axios-http.com/docs/intro)

State Management: [Zustand](https://zustand-demo.pmnd.rs/)