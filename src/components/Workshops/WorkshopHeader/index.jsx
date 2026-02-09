"use client";
import { useUserType } from "@/app/[user_type]/(afterlogin)/UserTypeProvider";
import LinkButton from "@/components/ui/Buttons/LinkButton";

const WorkshopHeader = () => {
  const userType = useUserType();

  if (!userType) return null;
  return (
    <div className="flex justify-between">
      <h2 className="font-semibold text-lg text-almost-black">Workshops</h2>
      <LinkButton
        href={`/${userType}/create-workshop`}
        className="text-base font-medium text-foreground h-12 w-48"
      >
        Create workshop
      </LinkButton>
    </div>
  );
};

export default WorkshopHeader;
