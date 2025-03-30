import React from "react";
import Image from "next/image";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  return (
    <div className ="main-container">
      <div className="home-container">
        <Image
          src="/homeImage.png"
          alt="Environmental Illustration"
          width={490}
          height={433}
          className="home-image"
        />
        <div className={`text-content ${quicksand.className}`}>
          <h1 className={"title"}>
            Outdoor
            <br />
            Leadership and
            <br />
            <span className="outlineEnv">Environmental</span>
            <br />
            Education Program
          </h1>
          <button className="donate-button">Donate</button>
        </div>
      </div>

        <div className="who-we-are-container">
          <h1 className={`who-we-are ${quicksand.className}`}>Who We Are</h1>
          <p className={`who-we-are-text ${quicksand.className}`}> OLEEP is a partnership between the Metropolitan Regional Career and Technical Center (the Met) and Brown University’s Swearer Center for Public Service. We work with high school students to develop leadership skills as well as environmental science and justice knowledge, with a specific emphasis on building a supportive, collaborative community where <strong>Brown</strong> and <strong>Met</strong> students can learn and grow together. 
            <br />
            <br />
            We believe, with the right support, everyone can be a leader and bringing about an environmentally just world depends on it.
          </p>
        </div>
    

      <style>{`

        .main-container {
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .home-container {
          background: linear-gradient(135deg, #DFF2D8, #83D28D);
          width: 100%;
          height: 547px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .homeImage{
          object-fit: contain;
        }

        .text-content {
          margin-left: 40px;
          max-width: 500px;
          line-height: 1.5;
    
        }

        .title {
          font-size: 48px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        
        .outlineEnv {
          border: 3px solid #0A5C01;
          border-radius: 20px;
          padding: 0 8px;
        }

        .donate-button {
          background-color: #FED475;
          border: none;
          padding: 20px 60px;
          border-radius: 20px;
          cursor: pointer;
          font-color: #01280A;
          font-weight: bold;
          font-size: 25px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .donate-button:hover {
          background-color: #FFC107;
        }

        .who-we-are-container {
          text-align: center;
          padding: 50px 20px;
          width: 100%;
        }

        .who-we-are {
          font-size: 36px;
          font-weight: bold;
        }

        .who-we-are-text {
          font-size: 24px;
          padding: 50px 150px;
        }

        

      `}</style>
    </div>
  );
}
