import "./globals.css";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
       <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="header">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center" style={{ fontFamily: 'Quicksand, sans-serif' }}>
            <ul className="flex font-bold" style={{ flex: 1 }}>
              <li className="mr-12"><a href="/" className="text-black hover:underline">Home</a></li>
              <li className="mr-12"><a href="/mentors" className="text-black hover:underline">Mentors</a></li>
              <li className="mr-12"><a href="/newsletter" className="text-black hover:underline">News</a></li>
            </ul>
            <Image src="/logo.png" alt="logo" width={100} height={85} layout="fixed"/>
            <ul className="flex font-bold" style={{ flex: 1 }}>
              <li className="ml-12"><a href="/curriculum" className="text-black hover:underline">Curriculum</a></li>
              <li className="ml-12"><a href="/gallery" className="text-black hover:underline">Gallery</a></li>
              <li className="ml-12"><a href="/about" className="text-black hover:underline">About</a></li>
            </ul>
          </nav>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
