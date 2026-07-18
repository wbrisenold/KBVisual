import { Link } from "wouter";

const Footer = () => {
  const navLinks = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="border-t border-stone-200 bg-stone-50 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold uppercase text-stone-950">KB Visualz</div>
            <p className="mt-3 text-sm leading-relaxed text-stone-500 max-w-xs">
              Orlando and Central Florida portrait photography — graduation, branding, family, and creative sessions.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase text-stone-400 mb-4">Navigate</div>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div className="text-sm text-stone-600 hover:text-stone-950 transition-colors cursor-pointer">
                    {link.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase text-stone-400 mb-4">Contact</div>
            <p className="text-sm text-stone-600">Orlando, FL</p>
            <p className="mt-2 text-sm text-stone-600">Inquire via the contact form or reach out through the website.</p>
          </div>
        </div>
        <div className="mt-12 border-t border-stone-200 pt-8 text-center text-xs text-stone-400">
          &copy; {new Date().getFullYear()} KB Visualz. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
