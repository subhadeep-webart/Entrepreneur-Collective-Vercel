import Image from "next/image";
import styles from "./connectpeople.module.css";
import LinkButton from "@/components/ui/Buttons/LinkButton";
import { cn } from "@heroui/react";
const ConnectPeopleCard = ({title,image,classimg,className}) => {
  return (
    <div className="max-w-[646px] w-full max-h-[653px] h-[653px] bg-white border border-neutral-gray relative">
      <h4 className={`${styles.header}`}>{title}</h4>

      <div className={cn("absolute bottom-0",className)}>
        <div className={cn("w-[620px] h-[486px] relative",classimg)}>
          <Image
            src={image}
            alt="home"
            fill
            className=" object-contain"
            unoptimized
          />
        </div>
      </div>
      <div className="absolute bottom-[64px] left-[34%]">
        <LinkButton
          href="#"
          className="w-44 h-12 font-medium text-sm text-foreground"
        >
          Find people
        </LinkButton>
      </div>
    </div>
  );
};

export default ConnectPeopleCard;
