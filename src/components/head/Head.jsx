
import { useTheme } from "../../context/ThemeContext.jsx";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Head = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <section className="w-full py-4 shadow-md bg-white dark:bg-[#282e38] transition-colors duration-200">
      <div className="container mx-auto flex justify-between items-center">
        <div className="left">
          <div className="logo">
            <img 
              src="https://tailortalk.ai/_next/static/media/logo.e3857c17.svg" 
              alt="Logo" 
              className="w-10" 
            />
          </div>
        </div>
        <div className="right flex items-center space-x-4">
          <button 
            onClick={toggleTheme} 
            className="text-gray-900 dark:text-white transition-colors duration-200 "
          >
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Head;