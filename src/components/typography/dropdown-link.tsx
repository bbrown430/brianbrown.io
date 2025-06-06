import React from "react";
import { useLocation, Link } from "react-router-dom";

interface DropdownLinkButtonProps {
  link: string;
  name: string;
}

const DropdownLinkButton: React.FC<DropdownLinkButtonProps> = ({ link, name }) => {
  const location = useLocation();
  const isExternal = link.startsWith("http");
  const isActive = !isExternal && location.pathname === link;

  const baseClasses =
    "hover:text-flexoki-green-400 transition-colors duration-300 ease-in-out";
  const activeClass = isActive ? "text-flexoki-green-400" : "text-primary";

  if (isExternal) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${activeClass}`}
      >
        {name}
      </a>
    );
  }

  return (
    <Link to={link} className={`${baseClasses} ${activeClass}`}>
      {name}
    </Link>
  );
};

export default DropdownLinkButton;
