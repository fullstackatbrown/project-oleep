import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
