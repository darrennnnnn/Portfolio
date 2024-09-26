import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Projects from "@/components/Project";
import { projects } from "@/lib/projectData";
import { techStack } from "@/lib/tech";

export default function Home() {
    return (
        <div className="min-h-screen w-full p-4 lg:flex max-w-screen-2xl mx-auto bg-gray-900 text-gray-100">
            <div className="lg:w-1/2 xl:w-1/3 lg:h-full lg:p-20">
                <Header />
                <p className="text-md text-justify text-gray-300 mt-4">
                    I am a Computer Science major streaming in Data Science,
                    with a strong interest in web development. My focus is on
                    creating web applications that not only look great but also
                    handle data efficiently. I enjoy working on projects where I
                    can combine my passion for front-end development with my
                    knowledge of data processing and analysis.
                </p>
                <Skills skills={techStack} />
            </div>
            <Projects projects={projects} />
        </div>
    );
}
