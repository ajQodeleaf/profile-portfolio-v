'use client';
import React, { useState, useEffect } from "react";
import DesktopSkills from "./DesktopSkills";
import MobileSkills from "./MobileSkills";

const Skills = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            {windowWidth >= 768 ? <DesktopSkills /> : <MobileSkills />}
        </div>
    );
};

export default Skills;
