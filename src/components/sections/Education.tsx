import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-24 lg:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-widest uppercase text-sm mb-4">Education</p>
          <h2 className="text-4xl md:text-5xl font-bold">Academic Background</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto text-center p-8 rounded-2xl bg-card border border-border/50"
        >
          <div className="p-4 rounded-full bg-accent/10 text-accent w-fit mx-auto mb-6">
            <GraduationCap className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Bachelor of Economics</h3>
          <p className="text-muted-foreground">Jenderal Soedirman University</p>
          <p className="text-accent text-sm mt-2">Purwokerto, Indonesia</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
