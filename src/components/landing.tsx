// src/components/landing.tsx
import { FaBeer } from "react-icons/fa";

const HoverIconButton = ({ iconColorClass = "text-flexoki-red-400" }) => {
  return (
    <div className={`
      flex items-center justify-center w-20 h-20 rounded-xl
      bg-flexoki-dark-tx hover:bg-flexoki-red-400
      transition-colors duration-300 ease-in-out
      group cursor-pointer
    `}>
      <FaBeer className={`
        w-12 h-12 transition-colors duration-300 ease-in-out
        ${iconColorClass} group-hover:text-flexoki-dark-tx
      `} />
    </div>
  );
};

export function Landing() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <HoverIconButton />
    </div>
  );
}
