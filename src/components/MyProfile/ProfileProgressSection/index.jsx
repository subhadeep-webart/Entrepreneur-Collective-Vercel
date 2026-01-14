"use client"
import CustomButton from "@/components/ui/Buttons/CustomButton";
import { Progress } from "@heroui/react";

const ProfileProgressSection = () => {
    return (
        <div className="grid grid-cols-12 w-full container">
            <div className="col-span-8 col-start-3 w-full flex items-center gap-14">
                <div className="max-w-36 w-full">
                    <p className="text-iron-gray text-6xl font-light">10 %</p>
                    <span className="inline-block font-semibold text-lg text-almost-black">Of your profile is completed</span>
                </div>
                <div className="flex flex-col gap-4">
                    <Progress aria-label="Loading..." className="max-w-full" value={10} classNames={{
                        indicator: "bg-primary"
                    }} />
                    <p className="text-dark-neutral-gray font-semibold text-sm">Complete your profile to explore Entrepreneur world </p>
                    <span className="inline-block text-xs text-cool-shadow-gray font-medium">Build your professional identity and unlock endless opportunities in the entrepreneur ecosystem. A complete profile helps you connect with innovators, investors, and like-minded professionals shaping the future of business.</span>
                    <CustomButton className="w-48 text-sm font-medium">
                        Complete Profile
                    </CustomButton>
                </div>
            </div>
        </div>
    )
}

export default ProfileProgressSection;