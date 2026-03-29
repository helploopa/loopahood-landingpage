import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeaturedMakers } from "@/components/sections/FeaturedMakers";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyLoopa } from "@/components/sections/WhyLoopa";
import { Waitlist } from "@/components/sections/Waitlist";
import type { Product } from "@/types";

const products: Product[] = [
  {
    name: "Hand-Thrown Ceramic Bowl",
    maker: "Sarah Chen Pottery",
    price: "$48",
    image:
      "https://images.unsplash.com/photo-1610701596295-4dc5d6289214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwaGFuZG1hZGUlMjBib3dsfGVufDF8fHx8MTc3NDcyNzMwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Pottery",
  },
  {
    name: "Handwoven Wool Sweater",
    maker: "Meadow Knits",
    price: "$125",
    image:
      "https://images.unsplash.com/photo-1758981400268-1181291b9503?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0dGVkJTIwc3dlYXRlciUyMHdvb2wlMjBoYW5kbWFkZXxlbnwxfHx8fDE3NzQ3MjczMDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Textiles",
  },
  {
    name: "Natural Soy Candle Set",
    maker: "Golden Hour Candles",
    price: "$36",
    image:
      "https://images.unsplash.com/photo-1674812709782-3e44e27676aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMGNhbmRsZXMlMjBuYXR1cmFsfGVufDF8fHx8MTc3NDcyNzMwOHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Home",
  },
  {
    name: "Artisan Jewelry Collection",
    maker: "Luna Metalworks",
    price: "$82",
    image:
      "https://images.unsplash.com/photo-1766560359180-96dd82ce5cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwamV3ZWxyeSUyMGhhbmRjcmFmdGVkfGVufDF8fHx8MTc3NDcyNzMwOHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Jewelry",
  },
  {
    name: "Homemade Soaps",
    maker: "Brenda Soaps",
    price: "$9",
    image: "/images/products/brenda-soaps.png",
    category: "Soaps",
  },
  {
    name: "Curry Cubes",
    maker: "The Curry cubes",
    price: "$5",
    image: "/images/products/curry-cubes.png",
    category: "Food",
    whiteBg: true,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0b0b0e" }}>
      <Header />
      <Hero />
      <FeaturedMakers products={products} />
      <HowItWorks />
      <WhyLoopa />
      <Waitlist />
      <Footer />
    </div>
  );
}
