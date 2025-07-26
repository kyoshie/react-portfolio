import { useState } from "react"
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen)
    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="hidden md:flex justify-between items-center h-16">
                    <a href="/" className="text-xl font-bold text-white hover:scale-130 transition-all duration-300 ease-in-out">
                        JOSHUA.<span className="text-blue-400">dev</span>
                    </a>
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="text-slate-300 hover:text-white transition-colors duration-300 ease-in-out">
                            Home
                        </a>
                        <a href="#about" className="text-slate-300 hover:text-white transition-colors duration-300 ease-in-out">
                            About
                        </a>
                        <a href="#projects" className="text-slate-300 hover:text-white transition-colors duration-300 ease-in-out">
                            Projects
                        </a>
                        <a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-300 ease-in-out">
                            Contact
                        </a>
                    </div>
                </div>

                <div className="md:hidden text-right">
                    <button onClick={toggleMenu}>
                        {isOpen ? <X className="w-6 h-12" /> : <Menu className="w-6 h-12" />}
                    </button>
                </div>

                {isOpen && (
                    <div className="md:hidden mt-2 space-y-2 px-2 mb-2 text-right">
                        <a href="#home" className="block hover:text-blue-400">Home</a>
                        <a href="#about" className="block hover:text-blue-400">About</a>
                        <a href="#projects" className="block hover:text-blue-400">Projects</a>
                        <a href="#contact" className="block hover:text-blue-400">Contact</a>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
