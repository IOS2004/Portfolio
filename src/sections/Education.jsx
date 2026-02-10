import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Education"
          subtitle="My academic background"
        />

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="flex-shrink-0 p-3 rounded-xl bg-primary-500/10 text-primary-400">
                  <GraduationCap size={28} />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-primary-400/80 font-medium mb-3">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-dark-400">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} />
                      {edu.location}
                    </span>
                    <span>{edu.duration}</span>
                    {edu.cgpa && (
                      <span className="inline-flex items-center gap-1.5">
                        <Award size={14} />
                        CGPA: {edu.cgpa}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
