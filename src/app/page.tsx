import Projects from "@/components/Project";
import { projects } from "@/lib/projectData";
import { techStack } from "@/lib/tech";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="h-screen w-full p-4 lg:flex max-w-screen-2xl mx-auto">
            <div className="lg:w-1/3 lg:h-full lg:p-20">
                <div className="items-center justify-center flex flex-col">
                    <h1 className="font-semibold text-3xl text-[#03045E] mb-2">
                        Darren Nathaneil
                    </h1>
                    <p className="font-bold text-[#0077B6] mb-2">
                        darrennathaneil@gmail.com
                    </p>
                    <div className="flex gap-4 my-4">
                        <Link
                            href="https://www.linkedin.com/in/darren-nathaneil-52b66632a/"
                            className="hover:text-[#FFA07A] transition-colors"
                        >
                            <Linkedin size={24} color="#0077B6" />
                        </Link>
                        <Link
                            href="https://github.com/darrennnnnn"
                            className="hover:text-[#FFA07A] transition-colors"
                        >
                            <Github size={24} color="#0077B6" />
                        </Link>
                    </div>
                    <p className="text-md text-justify text-[#4A5568]">
                        I am a Computer Science major streaming in Data Science,
                        with a strong interest in web development. My focus is
                        on creating web applications that not only look great
                        but also handle data efficiently. I enjoy working on
                        projects where I can combine my passion for front-end
                        development with my knowledge of data processing and
                        analysis.
                    </p>
                </div>
                <div className="flex items-center flex-col my-8">
                    <h2 className="font-semibold text-2xl my-4 text-[#03045E]">
                        Skills
                    </h2>
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {techStack.map((tech) => (
                            <div
                                key={tech}
                                className="bg-[#90E0EF] text-[#03045E] px-4 py-2 rounded-full"
                            >
                                <p className="font-medium text-sm">{tech}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div></div>
            <div className="lg:w-2/3 lg:py-8 lg:overflow-y-auto">
                <h2 className="font-semibold text-2xl my-6 text-center text-[#03045E]">
                    Projects
                </h2>
                <div className="flex flex-col gap-6">
                    {projects.map((project) => (
                        <Projects key={project.id} info={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}
