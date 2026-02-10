// ============================================================
// PORTFOLIO DATA - Edit this file to update your portfolio
// ============================================================

export const personalInfo = {
  name: "Om Sahu",
  firstName: "Om",
  lastName: "Sahu",
  title: "Full-Stack Developer",
  tagline: "Building modern web experiences with clean code",
  bio: "I'm a Computer Science student at IIIT Gwalior passionate about building scalable web applications. I love turning complex problems into simple, beautiful, and intuitive solutions. Currently exploring the MERN stack and beyond.",
  email: "spasusguy@gmail.com",
  phone: "+91 8839216553",
  location: "Madhya Pradesh, India",
  resumeLink:
    "https://drive.google.com/file/d/1JoFDX8tMALDoVO_K839Jf87Z1hErT88O/view?usp=drive_link", // Add your resume download link here
  profileImage: null, // Add path to your profile image, e.g., "/profile.jpg"
};

export const socialLinks = {
  github: "https://github.com/IOS2004", // Add your GitHub URL
  linkedin: "https://www.linkedin.com/in/om-sahu-53469b293", // Add your LinkedIn URL
  leetcode: "https://leetcode.com/u/spasusguy/", // Add your LeetCode URL
  twitter: "", // Add your Twitter/X URL (leave empty to hide)
  codeforces: "https://codeforces.com/profile/om.nom", // Add your Codeforces URL (leave empty to hide)
};

export const skills = [
  {
    category: "Languages",
    items: ["C", "C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "React Native", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

export const projects = [
  {
    title: "Teamily",
    subtitle: "Team Collaboration Platform",
    description:
      "A modern collaboration platform enabling teams to manage workspaces, projects, and tasks efficiently. Features authentication with Google OAuth, role-based access control, priority/deadline management, analytics dashboards, and a responsive UI with dark/light themes.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "#", // Add live demo URL
    githubUrl: "https://github.com/IOS2004/Teamily", // Add GitHub repo URL
    image: null, // Add screenshot path, e.g., "/projects/teamily.png"
    featured: true,
  },
  {
    title: "Twitter Clone",
    subtitle: "Full-Stack Social Media Application",
    description:
      "A comprehensive Twitter clone featuring real-time social media functionality using the MERN stack. Includes JWT authentication, tweet creation with real-time updates, user profiles with image uploads, likes, comments, and WebSocket-powered real-time notifications.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "WebSocket"],
    liveUrl: "#", // Add live demo URL
    githubUrl: "https://github.com/IOS2004/Twitter-Clone", // Add GitHub repo URL
    image: null, // Add screenshot path
    featured: true,
  },
  {
    title: "FileX",
    subtitle: "Full-Stack File Management System",
    description:
      "A comprehensive file management platform with a RESTful backend and responsive web frontend. Features secure file upload/download, authentication, metadata management, and an intuitive UI for organizing and sharing files with cross-browser compatibility.",
    techStack: ["JavaScript", "Node.js", "Express.js", "HTML/CSS"],
    liveUrl: "#", // Add live demo URL
    githubUrl: "https://github.com/IOS2004/FileX_API", // Add GitHub repo URL
    image: null, // Add screenshot path
    featured: true,
  },
];

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Indian Institute of Information Technology, Gwalior",
    duration: "2023 – 2027",
    location: "Madhya Pradesh, India",
    cgpa: "9.05",
  },
];

export const achievements = [
  {
    title: "Knight on LeetCode",
    description:
      "Achieved Knight badge on LeetCode competitive programming platform.",
    icon: "trophy",
  },
  {
    title: "Pupil on CodeForces",
    description:
      "Reached Pupil rating on CodeForces competitive programming platform.",
    icon: "code",
  },
];

export const experience = [
  {
    role: "Volunteer",
    organization: "ABV-IIITM Gwalior Annual Fest",
    duration: "",
    description:
      "Assisted in organizing and managing cultural events. Coordinated with teams to ensure smooth execution of activities and participant engagement.",
  },
];

// Navigation links - controls which sections appear in the navbar
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
