"use client";
import { useUserType } from "@/app/[user_type]/(afterlogin)/UserTypeProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";

const EnquiryTab = () => {
  const pathname = usePathname();
  const userType = useUserType();

  if (!userType) return null;

  const tabs = [
    { label: "Suggested Enquiry", href: `/${userType}/enquiry` },
    { label: "My Enquiry ", href: `/${userType}/enquiry/my-enquiry` },
  ];

  const activeIndex = tabs.findIndex((tab) => tab.href === pathname);

  return (
    <div className="w-fit">
      <div className="relative flex border-b border-foreground">
        {tabs.map((tab, index) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`!pb-9 !pr-20 text-lg text-foreground transition-colors
              ${activeIndex === index ? "font-semibold" : "font-normal"}
            `}
          >
            {tab.label}
          </Link>
        ))}

        <div
          className="absolute bottom-0 h-[3px] bg-foreground transition-transform duration-300"
          style={{
            width: `${100 / tabs.length}%`,
            transform: `translateX(${activeIndex * 100}%)`,
          }}
        />
      </div>
    </div>
  );
};

export default EnquiryTab;
