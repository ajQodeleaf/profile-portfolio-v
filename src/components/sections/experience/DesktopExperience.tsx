import DesktopSection from "../section/DesktopSection";
import { Experience, experiences } from "../../../lib/constants";

const ExperienceItem: React.FC<Experience> = ({ role, company, location, duration, details }) => {
    return (
        <div className="w-full">
            <div className="h-24 flex mb-10 justify-between">
                <div className="w-1/2 h-full">
                    <div className="h-[51%] font-helveticaLight" style={{ color: 'balck', fontSize: '30px' }}>{role}</div>
                    <div className="h-[24.5%] font-helveticaLight" style={{ color: 'balck', fontSize: '20px' }}>{company}</div>
                    <div className="h-[24.5%] font-helveticaLight" style={{ color: 'balck', fontSize: '20px' }}>{location}</div>
                </div>
                <div className="w-1/2 h-full flex items-start justify-end text-right font-helveticaLight" style={{ color: 'balck', fontSize: '30px' }}>
                    {duration}
                </div>
            </div>
            
            <div>
                <ul className="list-disc pl-5 text-black text-lg space-y-2">
                    {details.map((detail: string, index: number) => (
                        <li key={index} className="font-helveticaLight" style={{ color: 'balck', fontSize: '24px', lineHeight: '1.4em' }}>{detail}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const DesktopExperience: React.FC = () => {
    return (
        <DesktopSection title="PROFESSIONAL EXPERIENCE" headerBg="white" contentBg="white">
            <div className="w-full space-y-20">
                {experiences.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} />
                ))}
            </div>
        </DesktopSection>
    );
};

export default DesktopExperience;
