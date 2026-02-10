import { motion } from "framer-motion";
import { MapPin, Mail, Calendar, Download } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { personalInfo } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me a little better"
        />

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Profile Image / Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border border-primary-500/20 shadow-xl shadow-primary-900/20">
                {personalInfo.profileImage ? (
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-primary-600/20 to-primary-900/40 flex items-center justify-center">
                    <span className="text-6xl sm:text-7xl font-bold gradient-text">
                      {personalInfo.firstName[0]}
                      {personalInfo.lastName[0]}
                    </span>
                  </div>
                )}
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-primary-500/30 rounded-tr-2xl" />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-primary-500/30 rounded-bl-2xl" />
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              A passionate developer who loves
              <span className="gradient-text"> building things</span>
            </h3>

            <p className="text-dark-400 text-lg leading-relaxed mb-8">
              {personalInfo.bio}
            </p>

            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-dark-900 border border-dark-800 hover:border-primary-500/20 transition-colors">
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
              <div className="flex items-center gap-3 p-4 rounded-xl bg-dark-900 border border-dark-800 hover:border-primary-500/20 transition-colors">
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
      </div>
    </section>
  );
}
