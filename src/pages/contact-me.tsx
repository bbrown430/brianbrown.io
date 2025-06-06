import PageTitle from "@/components/typography/page-title";
import LogoButton from "@/components/ui/logo-button";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const ContactMe: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
      <div className="flex flex-col items-center justify-start gap-4">
        <PageTitle title="Contact Me!"></PageTitle>
        <div className="flex flex-row justify-center w-full gap-4">
          <LogoButton
            icon={FaEnvelope}
            link="mailto:brianbrown2002@gmail.com"
          />
          <LogoButton
            icon={FaLinkedin}
            link="https://www.linkedin.com/in/brian-brown-neu/"
          />
          <LogoButton icon={FaGithub} link="https://github.com/bbrown430" />
        </div>
        
        
      </div>
      <img
          src="images/contact-me/myself.jpg"
          alt="a picture of myself"
          className="w-108 rounded-lg"
        />
    </div>
  );
};

export default ContactMe;
