import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { personalInfo, socialLinks } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open mailto link with form data
    const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name} (${formData.email})`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary-950/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or just want to chat? Feel free to reach out!"
        />

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="card p-6 space-y-6">
              <h3 className="text-xl font-bold text-white">
                Let's work together
              </h3>
              <p className="text-dark-400 text-sm leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of something amazing.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-dark-800/50 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-primary-500/10 text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-dark-500 text-xs">Email</p>
                    <p className="text-white text-sm font-medium">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                {personalInfo.phone && (
                  <div className="flex items-center gap-4 p-3 rounded-xl">
                    <div className="p-2.5 rounded-lg bg-primary-500/10 text-primary-400">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-dark-500 text-xs">Phone</p>
                      <p className="text-white text-sm font-medium">
                        {personalInfo.phone}
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-4 p-3 rounded-xl">
                  <div className="p-2.5 rounded-lg bg-primary-500/10 text-primary-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-dark-500 text-xs">Location</p>
                    <p className="text-white text-sm font-medium">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links card */}
            <div className="card p-6">
              <h4 className="text-sm font-semibold text-dark-400 uppercase tracking-wider mb-4">
                Find me on
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.github && (
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-900 border border-dark-800 text-dark-400 hover:text-white hover:border-primary-500/30 transition-all duration-300 text-sm"
                  >
                    <Github size={16} />
                    GitHub
                    <ArrowUpRight size={12} />
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-900 border border-dark-800 text-dark-400 hover:text-white hover:border-primary-500/30 transition-all duration-300 text-sm"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                    <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="card p-8 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-dark-700 text-white placeholder-dark-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-dark-700 text-white placeholder-dark-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-dark-700 text-white placeholder-dark-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/25"
              >
                Send Message
                <Send
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
