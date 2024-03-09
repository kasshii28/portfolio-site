"use client";
import SkillType from "@/app/types/skill-type";
import {
  CircularProgress,
  Card,
  CardBody,
  CardFooter,
  Chip,
} from "@nextui-org/react";

interface SkillListProps {
  skills: SkillType[];
}

export default function App({ skills }: SkillListProps) {
  return (
    <div>
      <ul
        className="
            flex flex-wrap justify-center
            items-center gap-10 px-4"
      >
        {skills.map((skill) => (
          <li key={skill.id}>
            <Card
              className="
                        w-[180px] h-[180px] 
                        rounded-lg bg-gradient-to-br 
                        from-violet-500 to-indigo-500
                        shadow-gray-400 shadow-lg
                        "
            >
              <CardBody className="justify-center items-center pb-4">
                <CircularProgress
                  classNames={{
                    svg: "w-32 h-32 drop-shadow-md",
                    indicator: "stroke-white",
                    track: "stroke-white/10",
                    value: "text-2xl font-semibold text-white",
                  }}
                  value={parseInt(skill.value)}
                  strokeWidth={4}
                  showValueLabel={true}
                />
              </CardBody>
              <CardFooter className="justify-center items-center pt-0">
                <Chip
                  classNames={{
                    base: "border-1 border-white/30",
                    content: "text-white/90 text-small font-semibold",
                  }}
                  variant="bordered"
                >
                  {skill.name}
                </Chip>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
