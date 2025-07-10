"use client";

import React, { useState } from "react";
import Image from "next/image";
import "../app/globals.css";
import { Quicksand } from "next/font/google";
import PopUp from "@/components/PopUp";
import { RecentNewsletters } from "@/app/newsletter/NewsletterClient";
// import Newsletter from "./newsletter/page";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
interface Newsletter {
  date: string;
  title: string;
  contentURL: string;
  imageUrl: string;
  description: string;
}

interface NewsletterClientProps {
  newsletters: Newsletter[];
}

export default function HomeClient({ newsletters }: NewsletterClientProps) {
  const [showPopup, setShowPopup] = useState(false);
  const closePopup = () => setShowPopup(false);

  return (
    <>
      {showPopup && (
        <div className="popup-container" onClick={closePopup}>
          <PopUp onClose={closePopup} />
        </div>
      )}
      <div className={`main-container ${showPopup ? "blurred" : ""}`}>
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
            <button
              className="donate-button"
              onClick={() => setShowPopup(true)}
            >
              Donate DEPLOYMENT TEST
            </button>
          </div>
        </div>

        <div className="who-we-are-container">
          <h1 className={`who-we-are ${quicksand.className}`}>Who We Are</h1>
          <p className={`who-we-are-text ${quicksand.className}`}>
            OLEEP is a partnership between the Metropolitan Regional Career and
            Technical Center (the Met) and Brown University&apos;s Swearer
            Center for Public Service. We work with high school students to
            develop leadership skills as well as environmental science and
            justice knowledge, with a specific emphasis on building a
            supportive, collaborative community where <strong>Brown</strong> and{" "}
            <strong>Met</strong> students can learn and grow together.
            <br />
            <br />
            We believe, with the right support, everyone can be a leader and
            bringing about an environmentally just world depends on it.
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
                Students have and use the necessary lifelong leadership skills
                to bring about environmental justice in their communities and
                the world.
              </p>
            </div>
          </div>
          <div className="mission-vision-image-wrapper">
            <Image
              src="/missionImage.png"
              alt="Mission"
              width={400}
              height={400}
              className="mission-vision-image"
            />
            <div className="overlay">
              <p className="default-text">Mission</p>
              <p className="hover-text">
                To promote environmental education, leadership development, and
                personal growth among high school students at the Met.
              </p>
            </div>
          </div>
        </div>


        <div className="partnership-section">
          <p className="our-partnership-text">Our Partnership:</p>

          <div className="partnership-columns">
            {/* Swearer column */}
            <div className="partner-block">
              <Image
                src="/swearerImage.png"
                alt="Swearer Center"
                width={300}
                height={300}
                className="partner-logo"
              />
              <div className="partner-description">
                <p>
                  <strong>The Swearer Center</strong> is the public service
                  center of Brown University. Aiming to combine community
                  engagement, social innovation, and engaged scholarship through
                  experiential learning, Swearer connects students, faculty, and
                  community partners as part of the university’s educational
                  mission. These valued relationships are based in values of
                  ethical and engaged student leadership; reciprocity and
                  respect; diversity, equity, and inclusion; social justice; and
                  intellectual rigor. Today, the Center works with more than
                  1,200 Brown students and 100+ community partners mostly
                  located in the Greater Providence area.
                </p>
                <p>
                  <strong>Mission</strong>
                  <br />
                  Swearer is a community of scholars, students, practitioners
                  and community members that works together to build on
                  community strengths and address community challenges. The
                  Center’s work engages all as co-learners, co-teachers,
                  co-actors and co-creators of knowledge and action. Through the
                  creative capacities of its students, faculty and community
                  partners, members explore, build and implement collaborative
                  and strategic projects, programs and initiatives. Their work
                  yields transformative learning, and positive sustainable
                  change, through collective action. Check out its website{" "}
                  <a
                    href="https://swearer.brown.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="x-text">X</div>

            {/* Met column */}
            <div className="partner-block">
              <Image
                src="/metImage.png"
                alt="The Met"
                width={300}
                height={300}
                className="partner-logo"
              />
              <div className="partner-description">
                <p>
                  <strong>The Met</strong> is a network of six small, public
                  high schools located in Providence and Newport, Rhode Island.
                  With high standards and strong family engagement, the Met’s
                  individualized learning approach has proven successful in
                  unlocking students’ passion for learning. The Met empowers its
                  students to take charge of their learning, to become
                  responsible citizens and life-long learners. The hallmarks of
                  a MET education include internships, individual learning
                  plans, advisory, and a breakthrough college transition
                  program.
                </p>
                <p>
                  Every student has an individualized learning plan built around
                  that child’s needs and interests, while incorporating the
                  Met’s rigorous learning goals. Parents and mentors are active
                  members of the student’s learning plan team, working with the
                  advisor to develop the best curriculum for that child. Strong
                  relationships with parents, family, the community, business,
                  government, and other educational institutions are key factors
                  that contribute to the success of Met students. For more
                  information, check out its website{" "}
                  <a
                    href="https://www.themethighschool.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-100 flex justify-center items-center min-h-100 p-6 pt-10">
          <div className="w-full max-w-5xl">
            <h2
              className={`${quicksand.className} text-[36px] font-bold text-black mb-4`}
            >
              Lately in OLEEP...
            </h2>
            <RecentNewsletters newsletters={newsletters} />
          </div>
        </div>
      </div>
      <style>{`
        .main-container {
          display: flex;
          align-items: center;
          flex-direction: column;
          width: 100%;
          max-width: 100%;
          min-width: 100%;
          overflow-x: hidden;
          margin: 0px;
          padding: 0px;
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

        .homeImage {
          position: relative;
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
          color: #01280A;
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

        .lately-in-oleep-container{
            text-align: center;
            padding: 50px 20px;
            width: 100%;
        }

        .lately-in-oleep-title{
            text-align: left;
            font-size: 36px;
            font-weight: bold;
        }

        .lately-in-oleep-text{
            text-align: left;
            font-size: 24px;
            padding: 50px 150px;
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
          margin: 20px;
        }

        .blurred {
          filter: blur(4px);
          pointer-events: none;
        }

        .popup-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .partnership-section {
  text-align: center;
  margin-bottom: 4rem;
}

.partnership-columns {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 40px;
}

.partner-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%; /* increased from 350px */
}

.partner-logo {
  margin-bottom: 16px;
  object-fit: contain;
}

.partner-description {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-size: 20px;
  line-height: 1.6;
  text-align: left;
  width: 100%;
  height: 600px; /* Set a fixed height instead of min-height */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto; /* Add scrolling if content overflows */
}
  .partner-description p {
  margin-bottom: 1.5rem; /* Adds space between paragraphs */
}


.x-text {
  font-size: 48px;
  align-self: center;
  margin-top: 80px;
}
        
        .our-partnership-text {
          margin: 40px;
          font-size: 36px;
          font-weight: bold;
          text-decoration: underline;
          text-align: center;
        }

      `}</style>
    </>
  );
}
