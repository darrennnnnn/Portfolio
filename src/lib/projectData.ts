import nontonskuyThumbnail from "../../public/images/nontonskuy/nontonskuy.png";
import stressThumbnail from "../../public/images/stress_detection/stress-detection.png";
import pokedexThumbnail from "../../public/images/pokedex/pokedex.png";
import emotionThumbnail from "../../public/images/emotion_classification/research_methodology.png";
import spamThumbnail from "../../public/images/spam_email_detector/spam-email-detector.png";
import nutrizenThumbnail from "../../public/images/nutrizen/Nutrizen.png";

export const projects = [
    {
        id: 1,
        title: "Nutrizen",
        description:
            "A web app that estimates meal nutrient counts using an external API and incorporates gamification to encourage consistent calorie tracking and healthier eating habits.",
        techStack: [
            "NextJS",
            "Tailwind CSS",
            "Typescript",
            "Prisma",
            "PostgreSQL",
        ],
        image: nutrizenThumbnail,

        githubLink: "https://github.com/darrennnnnn/Nutrizen",
    },
    {
        id: 2,
        title: "NontonSkuy",
        description:
            "A web application that allows users to search for movies and TV shows, and view its details.",
        techStack: ["NextJS", "Tailwind CSS", "Typescript", "TMDb API"],
        image: nontonskuyThumbnail,
        webLink: "https://nontonskuy.vercel.app/",
        githubLink: "https://github.com/darrennnnnn/nontonskuy",
    },
    {
        id: 3,
        title: "Stress Detection",
        description:
            "A web application that detects stress inside a sentence using machine learning.",
        techStack: ["NextJS", "Tailwind CSS", "Typescript", "Python", "Flask"],
        image: stressThumbnail,
        webLink: "https://stress-detection.vercel.app/",
        githubLink: "https://github.com/darrennnnnn/stress-detection",
    },
    {
        id: 4,
        title: "Pokedex",
        description:
            "A web application that allows users to search for Pokemon and view its details.",
        techStack: ["NextJS", "PokeAPI"],
        image: pokedexThumbnail,
        webLink: "https://pokedex-beta-murex.vercel.app/",
        githubLink: "https://github.com/darrennnnnn/pokedex",
    },
    {
        id: 5,
        title: "Emotion Classification Model",
        description:
            "A machine learning model that classifies the emotion of a sentence.",
        techStack: ["Python", "Sklearn", "Pandas", "Numpy", "Seaborn"],
        image: emotionThumbnail,
        githubLink: "https://github.com/darrennnnnn/research_methodology",
    },
    {
        id: 6,
        title: "Spam Email Detector",
        description:
            "A machine learning model that classifies whether an email is spam or not.",
        techStack: ["Python", "Sklearn", "Pandas", "Numpy", "Seaborn"],
        image: spamThumbnail,
        githubLink: "https://github.com/darrennnnnn/spam-email-detector",
    },
];
