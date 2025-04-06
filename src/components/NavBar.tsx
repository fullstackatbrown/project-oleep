"use client"; //client component!

import React from "react";
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

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light ${quicksand.className}`}
    >
      <div className="container-fluid justify-content-center">
        <ul className="nav">
          <li>
            <Link
              className={`nav-link navbar-link ${
                pathname === "/" ? "active-link" : ""
              }`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`nav-link navbar-link ${
                pathname === "/mentors" ? "active-link" : ""
              }`}
              href="/mentors"
            >
              Mentors
            </Link>
          </li>
          <li>
            <Link
              className={`navbar-link ${
                pathname === "/newsletter" ? "active-link" : ""
              }`}
              href="/newsletter"
            >
              News
            </Link>
          </li>
          <li className="nav-item logo-item">
            <Image
              src="/oleepLogo.png"
              alt="Logo"
              width={100}
              height={70}
              className="navbar-logo"
            />
          </li>
          <li>
            <Link
              className={`navbar-link ${
                pathname === "/curriculum" ? "active-link" : ""
              }`}
              href="/curriculum"
            >
              Curriculum
            </Link>
          </li>
          <li>
            <Link
              className={`navbar-link ${
                pathname === "/gallery" ? "active-link" : ""
              }`}
              href="/gallery"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              className={`navbar-link ${
                pathname === "/about" ? "active-link" : ""
              }`}
              href="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </div>

      <style>{`
        .navbar {
          display: flex;
          flex-direction: column;
          align-items: center; /* Center navbar items */
          font-weight: bold;
        }

        img {
          margin: 0;
        }

        nav {
          background-color: #ffffff;
          padding: 1rem 0;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        } 

        ul {
          display: flex;
          list-style: none;
          align-items: center; /* Ensures links are vertically aligned */
          justify-content: center; /* Centers links horizontally */
          padding: 0;
          margin: 0;
          width: 100%;
        }

        li {
          margin: 0 2rem;
        }

        @media (width <= 950px) {
          .navbar {
            align-items: center;
            flex-direction: column;
          }
          ul {
            flex-direction: column;
          }
          li {
            padding: 10px;
          }
        }

        /* Override default link styles */
        a.navbar-link {
          color: #000000;
          font-size: 20px;
          text-decoration: none;
          transition: color 0.3s ease-in-out;
        }

        /* Active link (circular green highlight) */
        .active-link {
          background: linear-gradient(90deg, #468C3A, #5EC272); /* Green gradient */
          color: #ffffff !important; /* White text */
          padding: 10px 25px; /* Adjust padding to create a circular shape */
          border-radius: 25px; /* Make the background circular */
        }

        /* Change color on hover */
        a.navbar-link:hover {
          color: #006400 !important; /* Dark Green */
        }
`}</style>
    </nav>
  );
};

export default NavBar;
