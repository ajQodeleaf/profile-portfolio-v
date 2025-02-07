'use client';
import React from "react";
import { profileData } from "../../lib/constants";
import MobileSection from "../sections/section/MobileSection";

const MobileFooter = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <MobileSection title={""} headerBg={"white"} contentBg={"white"}>
            <footer className="w-full h-full bg-red-500 px-0 flex flex-col">
                <div className="w-full h-1/2 flex justify-end items-center">
                    <p
                        className="text-black font-helveticaLight cursor-pointer"
                        style={{ fontSize: "16px", lineHeight: "1.4em" }}
                        onClick={scrollToTop}
                    >
                        Back to Top
                    </p>
                </div>
                <div className="w-full h-1/2 flex justify-start items-start">
                    <p className="text-black font-helveticaLight text-center" style={{ fontSize: "14px", lineHeight: "1.4em" }}>
                        © {new Date().getFullYear()} by {profileData.name}
                    </p>
                </div>
            </footer>
        </MobileSection>
    );
};

export default MobileFooter;
