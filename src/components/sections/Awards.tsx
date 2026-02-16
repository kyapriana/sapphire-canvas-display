import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Trophy, Medal } from "lucide-react";

const awards = [
  {
    icon: Trophy,
    title: "Grab Way Award",
    org: "Grab",
    year: "2024",
    desc: "Recognized for exceptional leadership and embodying Grab's core values.",
  },
  {
    icon: Award,
    title: "MMA Smarties Gold",
    org: "MMA Global",
    year: "2023",
    desc: "Gold award for innovative mobile marketing campaign excellence.",
  },
  {
    icon: Medal,
    title: "Drum Award Bronze",
    org: "The Drum",
    year: "2023",
    desc: "Bronze recognition for outstanding marketing effectiveness.",
  },
  {
    icon: Trophy,
    title: "International Debate",
    org: "WSDC Representative",
    year: "University",
    desc: "Represented Indonesia in international debate competitions, honing persuasion and critical thinking.",
  },
];

const Awards = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="awards" className="py-24 lg:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-widest uppercase text-sm mb-4">Recognition</p>
          <h2 className="text-4xl md:text-5xl font-bold">Awards & Achievements</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-colors group cursor-default"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                  <award.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-accent text-xs font-medium tracking-wide uppercase">
                    {award.org} · {award.year}
                  </p>
                  <h3 className="text-lg font-semibold mt-1">{award.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{award.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
