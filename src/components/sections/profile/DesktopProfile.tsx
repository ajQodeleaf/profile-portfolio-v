import SocialLinks from "../../SocialLinks";
import { profileData } from "../../../lib/constants";

export default function ProfileLayout() {
    return (
        <div className="flex h-full mt-20 pb-32 pr-12 pl-6">
            <div className="w-[60%] flex flex-col items-start justify-center text-black p-8">
                <h1 className="text-[80px] font-helveticaLight">{profileData.name}</h1>

                <div>
                    <span className="text-lg font-helveticaBold" style={{ fontSize: '20px', color: 'black' }}>
                        Email:
                    </span>
                    <a href={profileData.emailLink} className="text-lg font-helveticaRoman ml-2" style={{ fontSize: '20px', color: 'black' }}>
                        {profileData.email}
                    </a>
                </div>

                <div className="mt-[-16px]">
                    <SocialLinks socialLinks={profileData.socialLinks} />
                </div>

                <div className="mt-24 text-left space-y-4 font-helveticaLight" style={{ fontSize: '24px', lineHeight:"1.4em",color: 'black' }}>
                    {profileData.description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>

            <div className="w-[40%] h-full bg-white flex items-center justify-center">
                <video autoPlay loop muted className="w-full h-full bg-white">
                    <source src={profileData.videoSrcDesktop} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}
