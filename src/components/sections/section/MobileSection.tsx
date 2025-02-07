"use client";
import React, { useState, useEffect, useRef } from "react";

interface SectionProps {
    title: string;
    headerBg: string;
    contentBg: string;
    children: React.ReactNode;
}

const MobileSection: React.FC<SectionProps> = ({ title, headerBg, contentBg, children }) => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [titleVisible, setTitleVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setTimeout(() => setTitleVisible(true), 150);
                    setScrollProgress(50);
                    setTimeout(() => setScrollProgress(100), 500);
                    setHasAnimated(true);
                }
            },
            { rootMargin: "-50px 0px -50px 0px" }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, [hasAnimated]);

    return (
        <div ref={sectionRef} className="w-full flex flex-col">
            <div className={`w-full px-6 h-[64px] flex items-center relative ${headerBg}`}>
                <h1
                    className={`font-helveticaBold transition-all duration-500 ease-out ${
                        titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                    }`}
                    style={{
                        fontSize: "13px",
                        color: "#0824fc",
                    }}
                >
                    {title}
                </h1>

                <div
                    className="absolute top-0 left-0 h-[1px] bg-[#0824fc] transition-all duration-500 ease-in-out"
                    style={{
                        width: `${scrollProgress}%`,
                    }}
                />
            </div>

            <div className={`w-full px-6 pb-16 flex flex-wrap items-start ${contentBg}`}>
                {children}
            </div>
        </div>
    );
};

export default MobileSection;
