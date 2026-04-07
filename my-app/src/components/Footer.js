import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
        {/* Logo / About */}
        <div>
          <h2 className="text-lg font-semibold">MySite</h2>
          <p className="text-sm">Modern Responsive Website</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="text-sm space-y-1">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Product Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Products</h2>
          <ul className="text-sm space-y-1">
            <li>
              <Link href="/product1" className="hover:underline">
                Product 1
              </Link>
            </li>
            <li>
              <Link href="/product2" className="hover:underline">
                Product 2
              </Link>
            </li>
            <li>
              <Link href="/product3" className="hover:underline">
                Product 3
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm border-t border-gray-700 py-4">
        © 2026 MySite. All rights reserved.
      </div>
    </footer>
  );
}
