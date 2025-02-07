'use client';
import React, { useState, useEffect } from "react";
import DesktopEducation from "./DesktopEducation";
import MobileEducation from "./MobileEducation";

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
            {windowWidth >= 768 ? <DesktopEducation /> : <MobileEducation />}
        </div>
    );
};

export default ProfessionalExperience;
