import { Github, Link2 } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    image: StaticImageData;
    webLink?: string;
    githubLink: string;
}

interface ProjectsProps {
    projects: Project[];
}

interface ProjectLinkProps {
    href: string;
    icon: React.ReactNode;
    text: string;
}

export default function Projects({ projects }: Readonly<ProjectsProps>) {
    return (
        <div className="lg:w-1/2 xl:w-2/3 lg:py-8 lg:overflow-y-auto">
            <h2 className="font-semibold text-2xl my-6 text-center text-blue-300">
                Projects
            </h2>
            <div className="flex flex-col gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}

function ProjectCard({ project }: Readonly<{ project: Project }>) {
    const { title, description, techStack, image, webLink, githubLink } =
        project;
    return (
        <div className="border border-blue-700 p-2 rounded-md flex flex-col md:flex-row gap-4 shadow-md hover:scale-105 hover:cursor-pointer transition bg-gray-800">
            <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4">
                <Image
                    src={image}
                    alt={title}
                    className="rounded-lg w-full h-auto object-cover"
                />
            </div>
            <div className="flex-grow flex flex-col justify-between">
                <div>
                    <h6 className="font-bold text-lg mb-2 text-blue-300">
                        {title}
                    </h6>
                    <p className="text-sm mb-3 text-gray-300">{description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                        {techStack.map((item) => (
                            <TechTag key={item} tech={item} />
                        ))}
                    </div>
                </div>
                <div className="flex gap-4">
                    {webLink && (
                        <ProjectLink
                            href={webLink}
                            icon={<Link2 size={16} />}
                            text="Visit"
                        />
                    )}
                    <ProjectLink
                        href={githubLink}
                        icon={<Github size={16} />}
                        text="GitHub"
                    />
                </div>
            </div>
        </div>
    );
}

function TechTag({ tech }: Readonly<{ tech: string }>) {
    return (
        <div className="bg-gray-700 text-blue-300 px-2 py-1 rounded-full text-xs">
            {tech}
        </div>
    );
}

function ProjectLink({ href, icon, text }: Readonly<ProjectLinkProps>) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-400 hover:underline"
        >
            <span className="mr-1">{icon}</span>
            <span className="text-sm">{text}</span>
        </a>
    );
}
