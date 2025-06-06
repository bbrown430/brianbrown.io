import { motion } from "framer-motion";
import LogoButton from "../ui/logo-button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import PageTitle from "../typography/page-title";
import PageSubtitle from "../typography/page-subtitle";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const LandingTypography: React.FC = () => {
  return (
    <motion.div
      className="items-start max-w-sm sm:max-w-md md:max-w-256 lg:max-w-100 xl:max-w-128 sm:p-4 gap-2 flex flex-col mx-2 md:mx-4 mb-4 sm:mb-0"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item}>
        <PageTitle title="Brian Brown" />
      </motion.div>

      <motion.div variants={item}>
        <PageSubtitle
          title="I’m a software engineer based in Boston, MA. I’m passionate about
                creative solutions, UI/UX, and automation."
        />
      </motion.div>

      <motion.div variants={item} className="flex flex-row gap-4 mt-2">
        <LogoButton
          icon={FaLinkedin}
          link="https://www.linkedin.com/in/brian-brown-neu/"
        />
        <LogoButton icon={FaGithub} link="https://github.com/bbrown430" />
      </motion.div>
    </motion.div>
  );
};

export default LandingTypography;
