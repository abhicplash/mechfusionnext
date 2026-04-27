import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import "@/styles/globals.css";
import { Parkinsans } from "next/font/google";

const parkinsans = Parkinsans({
  subsets: ["latin"],
  variable: "--font-parkinsans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={parkinsans.variable}>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
