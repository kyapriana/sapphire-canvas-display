import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Briefcase, ChevronDown } from "lucide-react";

const timeline = [
  {
    year: "Oct 2022 – Present",
    role: "Marketing Manager",
    company: "Grab Indonesia · Jakarta",
    details:
      "Responsible for Marketing Partnership, Grab Marketing Services (GMS), and GrabMart. Leads cross-industry account collaboration with B2B partners and drives FMCG growth through strategic campaigns and partner-led activations.",
  },
  {
    year: "May 2021 – Jun 2022",
    role: "Brand Manager, Physical Availability",
    company: "Frisian Flag Indonesia · Jakarta",
    details:
      "Led in-store and out-store execution strategy to strengthen market share value. Delivered significant growth through promotion strategy, category acceleration, and distributor productivity improvements.",
  },
  {
    year: "Sep 2019 – May 2021",
    role: "Category Development Manager",
    company: "Sayap Mas Utama (Wings Group) · Jakarta",
    details:
      "Developed category management strategies to improve sales and customer objective delivery. Established category performance plans across sales, market share, distribution, and execution quality.",
  },
  {
    year: "Jul 2018 – Sep 2019",
    role: "Key Account Executive",
    company: "SC Johnson · Jakarta",
    details:
      "Drove National Key Account (Hypermart) growth by planning and evaluating sales promotions. Strengthened relationships with key accounts while managing delivery support and account claims.",
  },
  {
    year: "Oct 2016 – Jul 2018",
    role: "Regional Account Executive",
    company: "SC Johnson · Kalimantan",
    details:
      "Developed and achieved modern trade channel sales growth. Planned and executed national sales programs with full ownership of field execution and promotion budget management.",
  },
  {
    year: "Apr 2014 – Jan 2016",
    role: "Marketing Promotion Coordinator",
    company: "Nutrifood Indonesia · Kalimantan",
    details:
      "Planned and evaluated promotional events to improve brand awareness and sales. Built cross-team event collaborations and managed sales team performance during program rollouts.",
  },
];

const Timeline = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="career" className="py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-widest uppercase text-sm mb-4">Career Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold">Professional Experience</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className={`relative mb-8 md:w-[calc(50%-2rem)] ${
                i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8 ml-12 md:ml-auto"
              } ${i % 2 === 0 ? "ml-12" : ""}`}
            >
              <div
                className={`absolute top-4 w-3 h-3 rounded-full bg-accent ${
                  i % 2 === 0
                    ? "left-[-1.85rem] md:right-[-1.85rem] md:left-auto"
                    : "left-[-1.85rem]"
                }`}
              />

              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full text-left p-6 rounded-xl bg-card border border-border/50 hover:border-accent/30 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-1">
                  <Briefcase className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-accent text-sm font-medium">{item.year}</span>
                  <ChevronDown
                    className={`w-4 h-4 ml-auto text-muted-foreground transition-transform ${
                      expanded === i ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                <p className="text-muted-foreground text-sm">{item.company}</p>

                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground text-sm mt-4 leading-relaxed border-t border-border/50 pt-4">
                        {item.details}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
