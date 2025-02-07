'use client';
import React, { useState, useEffect } from "react";
import DesktopExperience from "./DesktopExperience";
import MobileExperience from "./MobileExperience";

const ProfessionalExperience = () => {
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
            {windowWidth >= 768 ? <DesktopExperience /> : <MobileExperience />}
        </div>
    );
};

export default ProfessionalExperience;
