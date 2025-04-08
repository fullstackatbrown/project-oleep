import React from "react";
import Image from "next/image";
import "./globals.css"; 
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
                <h1 className={`who-we-are ${quicksand.className}`}>
                    Who We Are
                </h1>
                <p className={`who-we-are-text ${quicksand.className}`}>
                    {" "}
                    OLEEP is a partnership between the Metropolitan Regional
                    Career and Technical Center (the Met) and Brown University's
                    Swearer Center for Public Service. We work with high school
                    students to develop leadership skills as well as
                    environmental science and justice knowledge, with a specific
                    emphasis on building a supportive, collaborative community
                    where <strong>Brown</strong> and <strong>Met</strong>{" "}
                    students can learn and grow together.
                    <br />
                    <br />
                    We believe, with the right support, everyone can be a leader
                    and bringing about an environmentally just world depends on
                    it.
                </p>
            </div>

            <div className={`mission-vision-container ${quicksand.className}`}>
                <div className="mission-vision-image-wrapper">
                    <Image
                        src="/visionImage.jpg"
                        alt="Vision"
                        width={300}
                        height={300}
                        className="mission-vision-image"
                    />
                    <div className="overlay">
                        <p className="default-text">Vision</p>
                        <p className="hover-text">
                            Students have and use the necessary lifelong
                            leadership skills to bring about environmental
                            justice in their communities and the world.
                        </p>
                    </div>
                </div>
                <div className="mission-vision-image-wrapper">
                    <Image
                        src="/missionImage.png"
                        alt="Mission"
                        width={300}
                        height={300}
                        className="mission-vision-image"
                    />
                    <div className="overlay">
                        <p className="default-text">Mission</p>
                        <p className="hover-text">
                            To promote environmental education, leadership
                            development, and personal growth among high school
                            students at the Met.
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
        .main-container {
          display: flex;
          align-items: center;
          flex-direction: column;
          width: 100vw; /* Use viewport width instead of percentage */
          max-width: 100%; /* Prevent overflow */
          overflow-x: hidden;
          margin: 0;
          padding: 0;
        }
          
        .home-container {
          background: linear-gradient(135deg, #DFF2D8, #83D28D);
          width: 100%;
          min-height: 547px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }

        .homeImage{
          position: relative; /* Required for 'fill' prop */
          width: 100%;
          height: auto;
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

        
        .mission-vision-container {
          display: flex;
          justify-content: center;
          gap: 200px;
          padding: 0px;
          margin: 0px;
        }

        .mission-vision-image-wrapper {
          position: relative;
          height: 200px;
          aspect-ratio: 2/1;
          overflow: hidden;
          border-radius: 15px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .mission-vision-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 15px;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          color: white;
          font-size: 24px;
          font-weight: bold;
          padding: 20px;
          box-sizing: border-box;
        }

        .default-text {
          margin: 20px;
          opacity: 1;
          transition: opacity 0.3s ease;
        }

        .hover-text {
          margin: 20%;
          opacity: 0;
          transition: opacity 0.3s ease;
          position: absolute;
          font-size: 18px;
        }

        .overlay:hover {
          background-color: rgba(0, 0, 0, 0.5);
        }

        .overlay:hover .default-text {
          opacity: 0;
        }

        .overlay:hover .hover-text {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
