import React from "react";
import { Quicksand } from "next/font/google";
import Image from "next/image";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Footer() {
  return (
    <div className={quicksand.className}>
      {/* Contact Section */}
      <div className="bg-[linear-gradient(to_bottom,_white_0%,_white_50%,_#A4E291_50%,_#71C363_100%)] text-white pt-12 pb-6 px-6">
        <div className="flex flex-col items-center gap-6 mb-10">
          {/* Shared width container */}
          <div className="w-[1100px]">
            {/* Left-aligned heading inside centered box */}
            <h2 className="text-4xl font-bold text-black mb-2 ml-8 mb-4">Contact Us</h2>

            {/* Contact box */}
            <div className="bg-white text-black rounded-lg p-6 shadow-[inset_4px_4px_8px_0_rgba(0,0,0,0.1)]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-semibold text-gray-900">
                    We always welcome questions and comments!
                  </h3>
                  <p className="text-gray-600 mt-2">
                    If you want to learn how to support OLEEP or are interested in becoming a mentor or mentee, get in touch with site leaders Amanda and Tamara!
                  </p>
                </div>
                <a href="mailto:brownoleep@gmail.com">
                  <button className="bg-green-700 text-white text-lg w-[400px] h-[50px] rounded-xl 
            hover:bg-green-800 
            shadow-[0_20px_35px_-15px_rgba(34,197,94,0.4),0_10px_20px_-12px_rgba(34,197,94,0.3),0_25px_50px_-12px_rgba(34,197,94,0.15),0_30px_40px_-5px_rgba(0,0,0,0.3)] 
            transition-all duration-300 
            self-start md:self-auto">
                    Email Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>




        {/* Contact Details BELOW the box */}
        <div className="flex justify-between text-white max-w-4xl mx-auto space-x-4">
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">Email</h4>
            <p>brownoleep@gmail.com</p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">Phone</h4>
            <p>(888) 123 4567</p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">Social Media</h4>
            <div className="flex gap-3 mt-1 text-2xl justify-end">
              <a
                href="https://oleep.wordpress.com/contact-us-2/?share=facebook&nb=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/facebook.png"
                  alt="facebook logo"
                  width={24}
                  height={24}
                />
              </a>

              <a
                href="https://www.instagram.com/brownoleep?igsh=MTNzYWowdGc3ampjbA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/Instagram.png"
                  alt="instagram logo"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
