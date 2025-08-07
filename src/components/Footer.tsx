'use client';

import Link from "next/link";
import { navItems } from "@/lib/nav-items";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand & Description */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-2">Taughtlevel</h2>
          <p className="text-bold leading-relaxed">
            Taughtlevel Technologies offers 21st-century tech services and education,
            including Web Dev, Coding, Robotics, UI/UX, Graphics, and more.
          </p>
        </div>

        {/* Quick Links (dynamic) */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-primary transition-colors text-bold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm mb-2">📍 No.2 Christ The King Road, Abayi, Aba, Abia State, Nigeria</p>
          <ul className="space-y-2  text-bold">
            <li><a href="tel:+2348167542553" className="hover:text-primary">+234 816 754 2553</a></li>
            <li><a href="tel:+2348132119962" className="hover:text-primary">+234 813 211 9962</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-600">
              <FaFacebookF size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <FaXTwitter size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t text-sm text-center py-4 text-gray-500">
        © {new Date().getFullYear()} Taughtlevel Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
