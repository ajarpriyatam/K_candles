import { Link } from "react-router-dom";

const SocialIcons = ({ to, icon: Icon, className }) => {
  return (
    <Link 
      to={to}
      className={`text-gray-400 text-lg p-2 rounded-full hover:text-[#FF8C42] hover:bg-[#FF8C42]/10 transition-all duration-300 ${className}`}
    >
      <Icon />
    </Link>
  );
};

export default SocialIcons;