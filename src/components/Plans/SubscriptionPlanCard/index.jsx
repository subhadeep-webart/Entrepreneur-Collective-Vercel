"use client"
import { useUserType } from "@/app/[user_type]/(afterlogin)/UserTypeProvider";
import { Icons } from "@/assets";
import LinkButton from "@/components/ui/Buttons/LinkButton";
import CardComponent from "@/components/ui/Cards/CardComponent";
import { cn } from "@heroui/react";

const SubscriptionPlanCard = ({ planDetails }) => {
    console.log("Plan Details========>", planDetails);
    const userType = useUserType();
    return (
        <CardComponent className={"!py-0 !px-0"}>
            <CardComponent.Header className={cn("text-[22px] text-white font-semibold flex justify-center items-center !py-5 uppercase", planDetails?.isPremium ? "bg-bright-orange" : "bg-coral-red")}>
                {planDetails?.name}
            </CardComponent.Header>
            <CardComponent.Body className={"!px-2 h-[409px] flex flex-col gap-10"}>
                {
                    planDetails?.features.map((feature, index) => (
                        <div key={feature.id ?? index} className="w-full flex gap-1 items-center !pl-4">
                            <Icons.CircleCheck size={17} fill="#35855f" color="white" />
                            <p className="text-black text-base font-normal">
                                {feature?.name}
                            </p>
                        </div>
                    ))
                }
            </CardComponent.Body>
            <CardComponent.Footer className={"flex flex-col items-center gap-2 !pb-8"}>
                <div className="w-full flex flex-col gap-1 items-center">
                    <p className="text-smoky-black text-lg font-medium">Price</p>
                    <h3 className="text-[32px] font-bold text-smoky-black">$ {planDetails?.price}</h3>
                </div>
                <LinkButton className="w-48" href={`/${userType}/thank-you`}>
                    Upgrade now
                </LinkButton>
            </CardComponent.Footer>
        </CardComponent>
    )
}

export default SubscriptionPlanCard;