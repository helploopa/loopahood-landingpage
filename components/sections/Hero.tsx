"use client";

import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Package, Heart, Sparkles, Store } from "lucide-react";
import { useState, useEffect } from "react";

const HERO_BG =
  "https://images.unsplash.com/photo-1555192881-d1bee8bdfedf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBiaXJkJTIwZXllJTIwdmlldyUyMG5laWdoYm9yaG9vZCUyMGhvdXNlc3xlbnwxfHx8fDE3NzQ3MzAxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080";

const rotatingWords = ["Connect", "Discover", "Support"];

const sellers = [
  { id: 1, x: 15, y: 25, icon: ShoppingBag, label: "Pottery", revealAt: 0.3 },
  { id: 2, x: 35, y: 35, icon: Package, label: "Crafts", revealAt: 0.4 },
  { id: 3, x: 55, y: 28, icon: Heart, label: "Candles", revealAt: 0.5 },
  { id: 4, x: 72, y: 38, icon: Sparkles, label: "Jewelry", revealAt: 0.6 },
  { id: 5, x: 25, y: 60, icon: Store, label: "Textiles", revealAt: 0.7 },
  { id: 6, x: 80, y: 55, icon: Heart, label: "Soaps", revealAt: 0.8 },
];

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const duration = 15000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed % duration) / duration, 1);
      setAnimationProgress(progress);
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 8;
    const y = (clientY / innerHeight - 0.5) * 8;
    setMousePosition({ x, y });
  };

  const zoomScale = 3 - animationProgress * 2;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background with Zoom Animation */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          scale: zoomScale,
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 40 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_BG}
          alt="Aerial view of community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </motion.div>

      {/* Seller Icons Overlay */}
      <motion.div
        className="absolute inset-0 z-[7] pointer-events-none"
        style={{ scale: zoomScale }}
      >
        {sellers.map((seller) => {
          const Icon = seller.icon;
          const revealed = animationProgress >= seller.revealAt;

          return (
            <motion.div
              key={seller.id}
              className="absolute"
              style={{ left: `${seller.x}%`, top: `${seller.y}%` }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: revealed ? 1 : 0, scale: revealed ? 1 : 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            >
              <motion.div
                className="relative"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: seller.id * 0.2 }}
              >
                {/* Pulsing ring */}
                <motion.div
                  className="absolute inset-0 -m-4 rounded-full border-2 border-[#EF9622]"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: seller.id * 0.2 }}
                />

                {/* Icon container */}
                <div className="relative w-12 h-12 bg-[#EF9622] rounded-full flex items-center justify-center shadow-lg shadow-[#EF9622]/50">
                  <Icon size={24} className="text-black" />
                </div>

                {/* Label */}
                <motion.div
                  className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap backdrop-blur-sm px-3 py-1 rounded-full border border-[#EF9622]/30"
                  style={{ backgroundColor: "rgba(11, 11, 14, 0.8)" }}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : -5 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-xs font-medium text-white">{seller.label}</span>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center pt-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          <div className="inline-block min-w-[300px] md:min-w-[400px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                className="inline-block"
                initial={{ opacity: 0, y: 50, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -50, rotateX: -90 }}
                transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
              >
                {rotatingWords[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <br />
          <span className="italic">Neighbours</span>{" "}
          <span style={{ color: "#EF9622" }}>for real</span>
        </h1>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
