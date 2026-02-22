import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Business Administration (MBA)",
    school: "University of Edinburgh, United Kingdom",
    period: "2025 – 2026",
    note: "LPDP Awardee (Indonesia Endowment Fund for Education)",
  },
  {
    degree: "Bachelor of Economics",
    school: "Jenderal Soedirman University, Indonesia",
    period: "Aug 2010 – Feb 2014",
    note: "Major in Economic Studies and Development",
  },
];

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

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="p-8 rounded-2xl bg-card border border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-accent/10 text-accent w-fit">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-accent text-sm font-medium mb-1">{item.period}</p>
                  <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
                  <p className="text-muted-foreground">{item.school}</p>
                  <p className="text-muted-foreground text-sm mt-2">{item.note}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
