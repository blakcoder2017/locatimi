import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <p className="text-center">© 2023 My Application. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
        <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
        <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
      </div>
    </footer>
  );
}   
export default Footer;