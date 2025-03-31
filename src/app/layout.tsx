import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
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
        </nav> 
        */}
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
