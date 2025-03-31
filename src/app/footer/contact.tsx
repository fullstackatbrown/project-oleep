import React from "react";

export default function ContactUs(){
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen p-6">
      <div className="w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-black mb-4">Contact Us</h2>

        {/* Contact Info Box */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-900">
            We always welcome questions and comments!
          </h3>
          <p className="text-gray-600 mt-2">
            If you want to learn how to support OLEEP or are interested in
            becoming a mentor or mentee, get in touch with site leaders Amanda
            and Tamara!
          </p>

          <div className="mt-4">
            <button className="bg-green-700 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-800">
              Email Now
            </button>
          </div>
        </div>

        {/* Contact Details */}
        <div className="bg-green-500 text-white p-6 mt-6 rounded-lg flex flex-col md:flex-row justify-between">
          <div>
            <h4 className="text-lg font-semibold">Phone</h4>
            <p>(888) 123 4567</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Email</h4>
            <p>brownoleep@gmail.com</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Social Media</h4>
            <div className="flex gap-3 mt-1">
              <span className="text-2xl">📸</span> {/* Instagram Icon */}
              <span className="text-2xl">📘</span> {/* Facebook Icon */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
