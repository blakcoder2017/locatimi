import React from "react";  

function SearchPanel() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Search Panel</h1>
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border border-gray-300 rounded-lg mb-4"
      />
      <button className="bg-blue-500 text-white p-2 rounded-lg">Search</button>
    </div>
  );
}