import "./globals.css";

export const metadata = {
  title: "Jova Theme 01",
  description: "Jonathan - Eva Wedding Theme 01",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className="antialiased"> 
      {children}
    </body>
    </html>
  );
}
