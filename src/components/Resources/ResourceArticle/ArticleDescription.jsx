import { cn } from "@heroui/react";

const ArticleDescription = ({
  classDiv,
  classTitle,
  classDescription,
  title,
  description,
}) => {
  return (
    <div className={cn("max-w-[646px] w-full flex flex-col gap-6", classDiv)}>
      <h3
        className={cn(
          "font-semibold text-2xl text-foreground leading-8 ",
          classTitle
        )}
      >
        {title}
      </h3>

      <p
        className={cn(
          "max-w-[519px] w-full font-normal text-sm text-foreground leading-5",
          classDescription
        )}
      >
        {description}
      </p>
    </div>
  );
};

export default ArticleDescription;
