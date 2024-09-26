import { Github, Linkedin } from "lucide-react";

interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
    text: string;
}

export default function Header() {
    return (
        <div className="items-center justify-center flex flex-col">
            <h1 className="font-semibold text-3xl text-blue-300 mb-2">
                Darren Nathaneil
            </h1>
            <p className="font-bold text-blue-400 mb-2">
                darrennathaneil@gmail.com
            </p>
            <div className="flex gap-8 my-4 w-full justify-center">
                <SocialLink
                    href="https://www.linkedin.com/in/darren-nathaneil-52b66632a/"
                    icon={<Linkedin size={24} color="#60A5FA" />}
                    text="LinkedIn"
                />
                <SocialLink
                    href="https://github.com/darrennnnnn"
                    icon={<Github size={24} color="#60A5FA" />}
                    text="GitHub"
                />
            </div>
        </div>
    );
}

const SocialLink = ({ href, icon, text }: SocialLinkProps) => (
    <a
        target="_blank"
        href={href}
        className="hover:text-blue-300 transition-colors flex gap-1"
        rel="noopener noreferrer"
    >
        {icon}
        <p className="text-blue-300">•</p>
        <p>{text}</p>
    </a>
);
