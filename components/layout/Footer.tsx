import Image from "next/image";
import { Globe, Share2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#EF9622] py-16" style={{ backgroundColor: "#0b0b0e" }}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Image
              src="/logos/loopa-logo-white.svg"
              alt="Loopa"
              width={64}
              height={64}
              className="h-16 w-auto mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              Connecting neighbourhoods for real.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/60 hover:text-[#EF9622] transition-colors duration-300 text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-white/60 hover:text-[#EF9622] transition-colors duration-300 text-sm">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#waitlist" className="text-white/60 hover:text-[#EF9622] transition-colors duration-300 text-sm">
                  Join Waitlist
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-white font-medium mb-4">Community</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/60 hover:text-[#EF9622] transition-colors duration-300 text-sm">
                  For Makers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#EF9622] transition-colors duration-300 text-sm">
                  For Buyers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#EF9622] transition-colors duration-300 text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-medium mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#EF9622] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#EF9622]/30"
              >
                <Globe size={18} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#EF9622] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#EF9622]/30"
              >
                <Share2 size={18} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Loopahood LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-[#EF9622] transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-[#EF9622] transition-colors duration-300 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
