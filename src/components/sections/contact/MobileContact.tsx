import React from 'react'
import SocialLinks from '../../SocialLinks';
import MobileSection from '../section/MobileSection';
import { profileData } from '../../../lib/constants';

const MobileContact = () => {
    return (
        <MobileSection
            title="CONTACT"
            headerBg="white"
            contentBg="white"
        >
            <div className="w-full space-y-6">
                <div>
                    <h3 className="font-helveticaLight pt-5 pb-0" style={{ color: 'black', fontSize: '22px' }}>Email</h3>
                    <p className="font-helveticaLight" style={{ color: 'black', fontSize: '15px' }}>
                        <a href={profileData.email} className="black">{profileData.email}</a>
                    </p>
                </div>
                <div>
                    <SocialLinks socialLinks={profileData.socialLinks} />
                </div>
            </div>
        </MobileSection>
    )
}

export default MobileContact
