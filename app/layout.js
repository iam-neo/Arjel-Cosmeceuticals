import { Inter, Playfair_Display } from "next/font/google";
import { CartProvider } from "./context/CartContext";
import ScrollRevealProvider from "./components/ScrollRevealProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Arjel Cosmeceuticals — Science-Backed Skincare for Real Results",
  description:
    "Dermatologist-developed skincare formulas powered by proven ingredients. Clear skin, lasting confidence. Shop by concern — acne, dark spots, oil control, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <ScrollRevealProvider />
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
