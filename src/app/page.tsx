import React from "react";
import Image from "next/image";
import "./globals.css";
import { Quicksand } from "next/font/google";
import Newsletter from "./newsletter/page";
import { RecentNewsletter } from "./newsletter/page";


const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Home() {
  return (
    <div className="main-container">
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
          Career and Technical Center (the Met) and Brown University
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
        
        <div className="partnership-section">
            <h2 className="partnership-title">Our Partnership</h2>

            <div className="logos-row">
              <Image src="/swearer.png" alt="Swearer Center Logo" height={140} width={395} />
            <Image src="/cross.png" alt="x icon" height={40} width = {40} />
            <Image src="/met_logo.png" alt="The Met School Logo" height={150} width={320} />
            </div>

            <div className="description-row">
            <div className="desc-box">
               <strong>The Swearer Center</strong> is the public service center of Brown University. Aiming to combine community engagement, social innovation, and engaged scholarship through experiential learning, Swearer connects students, faculty, and community partners as part of the university’s educational mission. These valued relationships are based in values of ethical and engaged student leadership; reciprocity and respect; diversity, equity, and inclusion; social justice; and intellectual rigor. Today, the Center works with more than 1,200 Brown students and 100+ community partners mostly located in the Greater Providence area.
               <br /><br />
               
                 Swearer is a community of scholars, students, practitioners and community members that works together to build on community strengths and address community challenges. The Center’s work engages all as co-learners, co-teachers, co-actors and co-creators of knowledge and action. Through the creative capacities of its students, faculty and community partners, members explore, build and implement collaborative, radically strategic projects, programs and initiatives. Their work yields transformative learning, and positive sustainable change, through collective action.
                  <br /><br />
                 Check out its website <a href="https://swearer.brown.edu/" className="inline-link">here</a>.
            </div>

            <div className="desc-box">
               <strong>The Met</strong> is a network of six small, public high schools located in Providence and Newport, Rhode Island. With high standards and strong family engagement, the Met’s individualized learning approach has proven successful in unlocking students’ passion for learning. The Met empowers its students to take charge of their learning, to become responsible citizens and life-long learners. The hallmarks of a MET education include internships, individual learning plans, advisory, and a breakthrough college transition program.
               <br /><br />
               Every student has an individualized learning plan built around that child’s needs and interests, while incorporating the <strong>Met</strong>’s rigorous learning goals. Parents and mentors are active members of the student’s learning plan team, working with the advisor to develop the best curriculum for that child. Strong relationships with parents, family, the community, business, government, and other educational institutions are key factors that contribute to the success of Met students.
               <br /><br />
               For more information, check out its website <a href="https://www.themethighschool.org/" className="inline-link">here</a>.
            </div>
            </div>
         </div>
        

        <div className={`bg-white-100 flex justify-center items-center min-h-100 p-6 pt-10`}>
          <div className="w-full max-w-5xl">
            <h2 className={`${quicksand.className} text-[36px] font-bold text-black mb-4`}>Lately in OLEEP...</h2>
            <RecentNewsletter />
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
        }

         .partnership-section {
         text-align: center;
         padding: 40px 20px;
         font-family: 'Inter', sans-serif;
         }

         .partnership-title {
         font-size: 24px;
         font-weight: bold;
         margin-bottom: 30px;
         }

         .logos-row {
         display: flex;
         justify-content: center;
         align-items: center;
         gap: 30px;
         margin-bottom: 40px;
         flex-wrap: wrap;
         }

         .description-row {
         display: flex;
         justify-content: center;
         gap: 40px;
         flex-wrap: wrap;
         }

         .desc-box {
         max-width: 400px;
         text-align: left;
         padding: 20px;
         border: 1px solid #ddd;
         border-radius: 12px;
         background-color: #fff;
         box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
         }

         .inline-link {
         color: #0077cc;
         text-decoration: underline;
}
      `}</style>
    </div>
  );
}
