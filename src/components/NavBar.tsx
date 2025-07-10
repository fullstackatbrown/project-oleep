"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const NavBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${quicksand.className}`}>
      <div className="navbar-container">
        {/* Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>

        {/* Nav Section */}
        <div className={`nav-links-container ${isOpen ? "open" : ""}`}>
          <ul className="nav-left">
            <li>
              <Link
                className={`navbar-link ${pathname === "/" ? "active-link" : ""
                  }`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`navbar-link ${pathname === "/mentors" ? "active-link" : ""
                  }`}
                href="/mentors"
              >
                Mentors
              </Link>
            </li>
            <li>
              <Link
                className={`navbar-link ${pathname === "/newsletter" ? "active-link" : ""
                  }`}
                href="/newsletter"
              >
                News
              </Link>
            </li>
          </ul>

          <div className="logo">
            <Image
              src="/oleepLogo.png"
              alt="Logo"
              width={100}
              height={70}
              className="navbar-logo"
            />
          </div>

          <ul className="nav-right">
            <li>
              <Link
                className={`navbar-link ${pathname === "/curriculum" ? "active-link" : ""
                  }`}
                href="/curriculum"
              >
                Curriculum
              </Link>
            </li>
            <li>
              <Link
                className={`navbar-link ${pathname === "/gallery" ? "active-link" : ""
                  }`}
                href="/gallery"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                className={`navbar-link ${pathname === "/about" ? "active-link" : ""
                  }`}
                href="/about"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style>{`
        .navbar {
        width: 100%;
        padding: 0.5rem 1rem; 
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        background-color: #fff;
        position: relative;
        z-index: 10;
        margin-bottom: 0;
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .nav-links-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 1200px;
        }

        .nav-left,
        .nav-right {
          display: flex;
          list-style: none;
          gap: 5rem;
          align-items: center;
        }

        .nav-left {
          justify-content: flex-end;
          flex: 1;
        }

        .nav-right {
          justify-content: flex-start;
          flex: 1;
        }

        .logo {
          flex: 0 0 auto;
          display: flex;
          justify-content: center;
          margin: 0 2rem;
        }

        .navbar-link {
          color: #000;
          font-size: 20px;
          font-weight: bold;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .navbar-link:hover {
          color: #006400;
        }

        .active-link {
          background: linear-gradient(90deg, #468C3A, #5EC272);
          color: #ffffff !important;
          padding: 10px 25px;
          border-radius: 25px;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          position: absolute;
          right: 1.5rem;
          top: 1.5rem;
        }

        .bar {
          width: 25px;
          height: 3px;
          background-color: #063D1E;
        }

        @media (max-width: 950px) {
          .hamburger {
            display: flex;
        }

          .nav-links-container {
            display: ${isOpen ? "flex" : "none"};
            flex-direction: column;
            align-items: center;
            width: 100%;
            margin-top: 3.5rem;
          }

          .nav-left,
          .nav-right {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            padding: 0;
          }

          .logo {
            margin: 1rem 0;
          }
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
