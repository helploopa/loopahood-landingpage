"use client";

import { motion } from "motion/react";
import { ShoppingBag, Gift, MessageSquare, Users } from "lucide-react";

const steps = [
  {
    icon: ShoppingBag,
    title: "Browse & Shop",
    description:
      "Discover amazing products from local sellers in your area. Everything from baked goods to handmade soaps and fresh produce.",
  },
  {
    icon: Gift,
    title: "Claim Your Gifts",
    description:
      "When you make a purchase, claim your gift from local sellers can offer. Try before you buy!",
  },
  {
    icon: MessageSquare,
    title: "Share Feedback",
    description: "Leave a review and help local businesses grow. Your feedback matters!",
  },
  {
    icon: Users,
    title: "Grow Together",
    description: "Grow and lasting relationships with your local community.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 border-t border-[#EF9622]"
      style={{ backgroundColor: "#0b0b0e" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: "#EF9622" }}>
            How It Works
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Shop local and discover new products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
              >
                <div className="relative inline-block mb-6">
                  <motion.div
                    className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-white/10"
                    whileInView={{ rotate: [0, 360] }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.2 + 0.3,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    <Icon
                      size={32}
                      className="text-white transition-all duration-500 group-hover:text-[#EF9622]"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute -top-2 -right-2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 group-hover:bg-[#EF9622]"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.2 + 0.5,
                      type: "spring",
                      stiffness: 200,
                    }}
                    viewport={{ once: true }}
                  >
                    {index + 1}
                  </motion.div>
                </div>
                <motion.h3
                  className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-[#EF9622]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  className="text-white/60 leading-relaxed transition-colors duration-300 group-hover:text-white/80"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                  viewport={{ once: true }}
                >
                  {step.description}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
