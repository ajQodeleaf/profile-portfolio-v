"use client";

interface SectionProps {
  title: string;
  headerBg: string;
  contentBg: string;
  children: React.ReactNode;
  mb?: string;
}

const DesktopSection: React.FC<SectionProps> = ({ title, headerBg, contentBg, mb = "44", children }) => {
  return (
    <div className="w-full px-12 flex flex-col">
      <div>
        <div
          className={`w-full mr-6 mb-8 flex items-center relative ${headerBg}`}
          style={{ minHeight: title ? "60px" : "0px" }}
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-[#0824fc]" />

          {title && (
            <h1 className="font-helveticaBold" style={{ fontSize: "16px", color: "#0824fc" }}>
              {title}
            </h1>
          )}
        </div>
        <div className={`w-full mb-${mb} mr-6 flex flex-wrap items-start ${contentBg}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DesktopSection;
