"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function WhyLoopa() {
  return (
    <section
      id="about"
      className="py-24 border-t border-[#EF9622]"
      style={{ backgroundColor: "#0b0b0e" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: "#EF9622" }}>
              Why Loopa
            </h2>
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                Loopa was born from a simple belief: the best communities are built on real
                connections, not just digital ones.
              </p>
              <p>
                We&apos;re reimagining neighbourhood commerce by bringing back the charm of
                hyperlocal shopping—where makers can share their crafts, and neighbours can
                discover unique goods just steps from home.
              </p>
              <p>
                Our platform connects local artisans, home businesses, and small-batch creators
                with people who value quality, sustainability, and the human touch.
              </p>
              <p>
                Whether you&apos;re a maker with a passion project or a buyer looking for something
                special, Loopa helps you find your people and connect neighbourhood for real.
              </p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white text-black rounded-full transition-all duration-300 hover:bg-[#EF9622] hover:text-white hover:shadow-lg hover:shadow-[#EF9622]/30 hover:scale-105">
                Join Our Community
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-full transition-all duration-300 hover:border-[#EF9622] hover:bg-[#EF9622]/10 hover:shadow-lg hover:shadow-[#EF9622]/20">
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-3xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#EF9622]/20">
              <Image
                src="/images/why-loopa.png"
                alt="Local maker with home business"
                width={700}
                height={500}
                className="w-full h-auto transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-all duration-500 group-hover:from-black/40" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10 transition-all duration-700 group-hover:bg-[#EF9622]/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
