import { cn } from "@heroui/react";

const IconCard = ({ icon: Icon, value, size, color ,fill="none", className = "" }) => {
  return (
    <div className={cn("flex gap-1.5 justify-center items-center", className)}>
      <Icon color={color} size={size} fill={fill}/>
      <span className="font-normal text-sm text-foreground">{value}</span>
    </div>
  );
};

export default IconCard;
