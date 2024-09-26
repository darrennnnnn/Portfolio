interface SkillsProps {
    skills: string[];
}

export default function Skills({ skills }: Readonly<SkillsProps>) {
    return (
        <div className="flex items-center flex-col my-8">
            <h2 className="font-semibold text-2xl my-4 text-blue-300">
                Skills
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-2">
                {skills.map((skill) => (
                    <SkillTag key={skill} skill={skill} />
                ))}
            </div>
        </div>
    );
}

const SkillTag = ({ skill }: { skill: string }) => (
    <div className="bg-gray-700 text-blue-300 px-4 py-2 rounded-full">
        <p className="font-medium text-sm">{skill}</p>
    </div>
);
