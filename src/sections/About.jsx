import { motion } from "framer-motion";
import { MapPin, Mail, Download, Code2 } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { personalInfo } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me a little better"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="card p-8 sm:p-10"
        >
          {/* Heading */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-400">
              <Code2 size={22} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              A passionate developer who loves
              <span className="gradient-text"> building things</span>
            </h3>
          </div>

          <p className="text-dark-400 text-lg leading-relaxed mb-8">
            {personalInfo.bio}
          </p>

          {/* Info cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-dark-950 border border-dark-800 hover:border-primary-500/20 transition-colors">
              <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-400">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-dark-500 text-xs uppercase tracking-wider">Location</p>
                <p className="text-white font-medium text-sm">
                  {personalInfo.location}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-dark-950 border border-dark-800 hover:border-primary-500/20 transition-colors">
              <div className="p-2.5 rounded-xl bg-primary-500/10 text-primary-400">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-dark-500 text-xs uppercase tracking-wider">Email</p>
                <p className="text-white font-medium text-sm">
                  {personalInfo.email}
                </p>
              </div>
            </div>
          </div>

          {/* Download Resume */}
          {personalInfo.resumeLink && personalInfo.resumeLink !== "#" && (
            <a
              href={personalInfo.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/25"
            >
              <Download size={18} />
              Download Resume
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
