import Navigation from "@/components/Navigation";
import "../globals.css";
import { Roboto, Work_Sans } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const worksans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-worksans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${worksans.className}`}>
        <Navigation />
        <h1>Main layout</h1>
        {children}
      </body>
    </html>
  );
}
