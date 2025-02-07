import React from 'react'
import SocialLinks from '../../../components/SocialLinks'
import { profileData } from '../../../lib/constants'

const MobileProfile = () => {
    return (
        <div className='h-full pt-6 px-5 mb-20'>
            <h1 className="text-[80px] mb-3 font-helveticaLight" style={{ fontSize: "33px", lineHeight: "0.9em" }}>{profileData.name}</h1>
            <div>
                <span className="text-lg font-helveticaBold" style={{ fontSize: '15px', color: 'black' }}>
                    Email:
                </span>
                <a href={profileData.emailLink} className="text-lg font-helveticaRoman ml-2" style={{ fontSize: '15px', color: 'black' }}>
                    {profileData.email}
                </a>
            </div>

            <div className='pb-4 mt-4 mb-5'>
                <SocialLinks socialLinks={profileData.socialLinks} />
            </div>


            <div className="text-left space-y-4 font-helveticaLight" style={{ fontSize: '15px', lineHeight: "1.4em", color: 'black' }}>
                {profileData.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
            <div className="flex items-center justify-center">
                <video autoPlay loop muted className="w-full h-full bg-white">
                    <source src={profileData.videoSrcMobile} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default MobileProfile
