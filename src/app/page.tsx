import ProjectCard from "@/components/ProjectCard";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
// import Marquee from "react-fast-marquee";
// import Image from "next/image";
// import HTML from "../../public/images/html.png";
// import css from "../../public/images/css-3.svg";
// import typescript from "../../public/images/typescript.svg";
// import javascript from "../../public/images/logo-javascript.svg";
// import react from "../../public/images/React.webp";
// import next from "../../public/images/next-js.svg";

export default function Home() {
    return (
        <div className="overflow-hidden w-full p-4 flex max-w-screen-xl mx-auto flex-col min-h-screen">
            <div className="h-16"></div>
            <div
                id="about"
                className="scroll-mt-16 flex-col px-2 h-[100vh] lg:h-[60vh] flex justify-center gap-4 animate-fade-up"
            >
                <h1 className="tracking-tighter text-6xl font-extrabold animate-gentle-float">
                    <span className="leaf-highlight">
                        Hello!🐰
                    </span>
                </h1>
                <p className="text-slate-700 animate-fade-up delay-1">
                    A Computer Science fresh graduate streaming in Data Science,
                    specializing in web development with a focus on React.js and
                    Next.js. A fast learner and highly adaptable developer,
                    always eager to learn new skills and technologies,
                    constantly seeking opportunities to expand my knowledge.
                </p>
                <div
                    id="contact"
                    className="scroll-mt-16 animate-fade-up delay-2"
                >
                    <p className="text-xl font-bold text-slate-800 my-2">
                        Contact me:
                    </p>
                    <div className="flex gap-4">
                        <p className="text-slate-700">
                            darrennathaneil@gmail.com &#x2022;
                        </p>
                        <div className="flex gap-2">
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/darren-nathaneil"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin size={25} />
                            </a>
                            <a
                                target="_blank"
                                href="https://www.github.com/darrennnnnn"
                                rel="noopener noreferrer"
                            >
                                <FaGithub size={25} />
                            </a>
                        </div>
                    </div>
                    <a
                        href="/darren_nathaneil.pdf"
                        download
                        className="inline-flex items-center mt-4 px-4 py-2 rounded-md border border-lime-700 text-lime-800 hover:bg-lime-50 transition-colors text-sm font-semibold"
                    >
                        <FiDownload size={16} className="mr-2" />
                        Download CV
                    </a>
                </div>
            </div>

            {/* <div className="px-2">
                <div className="">
                    <p className="text-xl font-bold text-slate-800 my-2">
                        Tech Stack
                    </p>
                    <hr />
                    <Marquee
                        className="my-4"
                        autoFill
                        speed={50} // Adjust speed (default is 50)
                    >
                        <Image
                            src={HTML}
                            alt="html"
                            height={75}
                            className="mx-2"
                        />
                        <Image
                            src={css}
                            alt="css"
                            height={75}
                            className="mx-2"
                        />
                        <Image
                            src={javascript}
                            alt="css"
                            height={75}
                            className="mx-2"
                        />
                        <Image
                            src={typescript}
                            alt="css"
                            height={75}
                            className="mx-2"
                        />
                        <Image
                            src={react}
                            alt="css"
                            height={75}
                            className="mx-2"
                        />
                        <Image
                            src={next}
                            alt="css"
                            height={75}
                            className="mx-2"
                        />
                    </Marquee>
                </div>
            </div> */}
            <div className="px-2">
                <div
                    id="experience"
                    className="scroll-mt-16 mb-8 animate-fade-up"
                >
                    <p className="text-xl font-bold text-slate-800 my-2">
                        <span className="bg-lime-100 px-2 rounded-sm">
                            Experience
                        </span>
                    </p>
                    <hr />
                    <div className="bg-slate-50 p-4 rounded-md mt-4 border border-slate-200 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                        <p className="text-slate-800 font-bold">
                            Application Developer Intern
                        </p>
                        <p className="text-slate-700 text-sm">
                            PT. Bank Central Asia, Tbk{" "}
                            <span className="text-slate-500">
                                (Feb 2025 - Feb 2026)
                            </span>
                        </p>
                        <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                            Placed in the Data Management team within the
                            Software Quality Improvement subteam. Focused on
                            building frontend and backend systems for internal
                            web applications, developing AI-driven solutions,
                            and exploring modern frameworks and tools.
                        </p>
                        <ul className="list-disc ml-5 mt-3 text-slate-600 text-sm leading-relaxed space-y-1">
                            <li>
                                Developed frontend and backend systems using
                                FastAPI and FastHTML.
                            </li>
                            <li>
                                Conducted stress testing with JMeter and used
                                Docker to containerize applications and automate
                                production deployments.
                            </li>
                            <li>
                                Built internal LLM tools, including an automated
                                unit test generation API and documentation
                                generator API.
                            </li>
                            <li>
                                Explored Agentic AI workflows with LangChain and
                                LangGraph.
                            </li>
                            <li>
                                Conducted explorations on KServe for model
                                inference and MongoDB for performance
                                benchmarking.
                            </li>
                            <li>
                                Strengthened critical thinking, adaptability,
                                and collaboration in an Agile environment.
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    id="projects"
                    className="scroll-mt-16 animate-fade-up delay-1"
                >
                    <p className="text-xl font-bold text-slate-800 my-2">
                        <span className="bg-lime-100 px-2 rounded-sm">
                            Projects
                        </span>
                    </p>
                    <hr />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-stretch my-4 animate-fade-up delay-2">
                    <ProjectCard
                        title="Nutrizen"
                        description=" A web app that estimates meal nutrient counts using
                            an external API and incorporates gamification to
                            encourage consistent calorie tracking and healthier
                            eating habits."
                        techStack={[
                            "nextjs",
                            "tailwind",
                            "typescript",
                            "prisma",
                            "postgres",
                        ]}
                        webLink="https://nutrizen.vercel.app/"
                        githubLink="https://github.com/darrennnnnn/Nutrizen"
                    />
                    <ProjectCard
                        title="Nontonskuy"
                        description="A web application that uses TMDb API that allows users to search for movies and TV shows, and view its details."
                        techStack={["nextjs", "tailwind", "typescript"]}
                        webLink="https://nontonskuy.vercel.app/"
                        githubLink="https://github.com/darrennnnnn/nontonskuy"
                    />
                    <ProjectCard
                        title="Stress Detection Website"
                        description="A website that uses a machine learning model trained using a dataset of tweets to classify whether a tweet is stressful or not."
                        techStack={[
                            "nextjs",
                            "tailwind",
                            "typescript",
                            "python",
                            "flask",
                        ]}
                        webLink="https://stress-detection.vercel.app/"
                        githubLink="https://github.com/darrennnnnn/stress-detection"
                    />
                    <ProjectCard
                        title="Pokedex"
                        description="A web application that uses PokeAPI that allows users to search for Pokemons and view its details."
                        techStack={["nextjs"]}
                        webLink="https://pokedex-beta-murex.vercel.app/"
                        githubLink="https://github.com/darrennnnnn/pokedex"
                    />
                    <ProjectCard
                        title="Emotion Classification Model"
                        description="A machine learning model that classifies the emotion of a sentence."
                        techStack={[
                            "python",
                            "sklearn",
                            "pandas",
                            "numpy",
                            "seaborn",
                        ]}
                        githubLink="https://github.com/darrennnnnn/research_methodology"
                    />
                    <ProjectCard
                        title="Spam Email Detector"
                        description=" A web application that uses a machine learning model to classify whether an email is spam or not."
                        techStack={[
                            "python",
                            "sklearn",
                            "pandas",
                            "numpy",
                            "seaborn",
                        ]}
                        githubLink="https://github.com/darrennnnnn/spam-email-detector"
                    />
                </div>
                <div className="flex justify-center mt-10 mb-16">
                    <a
                        href="#about"
                        className="text-sm text-slate-600 hover:text-lime-700 transition-colors"
                    >
                        Back to top ↑
                    </a>
                </div>
            </div>
        </div>
    );
}
