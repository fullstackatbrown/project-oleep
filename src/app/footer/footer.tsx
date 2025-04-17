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
        <h2 className="absolute -mt-11 left-[140px] text-black text-4xl font-bold mb-4">
          Contact Us
        </h2>
        <div className="flex justify-center items-center">
          {/* Contact Box with top & left border */}
          <div className="bg-white text-black rounded-lg p-6 mb-10 w-[1100px] h-[200px] border-t-4 border-l-4 border-gray-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-3xl font-semibold text-gray-900">
                  We always welcome questions and comments!
                </h3>
                <p className="text-gray-600 mt-2">
                  If you want to learn how to support OLEEP or are interested in
                  becoming a mentor or mentee, get in touch with site leaders
                  Amanda and Tamara!
                </p>
              </div>

              <a href="mailto:brownoleep@gmail.com">
                <button className="bg-green-700 text-white text-lg w-[400px] h-[50px] rounded-xl hover:bg-green-800 shadow-[0_10px_40px_rgba(34,197,94,0.85)] transition-shadow duration-300 self-start md:self-auto">
                  Email Now
                </button>
              </a>
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
            <div className="flex gap-3 mt-1 text-2xl">
              <a
                href="https://oleep.wordpress.com/contact-us-2/?share=facebook&nb=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/facebook.png"
                  alt="facebook logo"
                  width={32}
                  height={32}
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
                  width={35}
                  height={35}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
