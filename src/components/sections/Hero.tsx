import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import headshot from "@/assets/headshot.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10"
          style={{ background: "hsl(38 60% 65%)" }}
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-96 h-96 rounded-full opacity-5"
          style={{ background: "hsl(40 30% 95%)" }}
          animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full opacity-5"
          style={{ background: "hsl(38 60% 65%)" }}
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="text-accent font-medium tracking-widest uppercase text-sm mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Marketing Leader · 10+ Years
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Kiky Rizky</span>
              <br />
              <span className="text-foreground">Andriyanto</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8 font-light">
              Marketing Manager at Grab — Driving growth through strategic marketing, brand management, and data-driven campaigns across Indonesia's top FMCG & tech companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Explore My Journey
              </a>
              <a
                href="/Resume_Kiky_2025.pdf"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-foreground/20 text-foreground font-medium hover:bg-foreground/5 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl">
                <img
                  src={headshot}
                  alt="Kiky Rizky Andriyanto"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -inset-4 rounded-full border border-accent/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
};

export default Hero;
