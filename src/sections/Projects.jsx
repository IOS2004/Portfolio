import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/portfolioData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary-950/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          subtitle="Some of the things I've built recently"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group card overflow-hidden hover:-translate-y-2 transition-transform duration-500 flex flex-col"
            >
              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-primary-400/70 text-sm font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                  {project.featured && (
                    <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary-600/90 text-white shrink-0 ml-3">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-dark-400 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary-500/10 text-primary-400 border border-primary-500/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-dark-800/50">
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-dark-400 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-dark-400 hover:text-primary-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {(!project.githubUrl || project.githubUrl === "#") &&
                    (!project.liveUrl || project.liveUrl === "#") && (
                      <span className="text-sm text-dark-600 italic">
                        Links coming soon
                      </span>
                    )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
