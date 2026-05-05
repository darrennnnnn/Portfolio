export default function Header() {
    return (
        <div className="w-full h-16 fixed top-0 left-0 bg-slate-100/80 backdrop-blur-sm z-50 border-b border-slate-200">
            <div className="h-full max-w-screen-xl mx-auto px-4 flex justify-between items-center">
                <p className="font-extrabold text-2xl">Darren Nathaneil</p>
                <div className="gap-4 items-center hidden md:flex text-sm text-slate-700">
                    <a href="#about" className="hover:text-lime-700 transition-colors">
                        About
                    </a>
                    <a
                        href="#experience"
                        className="hover:text-lime-700 transition-colors"
                    >
                        Experience
                    </a>
                    <a
                        href="#projects"
                        className="hover:text-lime-700 transition-colors"
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-lime-700 transition-colors"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );
}
