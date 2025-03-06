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
            <Link className="navbar-link" href="/mentors">
              Mentors
            </Link>
          </li>
          <li>
            <Link className="navbar-link" href="/newsletter">
              News
            </Link>
          </li>
          <li className="nav-item logo-item">
            <Image
              src="/oleepLogo.png"
              alt="Logo"
              width={70}
              height={50}
              className="navbar-logo"
            />
          </li>
          <li>
            <Link className="navbar-link" href="/curriculum">
              Curriculum
            </Link>
          </li>
          <li>
            <Link className="navbar-link" href="/gallery">
              Gallery
            </Link>
          </li>
          <li>
            <Link className="navbar-link" href="/about">
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
    margin: 0 1rem;
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
    padding: 10px 20px; //elipse
    border-radius: 50px; /elipse
  }

  /* Active link (circular green highlight) */
  .active-link {
     background-color: #347235; /* Medium forest green highlight */
     color: #ffffff !important; /* White text */
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

/*
<nav className="p-4 bg-green-700 text-white flex gap-4">
          <a href="/">Home</a>
          <a href="/mentors">Mentors</a>
          <a href="/newsletter">Newsletter</a>
          <a href="/curriculum">Curriculum</a>
          <a href="/gallery">Gallery</a>
        </nav>
*/
