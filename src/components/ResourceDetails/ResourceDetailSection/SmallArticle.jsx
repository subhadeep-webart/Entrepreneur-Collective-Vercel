import { Icons, PUBLIC_IMAGES } from "@/assets";
import ArticleDescription from "@/components/Resources/ResourceArticle/ArticleDescription";
import FaceCard from "@/components/shared/Cards/FaceCard";
import IconCard from "@/components/shared/Cards/IconCard";
import LinkButton from "@/components/ui/Buttons/LinkButton";
import CardComponent from "@/components/ui/Cards/CardComponent";
import Image from "next/image";

const SmallArticle = () => {
  return (
    <CardComponent className="!px-0 !py-0">
      <CardComponent.Header>
        <div className="relative w-[299px] h-[304px] border border-neutral-gray">
          <Image
            src={PUBLIC_IMAGES.ResourceImg3}
            alt=" "
            fill
            className="object-cover"
          />
        </div>
      </CardComponent.Header>
      <div>
        <CardComponent.Body className="!pl-6 !pr-14 !pb-6">
          <ArticleDescription
            title="Suspendisse id est est. Nunc non enim aliquet"
            classTitle="text-sm font-bold leading-4"
            description="Mauris ultrices tellus quis velit commodo, eget elementum odio consequat."
            classDescription="text-xs font-normal"
            classDiv="gap-3.5"
            className=""
          />
        </CardComponent.Body>

        <CardComponent.Footer>
          <div className="w-full border-t border-neutral-gray min-h-14 h-14">
            <div className="flex justify-between !px-3.5 !py-5">
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
        </CardComponent.Footer>
      </div>
    </CardComponent>
  );
};

export default SmallArticle;
