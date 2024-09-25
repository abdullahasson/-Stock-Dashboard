// react
import { useContext } from "react";
// context
import ThemeContext from "../context/ThemeContext";

const ThemeIcon = () => {

    const { darkMode, setDarkMode } = useContext(ThemeContext);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };

    return (
        <button
        onClick={toggleDarkMode}
        className={`rounded-lg border-1 border-neutral-400 p-2 absolute right-8 xl:right-32 shadow-lg transition duration-300 hover:scale-125 ${
            darkMode ? "shadow-gray-800" : null
        }`}
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-8 w-8 cursor-pointer stroke-1 ${
                    darkMode
                        ? "fill-yellow-400 stroke-yellow-400"
                        : "fill-none stroke-neutral-400"
                    }`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
        </button>
    )
}

export default ThemeIcon
