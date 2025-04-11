import React from "react";
import { Quicksand } from "next/font/google";


const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Footer(){
  return (
    <div>
    <div className={`bg-white-100 flex justify-center items-center min-h-100 p-6`}>
      <div className="w-full max-w-3xl">
      <h2 className={`${quicksand.className} text-3xl font-bold text-black mb-4`}>Contact Us</h2>

        {/* Contact Info Box */}
        <div className={"bg-white shadow-md rounded-lg p-6 justify-between"}>
          <h3 className={`${quicksand.className} text-3xl font-semibold text-gray-900`}>
            We always welcome questions and comments!
          </h3>
          <p className="text-gray-600 mt-2">
            If you want to learn how to support OLEEP or are interested in
            becoming a mentor or mentee, get in touch with site leaders Amanda
            and Tamara!
          </p>

          <div className="flex justify-end">
            <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 shadow-2xl shadow-green-500/50">
              Email Now
            </button>
          </div>
        </div>
        </div>
      </div>
         {/* Contact Details */}
         <div >
         <div className="bg-gradient-to-b from-[#A4E291] to-[#71C363] text-white p-6 mt-6 flex flex-col md:flex-row justify-between h-[240px]">
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
