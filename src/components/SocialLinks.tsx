import { Linkedin } from "lucide-react";
import Link from "next/link";

interface SocialLinksProps {
    socialLinks: {
        linkedin: string;
    };
}

const SocialLinks: React.FC<SocialLinksProps> = ({ socialLinks }) => {
    return (
        <div className="flex mt-5 space-x-3 items-center justify-flex-start">
            <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin fill="black" size={20} className="cursor-pointer" />
            </Link>
        </div>
    );
};

export default SocialLinks;