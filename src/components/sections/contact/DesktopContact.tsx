import React from 'react'
import { profileData } from '../../../lib/constants';
import SocialLinks from '../../SocialLinks';
import DesktopSection from '../section/DesktopSection';

const DesktopContact = () => {
    return (
        <DesktopSection
            title="CONTACT"
            headerBg="white"
            contentBg="white"
        >
            <div className="space-y-6 mt-6">
                <div>
                    <h3 className="font-helveticaLight" style={{ color: 'black', fontSize: '30px' }}>Email</h3>
                    <p className="font-helveticaRoman" style={{ color: 'black', fontSize: '20px' }}>
                        <a href={profileData.email} className="black">{profileData.email}</a>
                    </p>
                </div>
                <div>
                    <SocialLinks socialLinks={profileData.socialLinks} />
                </div>
            </div>
        </DesktopSection>
    )
}

export default DesktopContact
