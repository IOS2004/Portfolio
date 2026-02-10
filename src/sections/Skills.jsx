import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { skills } from "../data/portfolioData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary-950/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Tech"
          subtitle="Technologies I work with on a daily basis"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={itemVariants}
              className="card p-6"
            >
              <h3 className="text-base font-semibold text-white mb-5 flex items-center gap-2.5 uppercase tracking-wide">
                <div className="w-2 h-5 rounded-full bg-primary-500" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium rounded-xl bg-dark-950 border border-dark-800 text-dark-300 hover:text-primary-300 hover:border-primary-500/40 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
