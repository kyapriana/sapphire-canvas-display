import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skills = [
  { name: "Networking & Partnership", level: 95 },
  { name: "Marketing Strategy", level: 93 },
  { name: "Sales & Distribution Development", level: 85 },
  { name: "Negotiation", level: 90 },
  { name: "Project Management", level: 90 },
  { name: "B2B & B2C Strategy", level: 90 },
  { name: "Brand Campaigns (ATL & BTL)", level: 90 },
  { name: "Data Analysis & Insights", level: 80 },
  { name: "Account Management", level: 85 },
  { name: "Managing AI", level: 85 }
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-widest uppercase text-sm mb-4">Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold">Core Competencies</h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * i }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "hsl(38 60% 65%)" }}
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.2 + 0.08 * i, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
