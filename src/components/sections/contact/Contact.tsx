'use client';
import React, { useState, useEffect } from "react";
import DesktopContact from "./DesktopContact";
import MobileContact from "./MobileContact";

const Contact = () => {
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
            {windowWidth >= 768 ? <DesktopContact /> : <MobileContact />}
        </div>
    );
};

export default Contact;
