export interface Project {
  id: string;
  name: string;
  category: string;
  organization?: string;
  role?: string;
  description: string;
  longDescription?: string;
  contributions?: string[];
  features?: string[];
  implementations?: string[];
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  highlightBadge?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
  logo: string;
  badge?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  gpa: string;
  period: string;
  location: string;
  logo: string;
  honors?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  badgeColor: string;
  iconType: 'redhat' | 'moratuwa';
  description: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    verified: boolean;
    tag?: string;
  }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "M.I. Uhail Ahamed",
    shortName: "Uhail Ahamed",
    initials: "UA",
    title: "Full Stack Developer | AI Engineer | Software Developer",
    location: "Indonesia",
    university: "Universitas Nusa Putra",
    degree: "Bachelor's Degree in Informatics Engineering",
    gpa: "3.92 / 4.00",
    email: "uhailahamed0703@gmail.com",
    github: "https://github.com/uhailahamed0703-wq",
    linkedin: "https://www.linkedin.com/in/uhailahamed?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    instagram: "https://www.instagram.com/uhail_ahamed_?igsh=NzJjcHBsYndkamhq&utm_source=qr",
    whatsappUrl: "https://wa.me/Uhail_Ahamed?s=p",
    whatsappNumber: "+6282211993344",
    whatsappMessage: "Hello Uhail, I reviewed your portfolio and would like to connect!",
    // Configurable availability/status indicator (false by default or user-configurable)
    isAvailableForHire: true,
    availabilityStatus: "Open for Selected High-Impact Opportunities",
    tagline: "Building intelligent digital experiences through software engineering, artificial intelligence, and modern web technologies.",
    heroGreeting: "Hi, I'm Uhail Ahamed.",
    heroTitle: "Full Stack Developer & AI Engineer.",
    bioQuotes: "Building technology. Exploring intelligence. Creating impact.",
  },

  voiceIntroduction: {
    title: "Voice-Over Introduction",
    subtitle: "Listen to a quick 30-second personal welcome from Uhail",
    sentences: [
      { text: "Hi, it's Uhail Ahamed.", time: 0 },
      { text: "I'm a Full Stack Developer and aspiring AI Engineer, passionate about building modern digital experiences and intelligent software solutions.", time: 3.2 },
      { text: "I work across frontend and backend technologies, explore artificial intelligence, and transform ideas into real-world applications.", time: 10.5 },
      { text: "From AI-powered educational platforms to full-stack web applications, I enjoy building technology that makes a difference.", time: 18.0 },
      { text: "Welcome to my portfolio. Let's explore what I've been building.", time: 25.5 },
    ],
    fullText: `Hi, it's Uhail Ahamed. I'm a Full Stack Developer and aspiring AI Engineer, passionate about building modern digital experiences and intelligent software solutions. I work across frontend and backend technologies, explore artificial intelligence, and transform ideas into real-world applications. From AI-powered educational platforms to full-stack web applications, I enjoy building technology that makes a difference. Welcome to my portfolio. Let's explore what I've been building.`,
  },

  aboutMe: {
    heading: "Beyond Code. Building Possibilities.",
    paragraphs: [
      "I'm an Informatics Engineering student at Universitas Nusa Putra with a strong interest in full-stack development, artificial intelligence, and software engineering.",
      "I enjoy transforming ideas into practical digital solutions through modern technologies. My experience includes developing web applications, contributing to collaborative software projects, exploring AI-powered applications, and participating in technology initiatives.",
      "Beyond programming, I am interested in product engineering, technical leadership, and creating technology that solves real-world problems. My objective is to become a skilled software engineer and contribute to impactful technology products.",
    ],
    highlights: [
      { label: "Academic Standing", value: "3.92 / 4.00 GPA", note: "Universitas Nusa Putra" },
      { label: "Core Focus", value: "Full Stack & AI", note: "Production-grade architectures" },
      { label: "Community Leadership", value: "VP, AWS Builder Club", note: "Student technology initiatives" },
      { label: "Philosophy", value: "Craft & Impact", note: "Human-centric intelligent software" },
    ],
  },

  techStackMarquee: {
    row1: [
      { name: "HTML5", iconKey: "html5", brandColor: "#E34F26" },
      { name: "CSS3", iconKey: "css3", brandColor: "#1572B6" },
      { name: "JavaScript", iconKey: "javascript", brandColor: "#F7DF1E" },
      { name: "TypeScript", iconKey: "typescript", brandColor: "#3178C6" },
      { name: "React.js", iconKey: "react", brandColor: "#61DAFB" },
      { name: "Next.js", iconKey: "nextjs", brandColor: "#FFFFFF" },
      { name: "Tailwind CSS", iconKey: "tailwind", brandColor: "#06B6D4" },
      { name: "Node.js", iconKey: "nodejs", brandColor: "#5FA04E" },
      { name: "Express.js", iconKey: "express", brandColor: "#FFFFFF" },
    ],
    row2: [
      { name: "Python", iconKey: "python", brandColor: "#3776AB" },
      { name: "Flask", iconKey: "flask", brandColor: "#FFFFFF" },
      { name: "Java", iconKey: "java", brandColor: "#ED8B00" },
      { name: "Spring Boot", iconKey: "springboot", brandColor: "#6DB33F" },
      { name: "PostgreSQL", iconKey: "postgresql", brandColor: "#4169E1" },
      { name: "MySQL", iconKey: "mysql", brandColor: "#4479A1" },
      { name: "Supabase", iconKey: "supabase", brandColor: "#3ECF8E" },
      { name: "Git", iconKey: "git", brandColor: "#F05032" },
      { name: "GitHub", iconKey: "github", brandColor: "#FFFFFF" },
      { name: "Docker", iconKey: "docker", brandColor: "#2496ED" },
      { name: "Figma", iconKey: "figma", brandColor: "#F24E1E" },
    ],
  },

  skillsCategorized: [
    {
      title: "Frontend Engineering",
      description: "Modern component-driven web interfaces with micro-interactions, responsive design, and fluid transitions.",
      icon: "Layout",
      skills: [
        { name: "HTML5", verified: true },
        { name: "CSS3", verified: true },
        { name: "JavaScript (ES6+)", verified: true },
        { name: "TypeScript", verified: true },
        { name: "React.js", verified: true, tag: "Primary" },
        { name: "Next.js", verified: true },
        { name: "Tailwind CSS", verified: true, tag: "Primary" },
      ],
    },
    {
      title: "Backend & Systems",
      description: "RESTful architectures, resilient server-side services, API design, and modular micro-services.",
      icon: "Server",
      skills: [
        { name: "Node.js", verified: true },
        { name: "Express.js", verified: true },
        { name: "Python", verified: true, tag: "Primary" },
        { name: "Flask", verified: true },
        { name: "Java", verified: true },
        { name: "Spring Boot", verified: true },
      ],
    },
    {
      title: "Databases & Storage",
      description: "Relational modeling, transaction integrity, indexing, and cloud-native databases.",
      icon: "Database",
      skills: [
        { name: "PostgreSQL", verified: true },
        { name: "MySQL", verified: true },
        { name: "Supabase", verified: true, tag: "Cloud DB" },
      ],
    },
    {
      title: "AI & Intelligent Applications",
      description: "Designing real-world applications augmented by modern artificial intelligence and LLM workflows.",
      icon: "Sparkles",
      skills: [
        { name: "AI-Powered App Integration", verified: true, tag: "Specialized" },
        { name: "AI Tutoring Systems", verified: true },
        { name: "Conversational AI Interfaces", verified: true },
        { name: "Prompt Engineering", verified: true },
        { name: "AI-Assisted Development", verified: true },
      ],
    },
    {
      title: "DevOps & Tools",
      description: "Version control workflows, containerization, collaborative tooling, and UI/UX prototyping.",
      icon: "Wrench",
      skills: [
        { name: "Git", verified: true },
        { name: "GitHub Workflows", verified: true },
        { name: "Docker", verified: true },
        { name: "VS Code", verified: true },
        { name: "Figma", verified: true },
      ],
    },
  ],

  projects: [
    {
      id: "openlearn",
      name: "OpenLearn",
      category: "AI-Powered Education Platform",
      organization: "AYITRIX",
      role: "Full Stack Developer & QA",
      description: "An AI-powered educational platform designed to make learning more accessible, interactive, and personalized. Combines educational resources, programming practice, AI learning assistance, and spoken English learning in one platform.",
      longDescription: "OpenLearn unites modern pedagogy with conversational intelligence. It provides students with real-time feedback, guided programming sandboxes, and spoken language immersion powered by AI tutors.",
      contributions: [
        "Full-stack application development across user-facing modules and core services.",
        "Frontend development and user interface improvements with modern responsive standards.",
        "Backend integration and application functionality for learning paths.",
        "Quality assurance and feature testing across multiple browser environments.",
        "Identifying bugs, edge-cases, and improving application reliability.",
        "Designing promotional posters and marketing materials.",
        "Supporting product presentation and digital marketing initiatives.",
      ],
      technologies: ["React.js", "Node.js", "Express.js", "AI Integration", "Tailwind CSS", "QA Testing"],
      image: "/assets/openlearn-logo.png",
      githubUrl: "https://github.com/mahfoos/openlearn",
      liveUrl: "https://openlearn.ayitrix.xyz/",
      featured: true,
      highlightBadge: "Flagship AI Project",
    },
    {
      id: "ayipm",
      name: "AyiPM",
      category: "Open-Source Team Management Platform",
      organization: "AYITRIX",
      role: "Collaborative Software Developer",
      description: "An open-source, self-hostable workspace for small teams that centralizes employee management, attendance, leave management, projects, and tasks.",
      longDescription: "Engineered as an all-in-one operations hub for agile remote teams. Helps organizations manage their workforce securely with complete data ownership.",
      contributions: [
        "Collaborative software development and modular feature maintenance.",
        "Git and GitHub workflows, establishing clean pull request standards.",
        "Prettier configuration and automated formatting scripts.",
        "Code consistency improvements across the codebase.",
        "Branching strategy and pull request review workflows.",
      ],
      technologies: ["JavaScript", "TypeScript", "Node.js", "Prettier / CI", "Git & GitHub"],
      image: "", // Will use styled tech preview
      githubUrl: "https://github.com/uhailahamed0703-wq/AyiPM",
      featured: true,
      highlightBadge: "Open Source",
    },
    {
      id: "basic-programming-project",
      name: "Basic Programming Project",
      category: "Interactive Python Learning Platform",
      role: "Creator & Developer",
      description: "A Python coding practice web application designed to help beginners learn programming through structured lessons, hands-on coding, and problem-solving exercises.",
      longDescription: "A hands-on coding sandbox built specifically for entry-level computer science learners to conquer algorithmic foundations with immediate visual feedback.",
      features: [
        "Structured learning sessions broken into digestible milestones.",
        "Interactive coding exercises with instant output evaluation.",
        "Algorithm programming challenges tailored for beginners.",
        "Practical problem-solving scenarios based on real computing tasks.",
        "Learning progress tracking and self-paced assessments.",
      ],
      technologies: ["Python", "JavaScript", "HTML5", "CSS3", "Interactive Code Sandbox"],
      image: "/assets/basic-programming.jpg",
      githubUrl: "https://github.com/uhailahamed0703-wq/Basic-Programming-Project",
      liveUrl: "https://uhail.netlify.app/",
      featured: true,
      highlightBadge: "Live Production App",
    },
    {
      id: "farmlink",
      name: "FarmLink",
      category: "Agricultural Marketplace Platform",
      role: "Full Stack Engineer",
      description: "A web-based platform designed to connect farmers directly with customers and buyers, simplifying agricultural trading and fresh product discovery.",
      longDescription: "Eliminating middlemen in traditional agricultural supply chains by offering a direct transparent marketplace for regional farmers to list harvests and transact.",
      features: [
        "Connecting farmers and buyers through transparent trade channels.",
        "Agricultural product discovery with harvest date and freshness indicators.",
        "Direct communication channels between growers and buyers.",
        "Digital agricultural trading workflows with clear cataloging.",
      ],
      technologies: ["Web Technologies", "JavaScript", "Database Architecture", "Responsive UI"],
      image: "/assets/farmlink.jpg",
      githubUrl: "https://github.com/uhailahamed0703-wq/farmLink",
      featured: true,
      highlightBadge: "AgriTech Concept",
    },
    {
      id: "hospital-emergency-management",
      name: "Hospital Emergency Management System",
      category: "Java | Data Structures & Algorithms",
      role: "Lead Systems Implementer",
      description: "An academic Java project focused on managing critical emergency patient workflows using fundamental data structures and algorithmic efficiency.",
      longDescription: "A rigorous demonstration of computer science theory applied to clinical emergency triage, prioritizing life-saving actions using deterministic algorithms.",
      implementations: [
        "Binary Search Tree (BST) for high-speed patient lookup and record organization.",
        "Priority Queue for medical emergency triage prioritization based on acuity.",
        "Stack for immediate treatment history and clinical undo/rollback tracking.",
        "Singly Linked List for chronological patient visit and diagnosis history.",
      ],
      technologies: ["Java", "Data Structures", "Algorithms", "Binary Search Trees", "Priority Queues"],
      image: "",
      featured: true,
      highlightBadge: "DSA & Systems",
    },
  ],

  experiences: [
    {
      id: "ayitrix",
      role: "Founding Member | Software Development",
      organization: "AYITRIX",
      period: "2026 — Present",
      location: "Remote / Indonesia",
      description: "Contributing to software product development, AI-native engineering, modern web applications, and digital solutions. Driving development of key platforms such as OpenLearn and AyiPM.",
      highlights: [
        "Architecting full-stack web applications and AI-driven educational platforms.",
        "Standardizing team developer ergonomics, formatting pipelines, and Git workflows.",
        "Leading QA efforts and cross-functional user interface reviews.",
      ],
      logo: "/assets/openlearn-logo.png",
      badge: "Core Engineering",
    },
    {
      id: "aws-builder-club",
      role: "Vice President",
      organization: "AWS STUDENT BUILDER CLUB",
      period: "2026 — Present",
      location: "Universitas Nusa Putra",
      description: "Supporting student technology initiatives, collaboration, and opportunities for technical learning and development across cloud computing and architecture.",
      highlights: [
        "Organizing technical workshops and hackathons focusing on cloud services and development.",
        "Mentoring student peers on collaborative software engineering and cloud fundamentals.",
        "Partnering with university tech communities to expand hands-on builder culture.",
      ],
      logo: "/assets/aws-club-logo.jpg",
      badge: "Technical Leadership",
    },
    {
      id: "apple-park-lk",
      role: "Social Media Manager",
      organization: "APPLE PARK LK",
      period: "2023 — present",
      location: "Sri Lanka / Remote",
      description: "Contributing to social media activities, digital communication, and content-related initiatives for brand visibility and audience engagement.",
      highlights: [
        "Designed and published digital brand communications and customer campaigns.",
        "Analyzed audience engagement metrics to optimize reach and product storytelling.",
        "Coordinated promotional releases and high-fidelity creative visual assets.",
      ],
      logo: "/assets/apple-park-logo.png",
      badge: "Digital Growth",
    },
  ],

  education: [
    {
      institution: "Universitas Nusa Putra",
      degree: "Bachelor's Degree in Informatics Engineering",
      gpa: "Cumulative GPA: 3.92 / 4.00",
      period: "2025 — Present",
      location: "Sukabumi, Indonesia",
      logo: "/assets/nusa-putra-logo.png",
      honors: "Summa Cum Laude Track / Academic Distinction",
    },
  ],

  certifications: [
    {
      id: "redhat-linux",
      title: "Getting Started with Linux Fundamentals 9.1",
      issuer: "Red Hat",
      badgeColor: "#EE0000",
      iconType: "redhat" as const,
      description: "Comprehensive foundational certification in enterprise Linux administration, command-line operations, file system hierarchy, permissions, and shell scripting.",
    },
    {
      id: "moratuwa-python",
      title: "Python for Beginners",
      issuer: "University of Moratuwa",
      badgeColor: "#1E3A8A",
      iconType: "moratuwa" as const,
      description: "Verified academic training in algorithmic thinking, data structures, object-oriented concepts, and computational problem solving using Python.",
    },
  ],

  interests: [
    {
      title: "Full Stack Software Engineering",
      description: "Building scalable, type-safe end-to-end architectures that span performant client interfaces to resilient cloud databases.",
      icon: "Code2",
    },
    {
      title: "Artificial Intelligence Engineering",
      description: "Developing intelligent software pipelines, fine-tuning workflows, embeddings, and integrating neural models.",
      icon: "Brain",
    },
    {
      title: "AI-Powered Applications",
      description: "Creating tangible everyday software augmented with LLM assistants, automated summarizers, and autonomous agents.",
      icon: "Sparkles",
    },
    {
      title: "Cloud Computing",
      description: "Leveraging AWS, serverless architectures, containerized deployments, and globally distributed infrastructure.",
      icon: "Cloud",
    },
    {
      title: "Software Architecture",
      description: "Focusing on clean code, SOLID principles, design patterns, maintainability, and high-throughput system design.",
      icon: "Cpu",
    },
    {
      title: "Open-Source Development",
      description: "Advocating for community-driven public software, reproducible codebases, and shared developer tooling.",
      icon: "GitBranch",
    },
    {
      title: "Product Engineering",
      description: "Bridging the gap between engineering rigor, human-centered UI/UX, and solving real user needs effectively.",
      icon: "Boxes",
    },
  ],
};

