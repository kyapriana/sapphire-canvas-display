import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Briefcase, ChevronDown } from "lucide-react";

const timeline = [
  {
    year: "2022 – Present",
    role: "Marketing Manager",
    company: "Grab",
    details: "Leading Grab's marketing initiatives in Indonesia, driving growth through data-driven campaigns and strategic partnerships. Awarded the Grab Way Award for exceptional leadership.",
  },
  {
    year: "2021 – 2022",
    role: "Brand Manager",
    company: "Frisian Flag Indonesia",
    details: "Led brand strategy for key product lines. Managed cross-functional teams and achieved significant market share growth. Won MMA Smarties Gold and Drum Award Bronze.",
  },
  {
    year: "2019 – 2021",
    role: "Trade Marketing Manager",
    company: "Wings Group",
    details: "Managed a portfolio of FMCG brands, overseeing product development and go-to-market strategy. Achieved 77% sales increase through strategic distribution development.",
  },
  {
    year: "2016 – 2019",
    role: "Key Account Manager",
    company: "SC Johnson",
    details: "Managed key retail accounts and drove distribution expansion. Built strong trade relationships contributing to double-digit revenue growth.",
  },
  {
    year: "2016",
    role: "Account Executive",
    company: "Trans Retail Indonesia",
    details: "Managed retail partnerships and sales strategies for one of Indonesia's largest retail chains. Developed negotiation skills and distribution networks.",
  },
  {
    year: "2014 – 2016",
    role: "Marketing Promotion Coordinator",
    company: "Nutrifood",
    details: "Began career in one of Indonesia's top health food companies, learning the fundamentals of FMCG marketing, sales, and distribution.",
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
          <h2 className="text-4xl md:text-5xl font-bold">A Decade of Impact</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
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
              {/* Dot */}
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
