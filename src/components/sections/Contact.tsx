import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, MapPin, Linkedin, Download, Phone } from "lucide-react";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-widest uppercase text-sm mb-4">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold">Let's Connect</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md mx-auto space-y-6 text-center"
        >
          <a
            href="mailto:kikyapriana.saragi@gmail.com"
            className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-accent/30 transition-colors group"
          >
            <Mail className="w-5 h-5 text-accent" />
            <span className="text-foreground group-hover:text-accent transition-colors">kikyapriana.saragi@gmail.com</span>
          </a>

          <a
            href="tel:+6282130007179"
            className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-accent/30 transition-colors group"
          >
            <Phone className="w-5 h-5 text-accent" />
            <span className="text-foreground group-hover:text-accent transition-colors">+62 821-3000-7179</span>
          </a>

          <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card border border-border/50">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="text-foreground">Jakarta, Indonesia</span>
          </div>

          <div className="flex gap-4 justify-center pt-4">
            <a
              href="https://linkedin.com/in/kikyapriana"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border/50 hover:border-accent/30 hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="/Resume_Kiky_2025.pdf"
              target="_blank"
              className="p-3 rounded-full bg-card border border-border/50 hover:border-accent/30 hover:text-accent transition-colors"
            >
              <Download className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-border/50 mt-24 pt-8">
        <p className="text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Kiky Apriana Saragi. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
