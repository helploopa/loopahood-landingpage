"use client";

import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/types";

interface FeaturedMakersProps {
  products: Product[];
}

export function FeaturedMakers({ products }: FeaturedMakersProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section
      className="py-24 bg-gradient-to-b border-t border-[#EF9622]"
      style={{ backgroundImage: "linear-gradient(to bottom, #0b0b0e, transparent)" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: "#EF9622" }}>
            Trusted Partners
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
            Handcrafted with love by your neighbours
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#EF9622] text-white shadow-lg shadow-[#EF9622]/30"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div
                className={`relative overflow-hidden rounded-2xl aspect-square mb-4 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#EF9622]/20 ${
                  product.whiteBg ? "bg-white" : ""
                }`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={`transition-all duration-700 group-hover:scale-105 ${
                    product.whiteBg ? "object-contain p-6" : "object-cover"
                  }`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                  <Heart size={18} className="text-white" />
                </button>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-white text-xs">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white group-hover:text-[#EF9622] transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-sm text-white/60">{product.maker}</p>
                <div className="pt-2">
                  <span className="text-xl text-white">{product.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
