import { Navbar, Hero, ComingSoon, Footer } from "./components/LandingPage";

function App() {
  return (
    <div className="relative min-h-screen bg-[#FDF5E6] selection:bg-orange-200 selection:text-orange-900">
      <Navbar />
      <main className="relative">
        <Hero />
        <ComingSoon />
      </main>
      <Footer />
    </div>
  );
}

export default App;
