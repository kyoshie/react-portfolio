import { motion } from "framer-motion";
import { FolderKanban } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Tuklas: An NFT-Based Art Arcade",
            description: "A website application that utilizes the power of blockchain technology through converting arts into NFT with the goal to fight plagiarism.",
            technologies: ["React", "Solidity", "Tailwind CSS", "Postgre SQL", "Prisma ORM", "Express JS"],
            image: "/tuklas.png",
            githubUrl: "https://github.com/kyoshie/tuklasCap",
        },
        {
            id: 2,
            title: "IQAO",
            description: "A website application aim to improve the internal quality audit process of University of Batangas built using modern technologies.",
            technologies: ["Nexxjs", "TypeScript", "Tailwind CSS", "Shadcn UI", "Prisma ORM", "MySQL"],
            image: "/iqao.png",
            githubUrl: "https://github.com/Jedddy/iqao-system-next",
        }
    ]
    return (
        <motion.section
            id="projects"
            className="min-h-screen pt-20 scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <header className="text-center">
                <span className="w-fit mx-auto border-blue-400/50 text-blue-400 bg-blue-400/10 mb-4 rounded-full px-3 py-1 text-sm flex items-center justify-center">
                    <FolderKanban className="w-3 h-3 mr-1" />
                    My Works
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Featured Projects</h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    Here are some of my projects that I developed inidividually and within a team that showcase my skills in front-end development.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-2">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="hover:shadow-lg transition-shadow duration-300 bg-slate-800 border border-slate-700 rounded-lg"
                    >
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={project.image || "empty"}
                                alt={project.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <header className="p-6 pb-4">
                            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                            <p className="text-sm leading-relaxed text-slate-300">
                                {project.description}
                            </p>
                        </header>
                        <div className="px-6 pb-4">
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="inline-block px-2 py-1 text-xs rounded-md bg-slate-700 text-slate-200 hover:bg-slate-600 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 pt-0 flex gap-2">
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm border border-slate-600 text-slate-200 hover:bg-slate-700 bg-transparent rounded-md transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                Code
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </motion.section >
    )
}

export default Projects