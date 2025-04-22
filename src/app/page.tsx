// "use client";

import React from "react";
import "./globals.css";
// import PopUp from "@/components/PopUp";
// import Newsletter from "./newsletter/page";
import { fetchNewsletters } from "@/lib/fetchNewsletters";
import HomeClient from "@/components/HomeClient";



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
