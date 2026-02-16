import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "+", label: "Years in Management" },
  { value: 77, suffix: "%", label: "Sales Increase Achieved" },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-accent tracking-widest uppercase text-sm mb-4">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Crafting Growth Through Strategy
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A results-driven marketing professional with over a decade of experience across Indonesia's leading FMCG and technology companies. I specialize in transforming brand strategies into measurable business outcomes — from launching nationwide campaigns to building high-performing teams that consistently exceed targets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="text-center p-8 rounded-2xl bg-card border border-border/50"
            >
              <StatNumber end={stat.value} suffix={stat.suffix} start={isVisible} />
              <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

function StatNumber({ end, suffix, start }: { end: number; suffix: string; start: boolean }) {
  const count = useCountUp(end, 1800, start);
  return (
    <p className="text-5xl font-bold text-gradient font-sans">
      {count}{suffix}
    </p>
  );
}

export default About;
