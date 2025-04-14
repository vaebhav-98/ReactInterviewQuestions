import useDarkMode from '../components/useDarkMode';
import React from 'react'

const thememode = () => {
    const [isDarkMode, toggleDarkMode] = useDarkMode();

    return (
        <div style={{ padding: "20px" }}>
            <h1>{isDarkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}</h1>
            <button onClick={toggleDarkMode}>Toggle Mode</button>
        </div>
    );
}

export default thememode
