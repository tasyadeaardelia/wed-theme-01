import "./globals.css";

export const metadata = {
  title: "Jo & Eva",
  description: "Jonathan - Eva Wedding Theme 01",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/png" },
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
