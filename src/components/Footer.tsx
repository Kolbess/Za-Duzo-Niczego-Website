import { Instagram, Mail, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
// import logoImage from "public/assets/logo-kwadratowe.png";

export function Footer() {
  return (
    <footer className="bg-[#0c1b2a] border-t border-white/10 mt-32">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={"/assets/logo-kwadratowe.png"} 
                alt="Za dużo niczego" 
                className="w-12 h-12 rounded-lg object-cover"
              />
              <h3 className="text-xl text-white">Za dużo niczego</h3>
            </div>
            <p className="text-gray-400 mt-4">
              Budujemy świadomość o uzależnieniu od dopaminy wśród młodzieży.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white mb-4">Nawigacja</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#c30406] transition-colors">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link to="/o-nas" className="text-gray-400 hover:text-[#c30406] transition-colors">
                  O nas
                </Link>
              </li>
              <li>
                <Link to="/misja" className="text-gray-400 hover:text-[#c30406] transition-colors">
                  Misja
                </Link>
              </li>
              <li>
                <Link to="/postep" className="text-gray-400 hover:text-[#c30406] transition-colors">
                  Postęp projektu
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-white mb-4">Zaangażuj się</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/ankieta" className="text-gray-400 hover:text-[#c30406] transition-colors">
                  Ankieta
                </Link>
              </li>
              <li>
                <Link to="/partnerzy" className="text-gray-400 hover:text-[#c30406] transition-colors">
                  Partnerzy
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-gray-400 hover:text-[#c30406] transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white mb-4">Social Media</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#c30406] hover:bg-white/10 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#c30406] hover:bg-white/10 transition-all"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#c30406] hover:bg-white/10 transition-all"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:kontakt@zaduzoniczeego.pl"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#c30406] hover:bg-white/10 transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 mt-6 text-sm">
              kontakt@zaduzoniczeego.pl
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Za dużo niczego. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-[#c30406] transition-colors">
              Polityka prywatności
            </a>
            <a href="#" className="text-gray-400 hover:text-[#c30406] transition-colors">
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}