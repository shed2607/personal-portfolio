// components/Footer.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black py-10 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
      <div className="order-2 md:order-1 flex flex-col md:flex-row md:justify-between items-center space-y-6 md:space-y-0">
        <div className="mx-4 text-center">
          <p className="text-xl font-normal font-figtree text-gray-700">Call</p>
          <p className="text-xs font-light mt-2 font-figtree text-gray-700">
            +234 906 434 5262
          </p>
        </div>
        <div className="mx-4 text-center">
          <p className="text-xl font-normal font-figtree text-gray-700">
            Email
          </p>
          <a
            className="text-xs font-light mt-2 font-figtree text-gray-700"
            href="mailto:oluwaseun.gozie26@gmail.com"
          >
            oluwaseun.gozie26@gmail.com
          </a>
        </div>
        <div className="mx-4 text-center">
          <p className="text-xl font-normal font-figtree text-gray-700">
            Social
          </p>
          <div className="flex justify-center md:justify-between mt-2 space-x-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/oluwaseun-gozie/"
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
          </div>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <p className="text-sm text-gray-900 text-center md:text-left">
          &copy; {new Date().getFullYear()} by{" "}
          <span className="font-bold font-grifter text-gray-900">
            Oluwaseun Adeniyi
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
