import React, { useState } from "react";
import Project from "./Project";
import "./components.css"
import MoodMatcher from "./assets/images/moodmatcher.png"
import TechiesToday from "./assets/images/techiestoday.png"
import NoteTaker from "./assets/images/notetaker.png"
import GamingForum from "./assets/images/gamingforum.png"
import WeatherApp from "./assets/images/weatherapp.png"
import PasswordGenerator from "./assets/images/passwordgenerator.png"

function Portfolio() {
  const [projects] = useState([
    {
        title: "Mood Matcher",
        link: "https://saharkichi.github.io/mood-matcher/",
        repo: "https://github.com/saharkichi/mood-matcher",
        image: MoodMatcher
    },
    {
        title: "Techies Today",
        link: "https://stark-refuge-69347.herokuapp.com/",
        repo: "https://github.com/linklg1/TechiesToday.git",
        image: TechiesToday
    },
    {
        title: "Note-Taker",
        link: "https://pacific-ravine-86012.herokuapp.com/",
        repo: "https://github.com/linklg1/Note-Taker",
        image: NoteTaker
    },
    {
        title: "Gaming Forum",
        link: "https://serene-reaches-32005.herokuapp.com/",
        repo: "https://github.com/RGarrettLee/gaming-forum",
        image: GamingForum
    },
    {
        title: "Weather App",
        link: "https://linklg1.github.io/WeatherTracker/",
        repo: "https://github.com/linklg1/WeatherTracker",
        image: WeatherApp
    },
    {
        title: "Password Generator",
        link: "https://linklg1.github.io/PasswordGenerator/",
        repo: "https://github.com/linklg1/PasswordGenerator",
        image: PasswordGenerator
    }
]);

return (
    <div>
        {projects.map((project, index) => (
            <Project project={project} key={"project" + index} id="project" />
        ))}        
    </div>
 );
}


export default Portfolio