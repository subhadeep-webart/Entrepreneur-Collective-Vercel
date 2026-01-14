"use client"
import { PLANS_HEADER } from "@/contants/app_contant";
import { Tab, Tabs } from "@heroui/react";

const PlansTab = () => {
    return (
        <div className="w-full flex justify-center">
            <Tabs aria-label="Select Plans" variant={"underlined"}
                classNames={{
                    tab: "text-base data-[selected=true]:font-semibold"
                }}
            >
                {
                    PLANS_HEADER?.map((headerItem) => (
                        <Tab key={headerItem.key} title={headerItem.title} href={headerItem?.href} />
                    ))
                }
            </Tabs>
        </div>
    )
}

export default PlansTab;