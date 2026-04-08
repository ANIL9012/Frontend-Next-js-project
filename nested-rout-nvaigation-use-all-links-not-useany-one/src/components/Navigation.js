import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Website</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
