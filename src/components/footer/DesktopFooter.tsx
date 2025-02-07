'use client';
import React from "react";
import { profileData } from "../../lib/constants";
import DesktopSection from "../sections/section/DesktopSection";

const DesktopFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <DesktopSection title={""} headerBg={"white"} contentBg={"white"} mb={"8"}>
      <footer className="w-full flex">
        <div className="w-1/2 flex items-center justify-start">
          <p
            className="text-black font-helveticaLight"
            style={{ fontSize: "20px", lineHeight: "1.4em" }}
          >
            © {new Date().getFullYear()} by {profileData.name}
          </p>
        </div>
        <div className="w-1/2 flex items-center justify-end">
          <p
            className="text-black font-helveticaLight cursor-pointer"
            style={{ fontSize: "20px", lineHeight: "1.4em" }}
            onClick={scrollToTop}
          >
            Back to Top
          </p>
        </div>
      </footer>
    </DesktopSection>
  );
};

export default DesktopFooter;
