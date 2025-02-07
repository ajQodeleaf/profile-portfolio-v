'use client';
import React, { useState, useEffect } from "react";
import DesktopHeader from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

const Header = () => {
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
            {windowWidth >= 768 ? <DesktopHeader /> : <MobileHeader />}
        </div>
    );
};

export default Header;
