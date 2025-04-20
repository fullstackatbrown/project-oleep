"use client";
import CurriculumClient from "./CurriculumClient";



const mockWorkshops = [
    {
        id: "ws-1",
        title: "Sustainable Living & Zero-Waste Practices",
        date: "23 Fri",
        duration: "2 hours",
        pdfUrl: "/pdfs/week1.pdf",
    },
    {
        id: "ws-2",
        title: "Sustainable Living & Zero-Waste Practices",
        date: "16 Fri",
        duration: "2 hours",
        pdfUrl: "/pdfs/week2.pdf",
    },
    {
        id: "ws-3",
        title: "Sustainable Living & Zero-Waste Practices",
        date: "07 Fri",
        duration: "2 hours",
        pdfUrl: "/pdfs/week3.pdf",
    },
];

export default async function CurriculumPage() {
  const workshops = mockWorkshops;

  return (
    <div className="p-4">
      <CurriculumClient workshops={workshops} />
    </div>
  );
}
