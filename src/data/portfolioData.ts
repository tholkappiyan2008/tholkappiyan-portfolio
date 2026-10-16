export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  keyDetails: string[];
  implementedFeatures: string[];
  plannedFeatures: string[];
  githubUrl: string;
  liveUrl?: string; // only if real deployed url exists
  category: "AI & Full-Stack" | "Distributed Systems";
  architectureType: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level?: string; tag?: string }[];
}

export interface EducationInfo {
  institution: string;
  degree: string;
  specialization: string;
  location: string;
  expectedGraduation: string;
  academicScore: string;
  scoreType: string;
  highlights: string[];
}

export const PERSONAL_INFO = {
  name: "Tholkappiyan S.",
  role: "B.Tech Computer Science and Engineering (Data Science) Student",
  identityLabel: "COMPUTER SCIENCE STUDENT · AI & SOFTWARE ENGINEERING",
  headline: "Building intelligent systems that solve real problems.",
  supportingParagraph:
    "I'm Tholkappiyan, a Computer Science and Data Science student exploring AI-powered applications, full-stack engineering, and intelligent automation. I enjoy turning complex ideas into practical software systems.",
  email: "sambathjayanthi3@gmail.com",
  phone: "+91 9363225699",
  location: "Tamil Nadu, India",
  github: "https://github.com/tholkappiyan-s",
  linkedin: "https://linkedin.com/in/tholkappiyan-s",
  resumePath: "/Tholkappiyan_S_Resume.pdf",
  languages: ["English", "Tamil"],
  interests: [
    "Artificial Intelligence and Machine Learning",
    "AI Agents and Intelligent Automation",
    "Full-Stack Web Development",
    "Data Science and Analytics",
    "Software Engineering",
  ],
};

export const EDUCATION_DATA: EducationInfo = {
  institution: "Takshashila University",
  degree: "Bachelor of Technology (B.Tech)",
  specialization: "Computer Science and Engineering (Data Science)",
  location: "Tamil Nadu, India",
  expectedGraduation: "2029",
  academicScore: "9.39 / 10.0",
  scoreType: "SGPA (Semester Grade Point Average)",
  highlights: [
    "Rigorous focus on Data Science, Data Structures, and Applied Algorithms",
    "Active in technical problem solving and applied software engineering",
    "Hands-on project development integrating AI models with full-stack platforms",
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages for systems, algorithms, and web applications",
    skills: [
      { name: "Python", tag: "AI & Analytics" },
      { name: "C++", tag: "Core & Algorithms" },
      { name: "JavaScript", tag: "Web & Runtime" },
      { name: "SQL", tag: "Relational Queries" },
      { name: "HTML5", tag: "Markup" },
      { name: "CSS3", tag: "Styling" },
    ],
  },
  {
    title: "Frontend Development",
    description: "Component architecture and responsive user interfaces",
    skills: [
      { name: "React.js", tag: "UI Components" },
      { name: "Next.js", tag: "App Router / SSR" },
      { name: "Tailwind CSS", tag: "Modern Utility CSS" },
    ],
  },
  {
    title: "Backend & APIs",
    description: "Service logic, interface protocols, and backend integration",
    skills: [
      { name: "REST APIs", tag: "API Design" },
      { name: "Application Integration", tag: "Pipelines" },
      { name: "Microservices Logic", tag: "Architecture" },
    ],
  },
  {
    title: "Databases",
    description: "Data modeling, schema design, and cloud persistence",
    skills: [
      { name: "PostgreSQL", tag: "Relational DB" },
      { name: "Supabase", tag: "Auth & Realtime DB" },
    ],
  },
  {
    title: "AI & Automation",
    description: "LLMs, specialized agentic workflows, and automated engines",
    skills: [
      { name: "Large Language Models (LLMs)", tag: "Prompting & APIs" },
      { name: "AI Agents", tag: "Autonomous Tasking" },
      { name: "Agentic Workflows", tag: "Multi-Agent Coordination" },
      { name: "n8n", tag: "Workflow Automation" },
    ],
  },
  {
    title: "Tools & Platforms",
    description: "Version control, developer environment, and collaboration",
    skills: [
      { name: "Git", tag: "VCS" },
      { name: "GitHub", tag: "Code Hosting" },
      { name: "VS Code", tag: "IDE" },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "ai-business-os",
    title: "AI Business OS",
    subtitle: "AI-Powered Business Management Platform",
    description:
      "A centralized business management platform designed to bring core business operations and AI-powered workflows into one ecosystem.",
    technologies: [
      "Next.js",
      "React.js",
      "Supabase",
      "PostgreSQL",
      "AI/LLM APIs",
      "n8n",
      "Tailwind CSS",
    ],
    category: "AI & Full-Stack",
    architectureType: "Modular Micro-App + Autonomous Agent Orchestration",
    keyDetails: [
      "Modular CRM capabilities for client tracking and lead pipeline visibility",
      "Financial ledgering modules for transaction recording and expense analytics",
      "Inventory management module monitoring stock levels and reorder alerts",
      "Specialized AI Agents: CEO Agent (task delegation), Finance Agent (cash flow & metrics), and Sales/Ops Agents",
      "n8n workflow pipelines triggering automated notifications and task dispatching",
      "Full database integration with PostgreSQL schemas hosted on Supabase",
    ],
    implementedFeatures: [
      "Core unified dashboard interface built with Next.js & Tailwind CSS",
      "Relational schema design on PostgreSQL (Supabase) for products, clients, and transactions",
      "AI Chat contextual assistant powered by LLM API integration",
      "Automated webhook pipelines configured using n8n for task triggers",
    ],
    plannedFeatures: [
      "Multi-agent memory persistence and autonomous background scheduling",
      "Voice AI assistant integration for hands-free executive queries",
      "Multi-tenant business support for managing multiple organizations",
    ],
    githubUrl: "https://github.com/tholkappiyan-s/AI",
  },
  {
    id: "newstrack",
    title: "NewsTrack",
    subtitle: "Newspaper Supply Chain & Distribution Tracking System",
    description:
      "An end-to-end management platform for newspaper production, inventory dispatch, and delivery tracking.",
    technologies: [
      "FastAPI",
      "React",
      "JavaScript",
      "PostgreSQL",
      "WebSockets",
      "REST APIs",
    ],
    category: "Distributed Systems",
    architectureType: "Event-Driven Backend + Realtime WebSockets",
    keyDetails: [
      "Newspaper production logging and inventory dispatch batch management",
      "Real-time route progress monitoring and distribution milestone logging",
      "Robust RESTful endpoints built with FastAPI for reliable data ingestion",
      "WebSocket integration enabling live status broadcasts to distribution operators",
      "Centralized operational dashboards providing complete supply chain visibility",
      "Audit trail and dispatch logs preventing loss or delayed drop-offs",
    ],
    implementedFeatures: [
      "FastAPI REST backend with route and inventory dispatch models",
      "Centralized operational web dashboard for route and depot monitoring",
      "WebSocket communication pipeline for live delivery status updates",
      "PostgreSQL data storage for historical delivery logs and agent assignments",
    ],
    plannedFeatures: [
      "GPS geo-fencing for automated drop-off verification",
      "Offline-first mobile client synchronization for delivery agents in low-connectivity areas",
    ],
    githubUrl: "https://github.com/charansridev/NewsTrack.git",
  },
];

export const ACHIEVEMENTS_DATA = [
  {
    title: "Academic Excellence",
    badge: "9.39 SGPA",
    description:
      "Maintained an outstanding semester score of 9.39 / 10.0 in B.Tech Computer Science and Engineering (Data Science) at Takshashila University.",
    category: "Academic",
  },
  {
    title: "Smart India Hackathon (SIH) 2026",
    badge: "Active Participant",
    description:
      "Actively engaged in SIH 2026 collaborative hackathon initiatives, applying algorithmic thinking and rapid prototyping to real-world software challenges.",
    category: "Hackathon",
  },
  {
    title: "AI Business OS Architecture",
    badge: "Core Contributor",
    description:
      "Architected modular structures and agentic workflow integration for an end-to-end enterprise platform combining LLMs, databases, and n8n pipelines.",
    category: "Engineering",
  },
];
