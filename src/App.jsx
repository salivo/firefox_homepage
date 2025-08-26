import React, { useEffect, useState } from "react";
import { FaYoutube, FaGithub, FaMusic, FaRobot, FaGlobe } from "react-icons/fa";
import "./App.css";

const links = [
  { name: "YouTube", url: "https://www.youtube.com", icon: <FaYoutube /> },
  { name: "Music", url: "https://music.youtube.com", icon: <FaMusic /> },
  { name: "GitHub", url: "https://github.com", icon: <FaGithub /> },
  { name: "ChatGPT", url: "https://chat.openai.com", icon: <FaRobot /> },
  {
    name: "Translate",
    url: "https://translate.google.com",
    icon: <FaGlobe />,
  },
];

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="chooser-container">
      <div className="clock">{time.toLocaleTimeString()}</div>
      <div className="tiles">
        {links.map((link) => (
          <a key={link.name} href={link.url} className="tile">
            <div className="icon">{link.icon}</div>
            <div className="name">{link.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
