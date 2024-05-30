import { Card, SkillsAndTechnologies } from "@/app/components/card";

const experiences = [
  {
    start: "Jan 2023",
    end: "To Date",
    first: "IT Consultant",
    second: "Cozsa Technologies",
    third: "Ibadan, Nigeria",
    desc: [
      "Boosted client satisfaction with timely troubleshooting.",
      "Recommended upgrades for business growth.",
      "Conducted training on new technologies and best practices.",
      "Built vendor relationships for cost-effective solutions.",
      "Managed project progress and client feedback.",
    ],
  },
  {
    start: "Mar 2023",
    end: "Sep 2023",
    first: "Full-stack Mobile Developer",
    second: "Epsilon Development Labs",
    third: "Lagos, Nigeria",
    desc: [
      "Developed solutions for complex client needs.",
      "Enhanced security for user data compliance.",
      "Adopted agile methods for faster project completion.",
      "Launched mobile apps, boosting client revenue.",
      "Integrated APIs for seamless user experiences.",
      "Worked with designers for consistent prototypes.",
      "Reported progress to stakeholders regularly.",
    ],
  },
  {
    start: "Sep 2021",
    end: "May 2023",
    first: "Residential Assistant",
    second: "American University of Nigeria",
    third: "Yola, Nigeria",
    desc: [
      "Resolved conflicts among residents.",
      "Shared progress in staff meetings.",
      "Assisted with move-in and move-out processes.",
      "Addressed resident concerns promptly.",
      "Filed incident reports during shifts.",
      "Trained in firefighting and conflict control.",
    ],
  },
];
const education = [
  {
    start: "Sep 2019",
    end: "May 2023",
    first: "Bachelor of Science",
    second: "Computer Science",
    third: "American University of Nigeria (A.U.N)",
    desc: [
      "Yola, Nigeria",
      "Dean's List, Fall 2021",
      "PetERP(Mobile), An ERP application tailored for a school - Final Project",
    ],
  },
];
const programmingLanguages = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C#",
  "Dart",
  "SQL",
];

const frameworks = [
  "React Native",
  "NextJS",
  "NodeJS",
  "Django",
  "ASP.NET Core",
  "Flutter",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
];

const toolsAndTechnologies = [
  "GIT",
  "Firebase",
  "Redux",
  "Vercel",
  "Render",
  "Postman",
  "VSCode",
  "WIX",
];
export default function Page() {
  return (
    <div className="md:pt-36 pt-36 flex justify-center min-h-screen bg-customLightGray w-full md:px-0 px-8">
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <div>
          <div className="flex justify-center mb-6">
            <div className="w-6 h-6 bg-black mr-2" />
            <h1 className="md:text-4xl text-2xl font-extrabold font-grifter text-gray-800">
              Resume
            </h1>
          </div>
          <div className="flex justify-between w-full items-center">
            <h1 className="text-2xl font-grifter">Experience</h1>
            <a href="/Professional_resume.pdf" download>
              <button className="text-black border-b-2 md:border-2 px-8 py-2 md:rounded-full text-sm md:text-lg">
                Download CV
              </button>
            </a>
          </div>
        </div>
        <div className="mt-6 flex flex-col justify-center items-center w-full h-full">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              start={experience.start}
              end={experience.end}
              first={experience.first}
              second={experience.second}
              third={experience.third}
              desc={experience.desc}
            />
          ))}
        </div>
        <div className="mt-8">
          <div className="flex justify-between w-full items-center">
            <h1 className="text-2xl font-grifter">Education</h1>
          </div>
        </div>
        <div className="mt-6 flex flex-col justify-center items-center w-full h-full">
          {education.map((education, index) => (
            <Card
              key={index}
              start={education.start}
              end={education.end}
              first={education.first}
              second={education.second}
              third={education.third}
              desc={education.desc}
            />
          ))}
        </div>
        <div className="mt-8">
          <div className="flex justify-between w-full items-center">
            <h1 className="text-2xl font-grifter">Education</h1>
          </div>
        </div>
        <div className="mt-6 flex flex-col justify-center items-center w-full h-full">
          <SkillsAndTechnologies
            programmingLanguages={programmingLanguages}
            frameworks={frameworks}
            toolsAndTechnologies={toolsAndTechnologies}
          />
        </div>
      </div>
    </div>
  );
}
