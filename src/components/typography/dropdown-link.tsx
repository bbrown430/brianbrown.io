import { useNavigate } from "react-router-dom";

interface DropdownLinkButtonProps {
  link: string;
  name: string;
}

const DropdownLinkButton: React.FC<DropdownLinkButtonProps> = ({ link, name }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (/^https?:\/\//i.test(link)) {
      window.open(link, "_blank");
    } else {
      navigate(link);
    }
  };

  return (
    <button
      onClick={handleNavigate}
      className="block transition-colors ease-in-out duration-150 hover:text-flexoki-green-400 whitespace-nowrap text-right cursor-pointer"
    >
      {name}
    </button>
  );
};

export default DropdownLinkButton;
