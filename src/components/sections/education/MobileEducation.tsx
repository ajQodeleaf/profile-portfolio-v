import React from 'react'
import MobileSection from '../section/MobileSection';
import { EducationDetail, educationDetails } from '../../../lib/constants';

const EducationItem: React.FC<EducationDetail> = ({ institute, course, location, duration }) => {
    return (
        <div className="w-full">
            <div className="pt-3 pb-4 h-full flex items-start justify-start text-right font-helveticaLight" style={{ color: 'balck', fontSize: '18px' }}>
                {duration}
            </div>
            <div className="flex items-start justify-start font-helveticaLight" style={{ color: 'balck', fontSize: '22px' }}>{institute}</div>
            <div className="font-helveticaLight" style={{ color: 'balck', fontSize: '15px' }}>{course}</div>
            <div className="font-helveticaLight" style={{ color: 'balck', fontSize: '15px' }}>{location}</div>
        </div>
    );
};

const MobileEducation = () => {
    return (
        <MobileSection
            title="EDUCATION"
            headerBg="white"    
            contentBg="white"
        >
            <div className="w-full space-y-10">
                {educationDetails.map((educationDetail, index) => (
                    <EducationItem key={index} {...educationDetail} />
                ))}
            </div>
        </MobileSection>
    )
}

export default MobileEducation
