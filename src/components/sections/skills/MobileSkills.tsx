import React from 'react'
import { SkillDetail, skillDetails } from '../../../lib/constants';
import MobileSection from '../section/MobileSection';

const SkillItem: React.FC<SkillDetail> = ({ skill, description }) => {
    return (
        <div className="w-full">
            <div className="h-12 flex justify-between">
                <div className="w-auto h-full">
                    <div className="font-helveticaLight" style={{ color: 'black', fontSize: '22px' }}>{skill}</div>
                </div>
            </div>
            <div className="mt-0">
                <ul className="list-disc list-inside text-sm font-avenirLight space-y-2">
                    {description.map((desc, index) => (
                        <li key={index} className='font-helveticaLight' style={{ color: 'balck', fontSize: '15px', lineHeight: '1.4em' }}>{desc}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const MobileSkills = () => {
    return (
        <MobileSection
            title="SKILLS & EXPERTISE"
            headerBg="white"
            contentBg="white"
        >
            <div className="w-full space-y-12">
                {skillDetails.map((skillDetail, index) => (
                    <SkillItem key={index} {...skillDetail} />
                ))}
            </div>
        </MobileSection>
    )
}

export default MobileSkills
