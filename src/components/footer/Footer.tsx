'use client';
import React, { useState, useEffect } from "react";
import DesktopFooter from "./DesktopFooter";
import  MobileFooter  from "./MobileFooter";

const Footer = () => {
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
            {windowWidth >= 768 ? <DesktopFooter /> : <MobileFooter />}
        </div>
    );
};

export default Footer;
