"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-2">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">MySite</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 items-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>

          {/* Desktop Dropdown */}
          <div className="relative group">
            <span className="cursor-pointer px-2 py-1">Products ▾</span>

            <div className="absolute left-0 top-full bg-white shadow-lg w-26 hidden group-hover:block">
              <Link
                href="/product1"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Product 1
              </Link>
              <Link
                href="/product2"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Product 2
              </Link>
              <Link
                href="/product3"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Product 3
              </Link>
            </div>
          </div>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <Link
            href="/"
            className="block p-3 border-b"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block p-3 border-b"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className="block p-3 border-b"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>

          {/* Mobile Products Dropdown */}
          <div className="border-b">
            <button
              className="w-full text-left p-3"
              onClick={() => setProductOpen(!productOpen)}
            >
              Products ▾
            </button>

            {productOpen && (
              <div className="bg-gray-100">
                <Link
                  href="/product1"
                  className="block p-3 pl-6"
                  onClick={() => setMenuOpen(false)}
                >
                  Product 1
                </Link>
                <Link
                  href="/product2"
                  className="block p-3 pl-6"
                  onClick={() => setMenuOpen(false)}
                >
                  Product 2
                </Link>
                <Link
                  href="/product3"
                  className="block p-3 pl-6"
                  onClick={() => setMenuOpen(false)}
                >
                  Product 3
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
