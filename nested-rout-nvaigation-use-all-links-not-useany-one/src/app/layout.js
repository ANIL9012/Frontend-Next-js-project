import Navigation from "@/components/Navigation";
import "./globals.css";
import { Roboto, Work_Sans } from "next/font/google";

export const metadata = {
  title: {
    default: "Anil kumar | Learn web developmenet",
    template: "%s | Anil Technical",
  },
  description:
    "Our Learning include web development, mobile app development, and UI/UX design.",
  keywords: ["next js", "reactjs", "fullstack"],

  authors: [
    { name: "Anil Kumar" },
    { name: "Anil Technical", url: "anilkumartechnical.com" },
  ],
  icons: {
    icon: "/nature.jpg",
  },
  metadataBase: new URL("https://anilkumartechnical.com"),
  openGraph: {
    title: "Anil Kumar",
    description: "I am a frontend developer",
    url: "https://yourdomain.com",
    siteName: "Anil Kuamr",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anil Technical logo",
      },
    ],
    type: "website",
  },
};
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
      <body className={`${roboto.variable} ${worksans.variable}`}>
        <Navigation />
        <h1>Main layout</h1>
        {children}
      </body>
    </html>
  );
}
