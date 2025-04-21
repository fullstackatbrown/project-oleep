// "use client";

import React from "react";
import Image from "next/image";
import "./globals.css";
import { Quicksand } from "next/font/google";
// import PopUp from "@/components/PopUp";
// import Newsletter from "./newsletter/page";
import { fetchNewsletters, RecentNewsletter } from "./newsletter/page";
import HomeClient from "@/components/HomeClient";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default async function Home() {
  // const [showPopup, setShowPopup] = useState(false);
  // const closePopup = () => setShowPopup(false);
  const newsletters = await fetchNewsletters();

  return (
    <>
      <HomeClient newsletters={newsletters} />
    </>
  );
}
