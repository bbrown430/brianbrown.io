import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleDown, FaAddressCard } from "react-icons/fa";
import DropdownLinkButton from "./typography/dropdown-link";
import { getHeaderProjects } from "../data/projects";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Get projects data for header dropdown
  const headerProjects = getHeaderProjects();

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const toggleDropdown = () => {
    if (isTouchDevice) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownNavigation = (path: string) => {
    setIsDropdownOpen(false);
    if (path.startsWith("http")) {
      window.open(path, "_blank");
    } else {
      handleNavigation(path);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background z-[500000000] border-b py-4 px-10 border-border">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center">
        <a onClick={() => handleNavigation("/")} className="cursor-pointer">
          <h4 className="text-xl sm:text-3xl font-bold text-primary hover:text-flexoki-green-400 transition-colors duration-300 ease-in-out">
            Brian Brown
          </h4>
        </a>
        <div className="flex flex-row items-center gap-8">
          <div className="relative group" ref={dropdownRef}>
            <div
              className="flex flex-row items-center gap-2 cursor-pointer"
              onClick={toggleDropdown}
            >
              <h6 className="text-lg font-semibold">Projects</h6>
              <FaAngleDown
                className={`transition-transform duration-100 ease-in-out ${
                  isDropdownOpen ? "rotate-180" : "group-hover:rotate-180"
                }`}
              />
            </div>
            <div
              className={`absolute translate-y-2 opacity-0 scale-100 ${
                isDropdownOpen
                  ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                  : "group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto"
              } left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-0 transition-all duration-300 ease-out origin-top sm:origin-top-right z-[500]`}
            >
              <div className="px-4 py-4 rounded-xl bg-flexoki-black border-border border-2 text-primary font-semibold text-end flex flex-col gap-2 min-w-max max-w-[calc(100vw-2rem)]">
                {headerProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => handleDropdownNavigation(project.path)}
                  >
                    <DropdownLinkButton
                      link={project.path}
                      name={project.title}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <a
            onClick={() => handleNavigation("/contact-me")}
            className="cursor-pointer flex items-center gap-2"
          >
            <h4 className="text-lg font-semibold text-primary hover:text-flexoki-green-400 transition-colors duration-300 ease-in-out hidden sm:block">
              Contact Me
            </h4>

            <FaAddressCard className="block sm:hidden text-xl text-primary hover:text-flexoki-green-400 transition-colors duration-300 ease-in-out" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;