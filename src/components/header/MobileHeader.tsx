import { Menu } from "lucide-react";
import { Button } from "../ui/button";

export const MobileHeader = () => {
    return (
        <div className="flex flex-col h-28 w-full">
            <div className="flex justify-between h-2/5 bg-yellow-500 w-full">
                <Button
                    className="w-full h-full rounded-none font-helveticaRoman"
                    style={{ backgroundColor: "#0824FC", fontSize: '14px', lineHeight: '1.4em' }}
                >
                    DOWNLOAD CV
                </Button>
            </div>
            <div className="flex justify-between items-center h-3/5 w-full pt-4 pb-7 px-5">
                <div className="text-left text-black font-helveticaRoman"
                    style={{ fontSize: '18px', lineHeight: '1.4em' }}>
                    Business Resume
                </div>
                <div className="text-right">
                    <Menu size={24} color="#0824fc" />
                </div>
            </div>
        </div>
    );
};
