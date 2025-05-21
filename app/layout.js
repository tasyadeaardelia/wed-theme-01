import "./globals.css";

export const metadata = {
  title: "Jo & Eva",
  description: "Anda pernah menghirup aroma kebahagiaan?. Jika anda pernah menghirupnya, maka sama kami juga sedang merasakannya.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Jo & Eva",
    description: "Anda pernah menghirup aroma kebahagiaan?. Jika anda pernah menghirupnya, maka sama kami juga sedang merasakannya.",
    url: "https://jo-eva.mantappdev.com", // ← ganti dengan domain kamu
    type: "website",
    images: [
      {
        url: "https://jova-admin.mantappdev.com/IMG_2237.jpg", // ← ganti dengan gambar untuk preview WhatsApp
        width: 1200,
        height: 630,
        alt: "Jo & Eva Preview",
      },
    ],
  },
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
