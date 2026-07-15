import { Link } from "wouter";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f5f5f5" }} className="border-t border-yellow-700 border-opacity-20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Link
          href="/#contact"
          className="text-stone-800 text-sm hover:text-yellow-700 focus-visible:text-yellow-700 transition-colors duration-300"
        >
          Get in Touch
        </Link>
        <div className="mt-4 text-stone-500 text-xs">
          &copy; {new Date().getFullYear()} KB Visualz
        </div>
      </div>
    </footer>
  );
};

export default Footer;
