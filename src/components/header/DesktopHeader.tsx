import React from "react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";

const DesktopHeader = () => {
    const scrollToSection = (id: string) => {
        const section = document.querySelector(id) as HTMLElement | null;
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 100,
                behavior: "smooth",
            });
        }
    };

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/cv.pdf";
        link.download = "Business_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex justify-between bg-white w-full h-36 px-16">
            <div className="flex items-center justify-center font-helveticaRoman" style={{ fontSize: "18px", color: "black" }}>
                Business Resume
            </div>
            <div className="flex items-center space-x-6">
                <nav className="flex space-x-6">
                    <a 
                        href="#resume" 
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("#resume");
                        }} 
                        className={cn("text-black font-helveticaRoman transition-colors duration-300 cursor-pointer")}
                    >
                        Resume
                    </a>
                    <a 
                        href="#contact" 
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("#contact");
                        }} 
                        className={cn("text-black font-helveticaRoman transition-colors duration-300 cursor-pointer")}
                    >
                        Contact
                    </a>
                </nav>
                <Button 
                    className="h-10 w-44 flex items-center justify-center rounded-none transition-opacity duration-300 hover:opacity-80 font-helveticaRoman"
                    style={{ backgroundColor: "#0824FC", fontSize: "16px", color: "white" }}
                    onClick={handleDownload}
                >
                    DOWNLOAD CV
                </Button>
            </div>
        </div>
    );
};

export default DesktopHeader;
