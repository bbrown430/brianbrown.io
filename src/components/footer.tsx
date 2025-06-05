import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="pt-0 pb-6 px-4 md:px-20 flex flex-row justify-between items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:justify-between items-center">
        <h6 className="text text-start text-muted-foreground ">
          Contact Me:{" "}
          <a
            href="mailto:brianbrown2002@gmail.com"
            className="underline cursor-pointer hover:text-flexoki-green-400 transition-colors duration-150 ease-in-out"
          >
            brianbrown2002@gmail.com
          </a>
        </h6>
        <h6 className="text text-muted-foreground text-end">
          © {new Date().getFullYear()} Brian Brown. All rights reserved.
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
