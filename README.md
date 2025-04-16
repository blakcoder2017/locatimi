# Locatimi

**Locatimi** is a web-based app for managing and displaying locations. It features a clean, responsive interface with real-time location updates and dynamic search.

Built with React and Vite, the app uses Redux for state management and Firestore for real-time data storage. Interactive maps are powered by the Google Maps API, while Bootstrap ensures a sleek, responsive design.

## Features

- View and manage multiple locations on an interactive map
- Real-time updates using Firestore
- Dynamic location search
- Responsive design with Bootstrap
- Smooth routing with React Router

## Tech Stack

- **React + Vite** – Frontend framework
- **Redux** – State management
- **React Router** – Client-side routing
- **Firestore** – Realtime database
- **Google Maps API** – Interactive map features
- **Bootstrap** – UI styling

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/blakcoder2027/locatimi.git
   cd locatimi
   npm install

## Add your Firebase config in a .env file
  VITE_FIREBASE_API_KEY=your_api_key
  VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
  VITE_FIREBASE_PROJECT_ID=your_project_id
  VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
  VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
  VITE_FIREBASE_APP_ID=your_app_id
  VITE_GOOGLE_MAPS_API_KEY=your_maps_api_key
