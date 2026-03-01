/**
 * Portfolio Data — Single source of truth for all personal, project,
 * and skills data used throughout the portfolio website.
 */

export const portfolio = {
    // ─── Personal Info ────────────────────────────────────────────────────────
    name: "Sagar Bhandari",
    tagline: "IT Undergraduate | Web Application Developer | Tech Community Leader",
    location: "Bhairahawa, Nepal",
    bio: "Building real-world digital solutions for local problems.",
    email: "sagarbhandari@example.com",
    availability: "Open to Opportunities",

    // ─── Social Links ─────────────────────────────────────────────────────────
    social: [
        { label: "GitHub", url: "https://github.com/sagarbhandari", icon: "Github" },
        { label: "LinkedIn", url: "https://linkedin.com/in/sagarbhandari", icon: "Linkedin" },
        { label: "Twitter", url: "https://twitter.com/sagarbhandari", icon: "Twitter" },
    ],

    // ─── Navigation Links ─────────────────────────────────────────────────────
    navLinks: [
        { label: "About", href: "#about" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "Contact", href: "#contact" },
    ],

    // ─── Experience / Timeline ────────────────────────────────────────────────
    experience: [
        {
            id: 1,
            role: "Club President",
            org: "BMC IT Club — Bhairahawa Multiple Campus",
            period: "Current",
            type: "Leadership",
            description:
                "Leading the BMC IT Club at Bhairahawa Multiple Campus — organising technical workshops, coding contests, and community events that empower students with hands-on skills in software development, networking, and emerging technologies.",
            tags: ["Leadership", "Event Management", "Tech Workshops", "Community"],
            icon: "Code2",
        },
        {
            id: 2,
            role: "Secretary",
            org: "Neptech Tribe",
            period: "Current",
            type: "Community",
            description:
                "Serving as Secretary for Neptech Tribe — one of Nepal's growing developer communities. Coordinating meetings, managing communications, and helping organise hackathons, open-source sprints, and mentorship programmes across Nepal.",
            tags: ["Community Building", "Open Source", "Coordination", "Hackathons"],
            icon: "Users",
        },
        {
            id: 3,
            role: "Community Representative (CR)",
            org: "Code for Change",
            period: "Past",
            type: "Community",
            description:
                "Served as Community Representative for Code for Change — advocating for social-impact tech projects and connecting student developers with meaningful problems worth solving through technology.",
            tags: ["Social Impact", "Advocacy", "Developer Community", "Tech for Good"],
            icon: "GraduationCap",
        },
        {
            id: 4,
            role: "On-the-Job Training (OJT) — 1200 Hours",
            org: "Computer Engineering Vocational Education",
            period: "Past",
            type: "Education",
            description:
                "Completed 1200 hours of on-the-job training as part of Computer Engineering Vocational Education — gaining hands-on industry experience in software development, networking, and technical problem-solving in real production environments.",
            tags: ["OJT", "Computer Engineering", "Vocational Education", "Hands-on Training"],
            icon: "BookOpen",
        },
        {
            id: 5,
            role: "Program Participant",
            org: "Nabil School of Social Entrepreneurship",
            period: "6 Months",
            type: "Program",
            description:
                "Attended the 6-month Nabil School of Social Entrepreneurship program — developing skills in social innovation, entrepreneurial thinking, and building solutions that create meaningful community impact.",
            tags: ["Social Entrepreneurship", "Innovation", "Community Impact", "Leadership"],
            icon: "Lightbulb",
        },
    ],

    // ─── Projects ─────────────────────────────────────────────────────────────
    projects: [
        {
            id: 1,
            title: "Hatma Kanun",
            subtitle: "Legal Information Portal",
            description:
                "A comprehensive bilingual (Nepali/English) legal-information platform that demystifies Nepal's legal system for everyday citizens. Features searchable laws, case summaries, and an AI-assisted Q&A module.",
            longDescription:
                "Built to bridge the gap between complex legal language and the general public in Nepal. Includes a multi-tier role system for lawyers, contributors, and readers.",
            tags: ["React.js", "FastAPI", "PostgreSQL", "Python", "Tailwind CSS", "AI/NLP"],
            category: "Web Application",
            links: {
                live: "https://hatmakanun.example.com",
                github: "https://github.com/sagarbhandari/hatmakanun",
            },
            featured: true,
            color: "from-indigo-600 to-violet-600",
            icon: "Scale",
        },
        {
            id: 2,
            title: "E-Garage",
            subtitle: "College Management System",
            description:
                "An end-to-end college management system with real-time SOS features, location-based garage/service-provider discovery, and an integrated booking and notification engine.",
            longDescription:
                "Leverages PostGIS for geospatial queries, FastAPI for async performance, and Next.js for a seamless frontend. Containerised with Docker for easy deployment.",
            tags: ["Next.js", "FastAPI", "PostgreSQL", "PostGIS", "Docker", "Tailwind CSS"],
            category: "Full-Stack Platform",
            links: {
                live: "https://egarage.example.com",
                github: "https://github.com/sagarbhandari/egarage",
            },
            featured: true,
            color: "from-emerald-500 to-cyan-600",
            icon: "Car",
        },
        {
            id: 3,
            title: "Nep Tech Tribe Portal",
            subtitle: "Community Hub",
            description:
                "Official web portal for the Nep Tech Tribe community, featuring event schedules, resource library, member directories, and a blog powered by a headless CMS.",
            tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
            category: "Web Application",
            links: {
                live: "https://neptechribe.example.com",
                github: "https://github.com/sagarbhandari/neptechribe",
            },
            featured: false,
            color: "from-orange-500 to-rose-500",
            icon: "Globe",
        },
    ],

    // ─── Skills ───────────────────────────────────────────────────────────────
    skills: [
        {
            category: "Frontend",
            icon: "Monitor",
            items: [
                { name: "React.js", level: 90 },
                { name: "Next.js", level: 85 },
                { name: "Tailwind CSS", level: 92 },
                { name: "TypeScript", level: 78 },
                { name: "Framer Motion", level: 75 },
            ],
        },
        {
            category: "Backend",
            icon: "Server",
            items: [
                { name: "Node.js", level: 85 },
                { name: "FastAPI", level: 88 },
                { name: "Python", level: 85 },
                { name: "REST APIs", level: 90 },
                { name: "GraphQL", level: 65 },
            ],
        },
        {
            category: "Database & DevOps",
            icon: "Database",
            items: [
                { name: "PostgreSQL", level: 82 },
                { name: "MongoDB", level: 78 },
                { name: "PostGIS", level: 70 },
                { name: "Docker", level: 75 },
                { name: "Git / GitHub", level: 88 },
            ],
        },
        {
            category: "Mobile & Tools",
            icon: "Smartphone",
            items: [
                { name: "React Native", level: 70 },
                { name: "VS Code", level: 95 },
                { name: "Figma", level: 72 },
                { name: "Postman", level: 85 },
                { name: "Linux", level: 75 },
            ],
        },
    ],

    // ─── Stats ────────────────────────────────────────────────────────────────
    stats: [
        { label: "Projects Shipped", value: "15+" },
        { label: "Years Experience", value: "3+" },
        { label: "Community Members", value: "500+" },
        { label: "GitHub Stars", value: "200+" },
    ],

    // ─── Awards ───────────────────────────────────────────────────────────────
    awards: [
        {
            id: 1,
            title: "Mr. Fresher",
            org: "College",
            description: "Recognised as Mr. Fresher — awarded to the standout first-year student demonstrating exceptional talent, personality, and potential among peers.",
            icon: "Trophy",
        },
    ],

    // ─── Certifications ───────────────────────────────────────────────────────
    certifications: [
        {
            id: 1,
            title: "React.js Training",
            issuer: "7-Day Intensive Program",
            description: "Hands-on React.js training covering components, hooks, state management, and building real-world web applications.",
            icon: "Code2",
            color: "from-indigo-500 to-violet-500",
        },
        {
            id: 2,
            title: "UI/UX Design Training",
            issuer: "15-Day Intensive Program",
            description: "Comprehensive UI/UX training covering design principles, Figma prototyping, user research, and accessibility best practices.",
            icon: "Palette",
            color: "from-pink-500 to-rose-500",
        },
        {
            id: 3,
            title: "Content Writer",
            issuer: "Coding Olympics Nepal",
            description: "Served as a content writer for Coding Olympics Nepal — crafting technical articles, problem statements, and educational content for the developer community.",
            icon: "PenLine",
            color: "from-emerald-500 to-teal-500",
        },
    ],
};
