import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";

const inter = Inter({
  variable: "--inter-font",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--space-font",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hi-GAS - Fuel Delivery Simplified",
  description: "Get fuel delivered anywhere, anytime with Hi-GAS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
        style={{
          "--font-space-grotesk":
            spaceGrotesk.style.fontFamily + ", sans-serif",
        }}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
