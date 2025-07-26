import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import {
    SiBootstrap,
    SiJavascript,
    SiNextdotjs,
    SiReact,
    SiShadcnui,
    SiTailwindcss,
} from "react-icons/si";


const techIcons = [
    { id: 1, icon: <SiReact size={30} color="#61DAFB" /> },
    { id: 2, icon: <SiTailwindcss size={30} color="#38BDF8" /> },
    { id: 3, icon: <SiJavascript size={30} color="#F7DF1E" /> },
    { id: 4, icon: <SiShadcnui size={30} color="#A1A1AA" /> },
    { id: 5, icon: <SiNextdotjs size={30} color="#ffffff" /> },
    { id: 6, icon: <SiBootstrap size={30} color="#7952B3" /> },
];

const downloadFile = () => {
    const fileUrl = "/RESUME_DATINGUINOO.pdf";
    const fileName = "datinguinoo_resume.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const Home = () => {
    return (
        <motion.section
            id="home"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="pt-16 md:pt-20 min-h-screen flex items-center">

            <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-cyan-500/10 rounded-full blur-xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-sm border border-blue-400/50 text-blue-400 bg-blue-400/10">
                                <MapPin className="w-4 h-4 mr-1" /> Available for work
                            </span>
                            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                                Hi, I'm
                                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    Joshua Datinguinoo.
                                </span>
                            </h1>
                            <p className="text-sm sm:text-base md:text-xl text-slate-300 leading-relaxed md:max-w-2xl">
                                A passionate frontend developer who crafts beautiful, responsive, and user-friendly web experiences. I specialize in modern JavaScript frameworks and love bringing designs to life.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                                Tech Stack
                            </p>
                            <div className="relative w-full h-12 overflow-hidden">
                                <div className="flex w-max animate-[marquee_20s_linear_infinite] gap-6">
                                    {[...techIcons, ...techIcons].map(({ id, icon }, index) => (
                                        <div key={`${id}-${index}`} className="min-w-[60px]">
                                            {icon}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={downloadFile}
                                className="flex items-center justify-center py-2 px-4 bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out text-white group rounded-md"
                            >
                                <Download className="w-4 h-4 mr-2" />
                                Download Resume
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
                            </button>
                            <a href="#projects ">
                                <button className="  border border-slate-600 py-2 px-4 text-slate-300 transition-all duration-300 ease-in-out hover:bg-slate-800 bg-transparent rounded-md">
                                    View Projects
                                </button>
                            </a>
                        </div>

                        <div className="flex space-x-4">
                            <a href="#" className="p-2 text-slate-400 hover:text-white transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 text-slate-400 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                            </a>
                            <a href="https://www.facebook.com/dnslrne/" target="_blank" className="p-2 text-slate-400 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Home;
