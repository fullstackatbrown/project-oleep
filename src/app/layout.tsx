import NavBar from "@/components/NavBar";
import Footer from "@/app/footer/footer";

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
        <NavBar />
        {/*
         <nav className="p-4 bg-green-700 text-white flex gap-4">
          <a href="/">Home</a>
          <a href="test-cms">Test CMS</a>
          <a href="/mentors">Mentors</a>
          <a href="/newsletter">Newsletter</a>
          <a href="/curriculum">Curriculum</a>
          <a href="/gallery">Gallery</a>
          <a href="/about">About</a>
        </nav> 
        */}
                <main className="p-6">{children}</main>
            </body>
            <Footer></Footer>
        </html>
    );
}
