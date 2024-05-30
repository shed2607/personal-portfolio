import Image from "next/image";
import ProfilePic from "@/public/pic2.jpg";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

export default function Page() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-customLightGray md:w-full">
      <div className="flex flex-col md:flex-row absolute inset-0">
        <div className="w-full md:w-2/5 h-1/3 md:h-full bg-customDark"></div>
        <div className="w-full md:w-3/5 h-2/3 md:h-full bg-white"></div>
      </div>
      <div className="relative flex items-center justify-center min-h-screen md:pt-20 pt-32">
        <div className="flex flex-col md:flex-row items-center text-center rounded-lg space-y-4 md:space-y-0 md:space-x-6">
          <div className="shadow-lg">
            <div className="flex flex-col justify-center px-20 py-10 bg-customLightGray items-center">
              <div>
                <Image
                  src={ProfilePic}
                  alt="Profile Picture"
                  className="rounded-full mt-4 border-2 border-customDark"
                  width={200}
                  height={200}
                />
              </div>
              <div className="mt-8">
                <h2 className="text-4xl font-bold font-grifter text-gray-900">
                  Oluwaseun
                </h2>
                <h2 className="text-4xl font-bold font-grifter text-gray-900">
                  Adeniyi
                </h2>
              </div>
              <hr className="mt-8 h-1 bg-white w-1/4" />
              <div className="mt-8">
                <p className="text-lg text-gray-900 capitalize font-figtree">
                  software engineer
                </p>
              </div>
            </div>
            <div className="flex justify-evenly items-center py-2 bg-white w-full">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/oluwaseun-adeniyi-634343188/"
              >
                <FaLinkedinIn className="text-customBlue size-7" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/shed2607"
              >
                <FaGithub className="text-customBlue size-7" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/sseun_26/"
              >
                <FaInstagram className="text-customBlue size-7" />
              </a>
            </div>
          </div>
          <div className="p-4 max-w-xl text-left">
            <h1 className="text-9xl font-bold font-grifter text-gray-900">
              Hello!
            </h1>
            <div className="flex justify-start space-x-4 md:px-0 px-4">
              <Link href="/screens/resume">
                <button className="bg-blue-500 text-white px-8 py-2 rounded-full">
                  Resume
                </button>
              </Link>
              <Link href="/screens/projects">
                <button className="border-2 text-black px-8 py-2 rounded-full">
                  Projects
                </button>
              </Link>
            </div>
            <h1 className="text-2xl font-figtree mt-5 text-gray-800 md:px-0 px-4">
              Here's Who I am
            </h1>
            <div className="mt-8 md:px-0 px-4">
              <p className="text-lg mb-4 text-gray-700">
                I'm a Full-stack Mobile Developer who loves to code and create
                awesome digital experiences. With a toolkit full of JavaScript,
                TypeScript, Python, Java, C#, and Dart, I dive into frameworks
                like React Native, Next.js, Node.js, Django, ASP.NET Core, and
                Flutter to build cool web and mobile apps.
              </p>
              <p className="text-lg text-gray-700">
                Graduated from the American University of Nigeria, I'm all about
                crafting high-quality, innovative solutions that make a
                difference. Let's team up and build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
