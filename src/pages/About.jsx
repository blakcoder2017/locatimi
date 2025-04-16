import React from "react";

function About() {  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4">
      Locatimi is a web-based location management app that allows users to track and display various locations. Built with a clean and intuitive interface, it offers real-time updates, allowing users to search and view locations dynamically.
      </p>
      <p className="text-lg mb-4">
      The app is powered by React for seamless user experiences, while Redux is used for efficient state management. It utilizes Firestore as the backend database for real-time data storage and synchronization. The map functionality is integrated using Google Maps API, enhancing the app with interactive, location-based features.
      </p>
      <p className="text-lg mb-4">
        Tools and Technologies: 
      </p>
      <ul>
        <li className="text-lg mb-2">React + Vite</li>
        <li className="text-lg mb-2">Redux</li>
        <li className="text-lg mb-2">React Router</li>
        <li className="text-lg mb-2">Firestore</li>
        <li className="text-lg mb-2">Google Maps API</li>
        <li className="text-lg mb-2">Bootstrap</li>
  
      </ul>
    </div>
  );
}
export default About;