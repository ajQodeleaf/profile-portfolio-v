import React from 'react'
import { SkillDetail, skillDetails } from '../../../lib/constants';
import DesktopSection from '../section/DesktopSection';

const SkillItem: React.FC<SkillDetail> = ({ skill, description }) => {
    return (
        <div className="w-full">
            <div className="h-12 flex justify-between">
                <div className="w-auto h-full">
                    <div className="font-helveticaLight" style={{ color: 'black', fontSize: '30px' }}>{skill}</div>
                </div>
            </div>
            <div>
                <ul className="list-disc list-inside text-sm font-helveticaLight space-y-2">
                    {description.map((desc, index) => (
                        <li key={index} className='font-helveticaLight' style={{ color: 'black', fontSize: '24px', lineHeight: '1.4em' }}>{desc}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const DesktopSkills = () => {
    return (
        <DesktopSection
            title="SKILLS & EXPERTISE"
            headerBg="white"
            contentBg="white"
        >
            <div className="w-full space-y-20">
                {skillDetails.map((skillDetail, index) => (
                    <SkillItem key={index} {...skillDetail} />
                ))}
            </div>
        </DesktopSection>
    )
}

export default DesktopSkills
