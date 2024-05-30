import Image from "next/image";
import img1 from "@/public/images/img1.png";
import img2 from "@/public/images/img3.png";
import img3 from "@/public/images/img4.png";
import img4 from "@/public/images/notes.png";
import img5 from "@/public/images/img5.png";
import img6 from "@/public/images/img6.png";
import { ProjectCard } from "@/app/components/card";

const projects = [
  {
    title: "Notes App",
    role: "Full-stack Developer",
    description:
      "Developed a Notes App focused on enhancing productivity. Implemented JWT authentication for securing API endpoints and integrated MongoDB for managing scalable blog data. Designed intuitive CRUD operations and real-time updates for user interactions. The responsive frontend was built with React Native, while the backend was powered by Node.js/Express and MongoDB, offering a robust and efficient tech stack.",
    imageUrl: img4,
    date: "January 2024",
  },
  {
    title: "Maintenance Report API",
    role: "Backend Developer",
    description:
      "Created a Maintenance Report API to streamline reporting processes. Secured endpoints with JWT authentication and managed data using MongoDB. Designed streamlined CRUD operations and incorporated real-time notifications. Built with Node.js/Express and supported by MongoDB, this project aimed at ensuring smooth interaction and scalability.",
    imageUrl: img1,
    date: "April 2024",
  },
  {
    title: "Blog API",
    role: "Backend Developer",
    description:
      "Developed a Blog API to support digital storytelling. Enhanced security with JWT authentication and implemented MongoDB for scalability. Designed efficient CRUD operations to improve user experience. Powered by Node.js/Express and MongoDB, this project enabled real-time interactions and fostered community engagement.",
    imageUrl: img2,
    date: "December 2023",
  },
  {
    title: "Restaurant Menu App",
    role: "Backend Developer",
    description:
      "Built a Restaurant Menu App to enhance the dining experience with real-time updates via Firebase. Developed a user-friendly interface to navigate through menu options. Utilized Flutter for the frontend and Firebase for the backend, blending taste and technology seamlessly.",
    imageUrl: img3,
    date: "October 2023",
  },
  {
    title: "Dantis AI",
    role: "Frontend Developer",
    description:
      "Created an AI Trading Bot for automated trading insights. The bot provided intelligent market analysis and executed trades based on complex algorithms. Developed a frontend with React Native to ensure cross-platform compatibility, focusing on seamless user interaction while backend algorithms handled core functionality.",
    imageUrl: img5,
    date: "September 2023",
  },
  {
    title: "Bar Management App",
    role: "Full Stack Developer",
    description:
      "Developed a Bar Management App to streamline bar operations including inventory management, sales tracking, and customer trend analysis. Implemented JWT authentication for securing API endpoints and integrated MongoDB for scalable data management. Created intuitive CRUD operations and real-time updates for user engagement. Built a responsive frontend with React for web, leveraging the MERN stack (MongoDB, Express.js, React, Node.js) for a robust solution.",
    imageUrl: img6,
    date: "May 2024",
  },
];

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen pt-36 bg-customLightGray w-full md:px-0 px-6 pb-10">
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <div className="flex justify-center mb-6">
          <div className="w-6 h-6 bg-black mr-2" />
          <h1 className="md:text-4xl text-2xl font-extrabold font-grifter text-gray-800">
            Projects
          </h1>
        </div>
        <div className="text-center">
          <p className="text-lg mb-8">
            Below is a showcase of projects I've worked on, encompassing both
            personal endeavors and freelance projects completed for various
            companies in the past.
          </p>

          <div className="loader mb-12"></div>
        </div>
        <div className="flex flex-col items-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              role={project.role}
              description={project.description}
              imageUrl={project.imageUrl}
              date={project.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
