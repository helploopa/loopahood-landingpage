import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { ShoppingBag, Store, Heart, Instagram, Mail, Upload } from "lucide-react";
import logo from "../../assets/99d812d689a683464fc5371b1874904b6c4bdb07.png";

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
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple email regex for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://n8n.srv996951.hstgr.cloud/webhook/ad7630a4-6648-433a-ae74-293aa9f8b267", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success("You're on the list! We'll reach out soon.");
        setEmail("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6 bg-white rounded-3xl shadow-xl shadow-orange-200/30 border border-orange-100 max-w-xl mx-auto">
              <div className="flex flex-col gap-2 text-left">
                <label className="text-sm font-semibold text-orange-900 ml-4">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  className="w-full px-6 py-4 bg-orange-50/50 border border-orange-100 focus:border-[#E67E22] focus:ring-2 focus:ring-orange-200 focus:outline-none text-orange-900 text-lg rounded-2xl transition-all"
                />
              </div>

              <button
                disabled={isSubmitting}
                className="w-full py-5 bg-[#E67E22] text-white rounded-2xl text-lg font-bold hover:bg-[#D35400] transition-all shadow-lg active:scale-95 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Joining..." : "Join Waitlist"}
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


export const SurveySection = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [otherInputs, setOtherInputs] = useState<Record<number, string>>({});
  const [email, setEmail] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Biggest challenge finding new local customers?",
      options: [
        "Hard to reach only my neighborhood",
        "Lost in big global platforms",
        "No easy way to offer free samples",
        "Hard to turn buyers into repeats",
        "Other"
      ]
    },
    {
      id: 2,
      question: "Biggest frustration sharing your maker story?",
      options: [
        "Social media reaches wrong people",
        "Word-of-mouth too slow/inconsistent",
        "Global sites hide my personal story",
        "No dedicated place for story + products",
        "No major issue"
      ]
    },
    {
      id: 3,
      question: "Most overwhelming part of managing your business?",
      options: [
        "Using too many separate tools/apps",
        "Tracking limited inventory",
        "Marketing locally without big costs",
        "Handling payments & transactions",
        "None / Other"
      ]
    },
    {
      id: 4,
      question: "What would help you collaborate with nearby makers?",
      options: [
        "Easy way to find local makers",
        "Tools to create joint bundles",
        "Features for shared visibility/samples",
        "No interest in collaborating",
        "Other"
      ]
    },
    {
      id: 5,
      question: "How important is buyer feedback for improving your products?",
      options: [
        "Very – want it tied to my listings",
        "Somewhat – current feedback is messy",
        "Not very – rely on repeats/chats",
        "Hard to get consistent feedback",
        "Not applicable"
      ]
    }
  ];

  const handleOptionChange = (questionId: number, option: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }));
    if (option !== "Other" && option !== "None / Other") {
      setOtherInputs(prev => {
        const newInputs = { ...prev };
        delete newInputs[questionId];
        return newInputs;
      });
    }
  };

  const isFormValid = (Object.keys(answers).length > 0 || email.length > 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);

    // Construct payload
    const payload: Record<string, string> = { email, zipcode };

    questions.forEach(q => {
      const selectedOption = answers[q.id];
      if (selectedOption === "Other" || selectedOption === "None / Other") {
        payload[`q${q.id}`] = `Other: ${otherInputs[q.id] || ""}`;
      } else {
        payload[`q${q.id}`] = selectedOption || "";
      }
    });

    try {
      // Send POST request
      const response = await fetch('https://n8n.srv996951.hstgr.cloud/webhook/767029a7-5f19-4f79-844b-c71ce9948056', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast.success("Thanks for your feedback! We'll be in touch.");
        setAnswers({});
        setOtherInputs({});
        setEmail("");
        setZipcode("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-24 bg-[#FFFaf0] relative border-b border-orange-100">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-orange-900 mb-4"
          >
            Join the Waitlist
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-orange-800/70"
          >
            Help us build Loopa for your neighborhood by answering a few quick questions. <br className="hidden md:block" />
            Get early access & results summary.
          </motion.p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-12"
        >
          {questions.map((q) => (
            <div key={q.id} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-orange-100/50">
              <h3 className="text-xl font-semibold text-orange-900 mb-6">{q.question}</h3>
              <div className="space-y-3">
                {q.options.map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer group p-2 hover:bg-orange-50 rounded-lg transition-colors">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${answers[q.id] === option ? 'border-orange-500' : 'border-orange-200 group-hover:border-orange-300'}`}>
                      {answers[q.id] === option && <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />}
                    </div>
                    <input
                      type="radio"
                      name={`q-${q.id}`}
                      value={option}
                      checked={answers[q.id] === option}
                      onChange={() => handleOptionChange(q.id, option)}
                      className="hidden"
                    />
                    <span className="text-stone-700 font-medium">{option}</span>
                  </label>
                ))}

                {(answers[q.id] === "Other" || answers[q.id] === "None / Other") && (
                  <div className="pl-8 mt-2">
                    <input
                      type="text"
                      placeholder="Please specify..."
                      value={otherInputs[q.id] || ""}
                      onChange={(e) => setOtherInputs(prev => ({ ...prev, [q.id]: e.target.value }))}
                      className="w-full text-sm px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 bg-orange-50/30"
                      autoFocus
                    />
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-orange-900 ml-1">Your Email <span className="text-orange-900/40 font-normal">(required for waitlist)</span></label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="For early access & summary"
                  className="w-full px-5 py-3 bg-white border border-orange-200 rounded-xl focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-orange-900"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-orange-900 ml-1">Zipcode <span className="text-orange-900/40 font-normal">(optional)</span></label>
                <input
                  type="text"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                  placeholder="e.g. 94103"
                  className="w-full px-5 py-3 bg-white border border-orange-200 rounded-xl focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 text-orange-900"
                />
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              disabled={!isFormValid || isSubmitting}
              className="px-10 py-5 bg-[#E67E22] text-white rounded-full text-xl font-bold hover:bg-[#D35400] transition-all transform hover:scale-105 shadow-xl active:scale-95 disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? "Joining..." : "Join Waitlist & Send Answers →"}
            </button>
            <p className="mt-4 text-sm text-orange-900/40">
              We respect your privacy. No spam, ever.
            </p>
          </div>
        </motion.form>
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
