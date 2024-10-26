import { Github, Link2 } from "lucide-react";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma, SiFlask, SiGeopandas, SiNumpy } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import scikitlogo from "../../../public/images/Scikit_learn_logo_small.svg";
import Image from "next/image";
import seabornlogo from "../../../public/images/seaborn.svg";

interface ProjectCardProps {
    title: string;
    description: string;
    techStack: (keyof typeof icons)[];
    webLink?: string;
    githubLink: string;
}

const icons = {
    nextjs: <RiNextjsFill size={20} className="text-slate-600" />,
    tailwind: <RiTailwindCssFill size={20} className="text-slate-600" />,
    typescript: <BiLogoTypescript size={20} className="text-slate-600" />,
    prisma: <SiPrisma size={20} className="text-slate-600" />,
    postgres: <BiLogoPostgresql size={20} className="text-slate-600" />,
    python: <FaPython size={20} className="text-slate-600" />,
    flask: <SiFlask size={20} />,
    sklearn: (
        <Image
            className="grayscale"
            src={scikitlogo}
            height={15}
            alt="scikitlogo"
        />
    ),
    pandas: <SiGeopandas size={20} className="text-slate-600" />,
    numpy: <SiNumpy size={20} className="text-slate-600" />,
    seaborn: (
        <Image
            className="grayscale"
            src={seabornlogo}
            height={15}
            alt="seabornlogo"
        />
    ),
};

export default function ProjectCard({
    title,
    description,
    techStack,
    webLink,
    githubLink,
}: Readonly<ProjectCardProps>) {
    return (
        <div className="bg-slate-50 p-4 rounded-md flex flex-col gap-2 min-h-72">
            <p className="text-lg text-slate-700 font-bold">{title}</p>
            <span className="flex gap-2 items-center">
                {techStack?.map((item) => (
                    <span key={item}>{icons[item]}</span>
                ))}
            </span>
            <p className="py-2 text-slate-600 text-justify text-sm leading-relaxed tracking-wide">
                {description}
            </p>
            <div className="flex gap-4">
                {webLink && (
                    <a
                        href={webLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-400 hover:scale-105 transition-all duration-100 hover:underline origin-left"
                    >
                        <span className="mr-1">
                            <Link2 size={15} />
                        </span>
                        <span className="text-xs">Visit</span>
                    </a>
                )}
                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-400 hover:scale-105 transition-all duration-100 hover:underline origin-left"
                    >
                        <span className="mr-1">
                            <Github size={15} />
                        </span>
                        <span className="text-xs">Github</span>
                    </a>
                )}
            </div>
        </div>
    );
}
