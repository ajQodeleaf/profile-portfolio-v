'use client';
import React, { useState, useEffect } from "react";
import DesktopProfile from "./DesktopProfile";
import MobileProfile from "./MobileProfile";

const Profile = () => {
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
            {windowWidth >= 768 ? <DesktopProfile /> : <MobileProfile />}
        </div>
    );
};

export default Profile;
