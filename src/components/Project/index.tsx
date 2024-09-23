import { Github, Link2 } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Project {
    title: string;
    description: string;
    techStack: string[];
    image: StaticImageData;
    webLink?: string;
    githubLink: string;
}

interface ProjectProps {
    info: Project;
}

export default function Projects({ info }: Readonly<ProjectProps>) {
    const { title, description, techStack, image, webLink, githubLink } = info;
    return (
        <div className="border border-[#00B4D8] p-2 rounded-md flex flex-col md:flex-row gap-4 shadow-md hover:scale-105 hover:cursor-pointer transition">
            <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4">
                <Image
                    src={image}
                    alt={title}
                    className="rounded-lg w-full h-auto object-cover"
                />
            </div>
            <div className="flex-grow flex flex-col justify-between">
                <div>
                    <h6 className="font-bold text-lg mb-2">{title}</h6>
                    <p className="text-sm mb-3">{description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                        {techStack.map((item) => (
                            <div
                                key={item}
                                className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex gap-4">
                    {webLink && (
                        <Link
                            href={webLink}
                            className="flex items-center text-blue-600 hover:underline"
                        >
                            <Link2 size={16} className="mr-1" />
                            <span className="text-sm">Visit</span>
                        </Link>
                    )}
                    <Link
                        href={githubLink}
                        className="flex items-center text-blue-600 hover:underline"
                    >
                        <Github size={16} className="mr-1" />
                        <span className="text-sm">GitHub</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
