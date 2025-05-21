import "./globals.css";

export const metadata = {
  title: "Jo & Eva",
  description: "Anda pernah menghirup aroma kebahagiaan?. Jika anda pernah menghirupnya, maka sama kami juga sedang merasakannya.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/png" },
    ],
  }
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
