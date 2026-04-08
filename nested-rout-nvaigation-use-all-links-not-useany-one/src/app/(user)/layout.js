import Navigation from "@/components/Navigation";
import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Navigation />
        <h1>Main layout</h1>
        {children}
      </body>
    </html>
  );
}
