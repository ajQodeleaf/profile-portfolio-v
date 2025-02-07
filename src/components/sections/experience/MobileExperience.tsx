import MobileSection from "../section/MobileSection";
import { Experience, experiences } from "../../../lib/constants";

const ExperienceItem: React.FC<Experience> = ({ role, company, location, duration, details }) => {
    return (
        <div className="w-full">
            <div className="pt-3 pb-4 h-full flex items-start justify-start text-right font-helveticaLight" style={{ color: 'black', fontSize: '18px' }}>
                {duration}
            </div>
            <div className="flex items-start pt-[10px] pb-[10px] justify-start font-helveticaLight" style={{ color: 'black', fontSize: '22px' }}>{role}</div>
            <div className="font-helveticaLight" style={{ color: 'black', fontSize: '15px' }}>{company}</div>
            <div className="font-helveticaLight" style={{ color: 'black', fontSize: '15px' }}>{location}</div>

            <div className="pt-5">
                <ul className="list-disc pl-5 text-black text-lg space-y-4">
                    {details.map((detail: string, index: number) => (
                        <li key={index} className="font-helveticaLight marker:font-bold" style={{ color: 'black', fontSize: '15px', lineHeight: '1.4em' }}>
                            {detail}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const MobileExperience: React.FC = () => {
    return (
        <MobileSection title="PROFESSIONAL EXPERIENCE" headerBg="white" contentBg="white">
            <div className="w-full space-y-10">
                {experiences.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} />
                ))}
            </div>
        </MobileSection>
    );
};

export default MobileExperience;
