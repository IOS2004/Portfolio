import { motion } from "framer-motion";
import { Trophy, Code, Award } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { achievements } from "../data/portfolioData";

const iconMap = {
  trophy: Trophy,
  code: Code,
  award: Award,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary-950/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Achievements"
          subtitle="Milestones and recognitions along the way"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
        >
          {achievements.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Trophy;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-8 text-center"
              >
                <div className="inline-flex p-4 rounded-2xl bg-primary-500/10 text-primary-400 mb-5 ring-1 ring-primary-500/10">
                  <IconComponent size={28} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-dark-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
