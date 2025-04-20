import React from "react";

import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const DonatePopup = ({ onClose }: { onClose: () => void }) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    // Close the popup if the overlay (background) is clicked
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className={`popup ${quicksand.className}`}>
        <h2>Secure Online Giving!</h2>
        <p>
          You can make your gift to OLEEP at{" "}
          <a
            href="https://gifts.brown.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            gifts.brown.edu
          </a>
          . Just follow the steps below:
        </p>
        <ol>
          <li>1. Enter your desired gift amount.</li>
          <li>2. Under the Designation dropdown, select “Other”.</li>
          <li>
            3. In the special instructions/comments section, write: “Outdoor
            Leadership and Environmental Education Program.”
          </li>
        </ol>
      </div>

      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100vw;
          background-color: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .popup {
          background-color: #e9ffd5;
          border-radius: 20px;
          padding: 30px;
          max-width: 400px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          text-align: left;
          font-size: 16px;
        }

        .popup h2 {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 10px;
          text-align: center;
        }

        .popup a {
          color: #1a73e8;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default DonatePopup;
