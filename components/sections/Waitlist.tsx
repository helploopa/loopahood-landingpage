"use client";

import { motion } from "motion/react";
import { Mail, User, MapPin } from "lucide-react";
import { useState } from "react";
import { submitWaitlist } from "@/lib/api";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const validateEmail = (value: string) => {
    if (!value) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email address.";
    return "";
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) setEmailError(validateEmail(e.target.value));
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = validateEmail(email);
    if (error) {
      setEmailError(error);
      return;
    }
    setLoading(true);
    setApiError("");
    const result = await submitWaitlist({ name, email, zipcode });
    setLoading(false);
    if (!result.success) {
      setApiError(result.error ?? "Something went wrong. Please try again.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
      setName("");
      setZipcode("");
      setEmailError("");
    }, 3000);
  };

  return (
    <section
      id="waitlist"
      className="py-24 relative overflow-hidden border-t border-[#EF9622]"
      style={{ backgroundColor: "#0b0b0e" }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-[800px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: "#EF9622" }}>
            Join the Waitlist
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Be the first to know when Loopa launches in your neighbourhood. Get early access and
            exclusive maker discounts.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 px-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">You&apos;re on the list!</h3>
              <p className="text-white/60">We&apos;ll be in touch soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative group">
                <User
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 transition-colors duration-300 group-hover:text-white/60"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full pl-14 pr-6 py-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#EF9622]/50 focus:border-[#EF9622]/30 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                />
              </div>
              <div className="relative group">
                <Mail
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 transition-colors duration-300 group-hover:text-white/60"
                  size={20}
                />
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  className={`w-full pl-14 pr-6 py-5 bg-white/5 backdrop-blur-md border rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all duration-300 hover:bg-white/10 ${
                    emailError
                      ? "border-red-500/60 focus:ring-red-500/30"
                      : "border-white/10 focus:ring-[#EF9622]/50 focus:border-[#EF9622]/30 hover:border-white/20"
                  }`}
                />
                {emailError && (
                  <p className="mt-2 text-sm text-red-400 text-left px-2">{emailError}</p>
                )}
              </div>
              <div className="relative group">
                <MapPin
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 transition-colors duration-300 group-hover:text-white/60"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Your zip code"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                  required
                  className="w-full pl-14 pr-6 py-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#EF9622]/50 focus:border-[#EF9622]/30 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                />
              </div>
              {apiError && (
                <p className="text-sm text-red-400 text-center">{apiError}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-5 bg-white text-black rounded-2xl transition-all duration-300 hover:bg-[#EF9622] hover:text-white hover:shadow-lg hover:shadow-[#EF9622]/30 hover:scale-[1.02] font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? "Submitting..." : "Join the Waitlist"}
              </button>
              <p className="text-sm text-white/40 mt-4">
                By joining, you agree to receive updates from Loopa. Unsubscribe anytime.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
