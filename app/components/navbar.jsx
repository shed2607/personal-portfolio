"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const navItems = [
  {
    link: "/screens/about",
    name: "About Me.",
  },
  {
    link: "/screens/resume",
    name: "Resume.",
  },
  {
    link: "/screens/projects",
    name: "Projects.",
  },
  {
    link: "/screens/contacts",
    name: "Contacts.",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="w-6 h-6 bg-black mr-2" />
        <div className="flex items-end flex-col">
          <h1 className="md:text-4xl text-2xl font-extrabold font-grifter text-gray-800">
            Oluwaseun Adeniyi
          </h1>
          <h3 className="md:text-2xl text-xl font-medium font-figtree text-gray-800">
            Software Engineer
          </h3>
        </div>
      </div>
      <div className="hidden md:flex space-x-4">
        {navItems.map((item) => (
          <NavItems key={item.link} link={item.link} name={item.name} />
        ))}
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-black" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-black" />
          )}
        </button>
      </div>
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-20 right-0 w-full bg-white flex flex-col items-center space-y-4 py-4 shadow-md md:hidden"
        >
          {navItems.map((item) => (
            <NavItems
              key={item.link}
              link={item.link}
              name={item.name}
              setIsOpen={setIsOpen}
            />
          ))}
          <div className="flex md:hidden justify-between mt-2 space-x-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/oluwaseun-adeniyi-634343188/"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/shed2607"
            >
              <FaGithub />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/sseun_26/"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:oluwaseun.gozie26@gmail.com"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

const NavItems = ({ link, name, setIsOpen }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(link);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Link
      href={link}
      className={`flex items-center hover:text-blue-400 ${
        isActive
          ? "text-blue-500 underline underline-offset-2"
          : "text-gray-900"
      }`}
      onClick={handleLinkClick}
    >
      <div className="md:text-xl text-lg font-figtree">{name}</div>
    </Link>
  );
};

export default Navbar;
