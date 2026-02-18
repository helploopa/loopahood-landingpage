import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ShoppingBag, Store, Heart, Instagram, Mail } from "lucide-react";
import logo from "figma:asset/99d812d689a683464fc5371b1874904b6c4bdb07.png";

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/60 backdrop-blur-md border-b border-orange-100/30"
    >
      <div className="flex items-center gap-3">
        <img src={logo} alt="Loopa Logo" className="h-10 w-auto object-contain" />
      </div>
      
      <button 
        onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
        className="px-6 py-2.5 bg-[#E67E22] text-white rounded-full font-semibold hover:bg-[#D35400] transition-all shadow-lg shadow-orange-200 active:scale-95"
      >
        Join Waitlist
      </button>
    </motion.nav>
  );
};

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1716582873749-f4fb77fe9957?q=80&w=2070" 
          alt="Vibrant sunny outdoor community gathering" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#FDF5E6]" />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] text-orange-200/20"
        >
          <ShoppingBag size={100} strokeWidth={1} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[30%] right-[10%] text-orange-200/20"
        >
          <Store size={120} strokeWidth={1} />
        </motion.div>
      </div>

      <motion.div style={{ opacity }} className="relative z-20 container mx-auto px-6 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold mb-6 tracking-tight"
        >
          Loopa is Coming
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-orange-50 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Something special is being built for your neighborhood. <br />
          A new way to discover and share homemade treasures.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button 
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-12 py-5 bg-[#E67E22] text-white rounded-full text-xl font-bold hover:bg-[#D35400] transition-all transform hover:scale-105 shadow-2xl active:scale-95"
          >
            Join the Waitlist
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export const ComingSoon = () => {
  return (
    <section id="waitlist" className="py-32 bg-[#FDF5E6] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-orange-900 mb-6">Be the first to know.</h2>
            <p className="text-xl text-orange-800/60 mb-12">
              We're launching soon, starting neighborhood by neighborhood. <br />
              Enter your email to get early access.
            </p>

            <form className="flex flex-col gap-4 p-2 bg-white rounded-3xl shadow-xl shadow-orange-200/30 border border-orange-100 sm:flex-row sm:rounded-full">
              <input 
                type="email" 
                required
                placeholder="email@example.com" 
                className="flex-1 px-8 py-5 bg-transparent focus:outline-none text-orange-900 text-lg rounded-full"
              />
              <button className="px-10 py-5 bg-[#E67E22] text-white rounded-full text-lg font-bold hover:bg-[#D35400] transition-all shadow-lg active:scale-95">
                Join Waitlist
              </button>
            </form>
            
            <p className="mt-8 text-sm text-orange-800/40 font-medium">
              Made for neighborhoods ❤️
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-orange-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Loopa Logo" className="h-8 w-auto grayscale opacity-50" />
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="text-orange-800/40 hover:text-orange-600 transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-orange-800/40 hover:text-orange-600 transition-colors"><Mail size={20} /></a>
        </div>

        <p className="text-xs text-orange-800/30">© 2026 Loopa. Coming Soon.</p>
      </div>
    </footer>
  );
};
