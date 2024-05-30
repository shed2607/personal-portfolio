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
      "Dive into the world of productivity with our Notes App. Implement JWT authentication for secure API endpoints and MongoDB integration for scalable blog data management. Experience seamless CRUD operations with intuitive endpoints, and engage with real-time updates for instant user interaction. Crafted with passion, the responsive frontend built with React Native ensures a delightful mobile experience. With Node.js/Express powering the backend and MongoDB handling the database, this app promises a robust and efficient tech stack.",
    imageUrl: img4,
    date: "January 2024",
  },
  {
    title: "Maintenance Report API",
    role: "Backend Developer",
    description:
      "Join us in revolutionizing maintenance reporting with our API solution. Secure your endpoints with JWT authentication and manage data effortlessly with MongoDB. Enjoy the ease of streamlined CRUD operations and engage users with real-time notifications. Crafted meticulously, this API ensures smooth interaction and seamless scalability. With Node.js/Express at the helm, supported by MongoDB, it's a foundation you can trust.",
    imageUrl: img1,
    date: "April 2024",
  },
  {
    title: "Blog API",
    role: "Backend Developer",
    description:
      "Embark on a journey of digital storytelling with our Blog API. Elevate security with JWT authentication and scale effortlessly with MongoDB. Execute CRUD operations with finesse, ensuring an engaging user experience. Crafted with care, this API enables real-time interactions and fosters community engagement. Powered by NodeJS/Express and MongoDB, it's the perfect foundation for your blog.",
    imageUrl: img2,
    date: "December 2023",
  },
  {
    title: "Restaurant Menu App",
    role: "Backend Developer",
    description:
      "Savor the flavors of innovation with our Restaurant Menu App. Delight in real-time updates courtesy of Firebase, enhancing your dining experience. Navigate through a delectable array of culinary offerings effortlessly. Crafted with flair, the sleek interface beckons exploration. With Flutter at the frontend and Firebase at the backend, it's a seamless blend of taste and technology.",
    imageUrl: img3,
    date: "October 2023",
  },
  {
    title: "Dantis AI",
    role: "Frontend Developer",
    description:
      "Experience the future of trading with our AI Trading Bot. Harnessing the power of artificial intelligence, this bot provides intelligent insights and executes trades automatically based on complex algorithms. Monitor market trends, analyze data, and make informed decisions with ease. While the core functionality and intelligence are driven by backend algorithms, the frontend is designed for seamless user interaction, built using React Native to ensure compatibility across multiple platforms.",
    imageUrl: img5,
    date: "September 2023",
  },

  {
    title: "Bar Management App",
    role: "Full Stack Developer",
    description:
      "Streamline your bar operations with our comprehensive Bar Management App. Manage inventory, track sales, and analyze customer trends all in one place. Implement JWT authentication to secure API endpoints and MongoDB integration for scalable data management. Utilize intuitive endpoints for seamless CRUD operations and enable real-time updates for instant user engagement. Develop a responsive frontend with React for web and React Native for mobile, ensuring a consistent experience across platforms. This solution leverages the MERN stack (MongoDB, Express.js, React, Node.js) for a robust and efficient tech stack.",
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
