import { getCookie, setCookie } from "cookies-next";
import { useState, useEffect } from "react";

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return getCookie("theme") === "dark";
    });

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
            setCookie("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            setCookie("theme", "light");
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
