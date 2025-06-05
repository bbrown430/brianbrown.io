import React from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleDown, FaAddressCard } from "react-icons/fa";
import DropdownLinkButton from "./typography/dropdown-link";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
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
          <div className="relative group">
            <div className="flex flex-row items-center gap-2">
              <h6 className="text-lg font-semibold">Projects</h6>
              <FaAngleDown className="transition-transform duration-100 ease-in-out group-hover:rotate-180" />
            </div>
            <div
              className={`absolute translate-y-8 opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-0 transition-all duration-300 ease-out origin-top sm:origin-top-right z-[500] pointer-events-none group-hover:pointer-events-auto`}
            >
              <div className="px-4 py-4 rounded-xl bg-flexoki-black border-border border-2 text-primary font-semibold text-end flex flex-col gap-2 min-w-max max-w-[calc(100vw-2rem)]">
                <DropdownLinkButton link="/play-piano" name="P.L.A.Y Piano" />
                <DropdownLinkButton link="/smart-blinds" name="Smart Blinds" />
                <DropdownLinkButton
                  link="https://www.searchtimecrisis.com/"
                  name="Search Time Crisis"
                />
                <DropdownLinkButton
                  link="/endless-library"
                  name="Endless Library"
                />
                <DropdownLinkButton
                  link="/robotic-ball-collector"
                  name="Robotic Ball Collector"
                />
                <DropdownLinkButton
                  link="https://bsquareddesigns.webflow.io/"
                  name="B Squared Designs"
                />
                <DropdownLinkButton link="/3d-design" name="3D Design" />
                <DropdownLinkButton
                  link="/repeat-receipts"
                  name="Repeat Receipts"
                />
                <DropdownLinkButton
                  link="https://github.com/bbrown430/brianbrown.io"
                  name="This Website"
                />
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