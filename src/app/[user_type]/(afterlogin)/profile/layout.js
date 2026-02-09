import ProfilePictureAndBannerSection from "@/components/MyProfile/ProfiePictureAndBannerSection";

const ProfileLayout=({children})=>{
    return(
        <section className="w-full">
            <ProfilePictureAndBannerSection/>
            <div className="container !py-26 grid grid-cols-12 gap-7">
                {children}
            </div>
        </section>
    )
}

export default ProfileLayout;