import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import logoImage from "public/assets/logo-kwadratowe.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Strona główna", path: "/" },
    { label: "O nas", path: "/o-nas" },
    { label: "Misja", path: "/misja" },
    { label: "Postęp", path: "/postep" },
    { label: "Ankieta", path: "/ankieta" },
    { label: "Partnerzy", path: "/partnerzy" },
    { label: "Kontakt", path: "/kontakt" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0c1b2a]/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={"/assets/logo-kwadratowe.png"} 
              alt="Za dużo niczego" 
              className="h-13 w-13 rounded-lg object-cover transition-transform group-hover:scale-105"
            />
            <div>
              <h1 className="text-xl text-white group-hover:text-[#c30406] transition-colors">
                Za dużo niczego
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative py-2 transition-colors ${
                  location.pathname === item.path
                    ? "text-[#c30406]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c30406]" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/ankieta"
              className="px-6 py-3 bg-[#c30406] text-[#faf6ef] rounded-lg hover:bg-[#a50305] transition-all hover:shadow-lg hover:shadow-[#c30406]/20"
            >
              Wypełnij ankietę
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#152030] border-t border-white/10">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 transition-colors ${
                  location.pathname === item.path
                    ? "text-[#c30406]"
                    : "text-gray-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/ankieta"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-3 bg-[#c30406] text-[#faf6ef] rounded-lg text-center mt-2"
            >
              Wypełnij ankietę
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}