import CardComponent from "@/components/ui/Cards/CardComponent";
import Image from "next/image";
import { Icons, PUBLIC_IMAGES } from "@/assets";
import LinkButton from "@/components/ui/Buttons/LinkButton";
import ArticleDescription from "./ArticleDescription";
import IconCard from "@/components/shared/Cards/IconCard";

const ResourceArticleCard = () => {
  return (
    <CardComponent className="!px-0 !py-0 border-none bg-transparent gap-0">
      <CardComponent.Header>
        <div className="relative w-[735px] h-[392px] border border-neutral-gray">
          <Image
            src={PUBLIC_IMAGES.ResourceImg1}
            alt=" "
            fill
            className="object-cover"
          />
        </div>
      </CardComponent.Header>
      <CardComponent.Body className="!pt-8 !pb-5">
        <ArticleDescription
          title=" Mauris a sem cursus, placerat urna quis, sodales ligula. Curabitur
            eleifend purus et felis."
          description="Phasellus vitae risus egestas, varius tellus at, dignissim lectus.
            Maecenas ac mi vitae metus rhoncus molestie eu sodales ex."
        />
        <p className="font-normal text-sm text-foreground leading-5 !mt-6">
          Maecenas nec quam felis. Nulla faucibus facilisis massa
        </p>
      </CardComponent.Body>
      <CardComponent.Footer>
        <div className="flex justify-between items-center">
          <h4 className="font-semibold text-sm text-foreground">
            Thomas Frey <span className="font-normal"> Jun 13, 2025 </span>
          </h4>
          <div className="flex gap-9">
            <IconCard
              icon={Icons.Heart}
              value="12K"
              color="#DF0000"
              size={14}
            />
            <IconCard
              icon={Icons.MessageCircle}
              value="500"
              color="#000000"
              size={14}
            />
            <IconCard
              icon={Icons.Share2}
              value="120"
              color="#000000"
              size={14}
            />
          </div>
        </div>
        <LinkButton
          href="#"
          className="bg-transparent border border-foreground text-sm font-medium text-foreground h-12 min-w-[185px] w-[185px] !mt-7"
        >
          View details
        </LinkButton>
      </CardComponent.Footer>
    </CardComponent>
  );
};

export default ResourceArticleCard;
