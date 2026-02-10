import { Heart } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="text-lg font-bold tracking-tight">
            <span className="gradient-text">&lt;</span>
            <span className="text-white">{personalInfo.firstName}</span>
            <span className="gradient-text">/&gt;</span>
          </a>

          {/* Copyright */}
          <p className="text-dark-500 text-sm flex items-center gap-1">
            &copy; {currentYear} {personalInfo.name}. Built with
            <Heart size={14} className="text-primary-500 fill-primary-500" />
            and React
          </p>
        </div>
      </div>
    </footer>
  );
}
