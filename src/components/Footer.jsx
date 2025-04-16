import React from "react";

const Footer = () => {

  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="text-center text-white p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
      {currentYear} © Locatimi  
      <a className="text-white" href="https://github.com/blakcoder2017/"> Abubakari Sherifdeen</a>
    </div>
    </footer>
  );
}   
export default Footer;