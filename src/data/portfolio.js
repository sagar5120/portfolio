/**
 * Portfolio Data — Single source of truth for all personal, project,
 * and skills data used throughout the portfolio website.
 */

import reactcertImg from '../assets/reactcert.jpg';
import mrfresherImg from '../assets/mrfresher.jpg';
import uiuxImg from '../assets/uiuxcert.jpg';
import codefestImg from '../assets/codefest.jpg';
import codefestOrganizerImg from '../assets/codefest_organizer.jpg';
import techconclaveImg from '../assets/techconclave.jpg';
import aribtHackathonImg from '../assets/aribt_hackathon.jpg';
import nabilImg from '../assets/nabil.jpg';
import contentWriterImg from '../assets/content_writer.jpg';

export const portfolio = {
    // ─── Personal Info ────────────────────────────────────────────────────────
    name: "Sagar Bhandari",
    tagline: "IT Undergraduate | Web Application Developer | Tech Community Leader",
    location: "Bhairahawa, Nepal",
    bio: "Building real-world digital solutions for local problems.",
    email: "bhandarisagar512@gmail.com",
    availability: "Open to Opportunities",

    // ─── Social Links ─────────────────────────────────────────────────────────
    social: [
        { label: "GitHub", url: "https://github.com/sagar5120", icon: "Github" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/bsagar512/", icon: "Linkedin" },
        { label: "Twitter", url: "https://x.com/bsagar512", icon: "Twitter" },
        { label: "Facebook", url: "https://www.facebook.com/bsagar512", icon: "Facebook" },
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
            orgUrl: "https://www.facebook.com/profile.php?id=100094504922018",
            period: "Current",
            type: "Community",
            description:
                "Leading the BMC IT Club at Bhairahawa Multiple Campus — organising technical workshops, coding contests, and community events that empower students with hands-on skills in software development, networking, and emerging technologies.",
            tags: ["Leadership", "Event Management", "Tech Workshops", "Community"],
            icon: "Code2",
        },
        {
            id: 6,
            role: "Sales Manager",
            org: "Sagarv Hardware and Ply Stores",
            orgUrl: "https://www.facebook.com/sagarhardware",
            period: "Past",
            type: "Work",
            description:
                "Managed daily sales operations, customer relationships, and inventory at Sagarv Hardware and Ply Stores.",
            tags: ["Sales", "Management", "Customer Relations", "Inventory"],
            icon: "Briefcase",
        },
        {
            id: 7,
            role: "Program Host — Provincial Phase, Codefest 2025",
            org: "Code for Change Rupandehi",
            period: "2025",
            type: "Community",
            description: "Successfully hosted the Provincial Phase of Codefest 2025 in Rupandehi, facilitating the event and ensuring a smooth experience for all participants and organizers.",
            tags: ["Event Hosting", "Public Speaking", "Community Engagement", "Tech Event"],
            icon: "Users",
            image: codefestImg,
        },
        {
            id: 11,
            role: "Content Writer",
            org: "Coding Olympics Nepal",
            period: "Past",
            type: "Community",
            description: "Served as a content writer for Coding Olympics Nepal — crafting technical articles, problem statements, and educational content for the developer community.",
            tags: ["Content Writing", "Technical Writing", "Developer Community"],
            icon: "PenLine",
            image: contentWriterImg,
        },
        {
            id: 2,
            role: "Secretary",
            org: "Neptech Tribe",
            orgUrl: "https://www.facebook.com/neptechtribe",
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
            orgUrl: "https://www.facebook.com/CodeForChangeNepal",
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
            id: 8,
            role: "Event Organizer — Provincial Phase, Codefest 2025",
            org: "Code for Change Rupandehi",
            period: "2025",
            type: "Community",
            description: "Led the organizational efforts for the Provincial Phase of Codefest 2025, coordinating logistics, managing teams, and executing a successful tech event.",
            tags: ["Event Management", "Leadership", "Logistics", "Tech Event"],
            icon: "Users",
            image: codefestOrganizerImg,
        },
        {
            id: 9,
            role: "Volunteer",
            org: "Tech Conclave 2024",
            period: "Feb 2024",
            type: "Community",
            description: "Volunteered at Tech Conclave 2024 in Lumbini Province, contributing to the organization and smooth execution of the grandest tech event in the region.",
            tags: ["Volunteering", "Event Management", "Community Support", "Tech Event"],
            icon: "Users",
            image: techconclaveImg,
        },
        {
            id: 10,
            role: "Participant",
            org: "ARIBT Tilottama Hackathon (48 Hours)",
            period: "Sep 2025",
            type: "Community",
            description: "Actively participated in a 48-hour hackathon organized by ARIBT in collaboration with Tilottama Municipality, building impactful solutions and demonstrating strong problem-solving skills.",
            tags: ["Hackathon", "Problem Solving", "Rapid Prototyping", "Innovation"],
            icon: "Lightbulb",
            image: aribtHackathonImg,
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
            image: mrfresherImg,
        },
    ],

    // ─── Certifications ───────────────────────────────────────────────────────
    certifications: [
        {
            id: 4,
            title: "Certificate Course in Social Entrepreneurship",
            issuer: "Nabil School of Social Entrepreneurship",
            description: "Successfully completed a certificate course in Social Entrepreneurship, an initiative by Nabil Bank. Learned core concepts of building impactful and sustainable social enterprises.",
            icon: "Lightbulb",
            color: "from-green-500 to-emerald-500",
            image: nabilImg,
        },
        {
            id: 1,
            title: "React.js Training",
            issuer: "7-Day Intensive Program",
            description: "Hands-on React.js training covering components, hooks, state management, and building real-world web applications.",
            icon: "Code2",
            color: "from-indigo-500 to-violet-500",
            image: reactcertImg,
        },
        {
            id: 2,
            title: "UI/UX Design Training",
            issuer: "15-Day Intensive Program",
            description: "Comprehensive UI/UX training covering design principles, Figma prototyping, user research, and accessibility best practices.",
            icon: "Palette",
            color: "from-pink-500 to-rose-500",
            image: uiuxImg,
        },
    ],

    // ─── Gallery ──────────────────────────────────────────────────────────────
    gallery: [
        {
            id: 1,
            image: codefestImg,
            title: "Codefest 2025",
            description: "Hosting the Provincial Phase of Codefest 2025.",
        },
        {
            id: 2,
            image: mrfresherImg,
            title: "Mr. Fresher",
            description: "Awarded Mr. Fresher at the college welcome program.",
        },
        {
            id: 3,
            image: techconclaveImg,
            title: "Tech Conclave 2024",
            description: "Volunteering at the grandest tech event in Lumbini.",
        },
        {
            id: 4,
            image: aribtHackathonImg,
            title: "ARIBT Hackathon",
            description: "Participating in a 48-hour hackathon.",
        },
        {
            id: 5,
            image: codefestOrganizerImg,
            title: "Event Organizing",
            description: "Organizing efforts for Codefest 2025 logistics.",
        },
        {
            id: 6,
            image: contentWriterImg,
            title: "Content Writing",
            description: "Crafting technical articles for Coding Olympics.",
        },
        {
            id: 7,
            image: reactcertImg,
            title: "React.js Training",
            description: "Hands-on React.js training covering modern web development.",
        },
        {
            id: 8,
            image: uiuxImg,
            title: "UI/UX Design",
            description: "Comprehensive UI/UX training covering design principles.",
        },
        {
            id: 9,
            image: nabilImg,
            title: "Social Entrepreneurship",
            description: "Completed a certificate course by Nabil Bank.",
        }
    ],
};
