import Image from "next/image";
import styles from "./connectpeople.module.css";
import LinkButton from "@/components/ui/Buttons/LinkButton";
import { cn } from "@heroui/react";
const ConnectPeopleCard = ({ title, image, classimg }) => {
  return (
    <div className="w-full max-h-[653px] h-[400px] lg:h-[653px] bg-white border border-neutral-gray relative col-span-12 lg:col-span-6 flex flex-col items-center">
      <h4 className={`${styles.header}`}>{title}</h4>
      <div className={cn("max-w-[620px] h-[480px] w-full relative", classimg)}>
        <Image
          src={image}
          alt="home"
          fill
          className=" object-contain"
          unoptimized
        />
      </div>
      <div className="absolute bottom-[44px] lg:bottom-[64px] left-[50%] -translate-1/2">
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
