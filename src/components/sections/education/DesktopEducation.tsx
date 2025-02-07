import React from 'react'
import DesktopSection from '../section/DesktopSection';
import { EducationDetail, educationDetails } from '../../../lib/constants';

const EducationItem: React.FC<EducationDetail> = ({ institute, course, location, duration }) => {
    return (
        <div className="w-full">
            <div className="h-24 flex justify-between">
                <div className="w-1/2 h-full">
                    <div className="h-[37%] font-helveticaLight" style={{ color: 'balck',fontSize: '30px' }}>{institute}</div>
                    <div className="h-[24.5%] font-helveticaLight" style={{ color: 'balck',fontSize: '20px' }}>{course}</div>
                    <div className="h-[24.5%] font-helveticaLight" style={{ color: 'balck',fontSize: '20px' }}>{location}</div>
                </div>
                <div className="w-1/2 h-full flex items-start justify-end text-right font-helveticaLight" style={{ color: 'balck',fontSize: '30px' }}> 
                    {duration}
                </div>
            </div>
        </div>
    );
};

const DesktopEducation = () => {
    return (
        <DesktopSection
            title="EDUCATION"
            headerBg="white"    
            contentBg="white"
        >
            <div className="w-full space-y-20">
                {educationDetails.map((educationDetail, index) => (
                    <EducationItem key={index} {...educationDetail} />
                ))}
            </div>
        </DesktopSection>
    )
}

export default DesktopEducation
