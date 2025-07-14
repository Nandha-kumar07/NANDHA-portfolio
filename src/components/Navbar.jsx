import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../constants";
import { github, linkedin, twitter } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`padding-x w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Your Name &nbsp;
            <span className="sm:block hidden">| React Developer</span>
          </p>
        </a>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <a href={socialLinks[0].url} target="_blank" rel="noreferrer">
            <img
              src={github}
              alt="github"
              className="w-6 h-6 object-contain cursor-pointer"
            />
          </a>
          <a href={socialLinks[1].url} target="_blank" rel="noreferrer">
            <img
              src={linkedin}
              alt="linkedin"
              className="w-6 h-6 object-contain cursor-pointer"
            />
          </a>
          <a href={socialLinks[2].url} target="_blank" rel="noreferrer">
            <img
              src={twitter}
              alt="twitter"
              className="w-6 h-6 object-contain cursor-pointer"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;