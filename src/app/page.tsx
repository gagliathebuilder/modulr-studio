"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Background shimmer lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="animate-pulse bg-gradient-to-r from-purple-800 via-transparent to-purple-800 opacity-10 h-full w-full" />
      </div>

      {/* Hero Section with Placeholder Illustration */}
      <section className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between text-center md:text-left py-24 px-6 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
        <div className="md:w-1/2">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-4">
            Modulr Studio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-xl">
            Smarter podcast monetization. Minimal setup. Maximum reach.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition">
            Join the Studio
          </motion.button>
        </div>
        <div className="md:w-1/2 mb-12 md:mb-0 flex justify-center">
          <Image
            src="/Modulrstart.png"
            alt="Modulr Studio visual"
            width={480}
            height={480}
            className="rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* What We Do */}
      <motion.section 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.6 }}
        className="py-20 px-6 text-center relative z-10">
        <h2 className="text-3xl font-semibold mb-6">Built for Creators</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          We analyze your content, match it with high-performing ads, and dynamically insert them. More control, more earnings, less clutter.
        </p>
      </motion.section>

      {/* Who It's For */}
      <motion.section 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.6, delay: 0.2 }}
        className="py-16 px-6 max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-2xl font-semibold mb-8">Who It&rsquo;s For</h2>
        <p className="text-gray-400 mb-6">
          Whether you're a solo podcaster or a growing network, Modulr Studio streamlines audio ad monetization.
        </p>
        <p className="text-gray-400">
          Advertisers tap into contextual content. Podcasters stay focused on their voice.
        </p>
      </motion.section>

      {/* How It Works */}
      <motion.section 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-[#0c0f1c] py-20 px-6 text-center relative z-10">
        <h2 className="text-2xl font-semibold mb-10">How It Works</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto text-gray-300">
          <div>
            <h4 className="font-bold text-lg mb-2">1. Submit Your Show</h4>
            <p>Send us your feed. We do the rest.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">2. AI-Driven Matching</h4>
            <p>Contextual ad targeting, optimized per episode.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">3. Real-Time Insertion</h4>
            <p>Ads placed seamlessly — no manual cuts.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">4. You Get Paid</h4>
            <p>
              Get paid, stack chips. 
              Transparent reporting. Flexible payout terms.
            </p>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.6, delay: 0.6 }}
        className="py-24 px-6 text-center relative z-10">
        <h2 className="text-2xl font-semibold mb-4">Ready to monetize with less friction?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Join the creators moving their monetization forward with AI.
        </p>
        <button className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition">
          Submit Your Podcast
        </button>
      </motion.section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-6 px-4 text-center text-gray-600 text-sm relative z-10">
        © {new Date().getFullYear()} Modulr Studio — All rights reserved.
      </footer>
    </main>
  );
}