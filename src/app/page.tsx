import ProjectCard from "@/components/ProjectCard";
import { FaLinkedin, FaGithub } from "react-icons/fa";
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
            <div className="flex-col px-2 h-[100vh] lg:h-[60vh] flex justify-center gap-4">
                <h1 className="tracking-tighter text-6xl font-extrabold">
                    I&apos;M A WEB DEVELOPER
                </h1>
                <p className="text-slate-700">
                    I am a Computer Science major streaming in Data Science,
                    with a strong interest in web development. My focus is on
                    creating web applications that not only look great but also
                    handle data efficiently. I enjoy working on projects where I
                    can combine my passion for front-end development with my
                    knowledge of data processing and analysis.
                </p>
                <div>
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
                <div className="">
                    <p className="text-xl font-bold text-slate-800 my-2">
                        Projects
                    </p>
                    <hr />
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 place-content-stretch my-4">
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
                        title="Stress Detection"
                        description="A web application that uses TMDb API that allows users to search for movies and TV shows, and view its details."
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
            </div>
        </div>
    );
}
