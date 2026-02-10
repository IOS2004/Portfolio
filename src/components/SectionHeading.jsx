import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
      className="text-center mb-14"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-dark-400 text-base sm:text-lg max-w-xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-5 flex items-center justify-center gap-2">
        <div className="h-px w-10 bg-linear-to-r from-transparent to-dark-600" />
        <div className="h-1.5 w-1.5 rounded-full bg-primary-500 shadow-sm shadow-primary-500" />
        <div className="h-px w-10 bg-linear-to-l from-transparent to-dark-600" />
      </div>
    </motion.div>
  );
}
