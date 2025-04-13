import React from "react";
import { useParams } from "react-router-dom";





function Rating() {

    const { id } = useParams();
    console.log(id); // This will log the id from the URL
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Rating</h1>
      <div className="flex items-center">
        <span className="text-yellow-500 text-3xl">★</span>
        <span className="text-yellow-500 text-3xl">★</span>
        <span className="text-yellow-500 text-3xl">★</span>
        <span className="text-gray-300 text-3xl">★</span>
        <span className="text-gray-300 text-3xl">★</span>
      </div>
      <p className="text-lg mt-4">Rate this product</p>
      <div className="flex items-center mt-2">
        <button className="bg-blue-500 text-white p-2 rounded-lg mr-2">Submit</button>
        <button className="bg-gray-300 text-gray-700 p-2 rounded-lg">Cancel</button>
      </div>
    </div>
  );
}
export default Rating;