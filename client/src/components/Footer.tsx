import { Link } from "wouter";
import { SCHEDULING_URL } from "@/lib/booking";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f5f5f5" }} className="border-t border-yellow-600 border-opacity-20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-600 mb-4">KB Visualz</h3>
            <p className="text-stone-700 opacity-80 leading-relaxed">
              Orlando portrait photography for individual, family, creative, and personal branding sessions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-stone-900 font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/portfolio" className="text-stone-700 opacity-80 hover:text-yellow-600 transition-colors duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-stone-700 opacity-80 hover:text-yellow-600 transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-stone-700 opacity-80 hover:text-yellow-600 transition-colors duration-300">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Booking */}
          <div>
            <h4 className="text-stone-900 font-medium mb-4">Booking</h4>
            <ul className="space-y-2">
              <li className="text-stone-700 opacity-80">Orlando, FL</li>
              <li className="text-stone-700 opacity-80">Outdoor and studio portrait sessions</li>
              <li>
                <a href={SCHEDULING_URL} target="_blank" rel="noopener noreferrer" className="text-stone-700 opacity-80 hover:text-yellow-600 transition-colors duration-300">
                  Schedule a session
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-yellow-600 border-opacity-20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-700 opacity-60 text-sm">
            Copyright 2026 KB Visualz by Ken Brisenold. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/pricing" className="text-stone-700 opacity-60 hover:text-yellow-600 transition-colors duration-300 text-sm">
              Pricing & Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
