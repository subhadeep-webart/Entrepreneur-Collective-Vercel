import Image from "next/image";
import ArticleDescription from "./ArticleDescription";
import LinkButton from "@/components/ui/Buttons/LinkButton";
import CardComponent from "@/components/ui/Cards/CardComponent";
import { PUBLIC_IMAGES } from "@/assets";


const ResourceArticleSmallCard = () => {
  return (
    <CardComponent className="!px-0 !py-0 border-none bg-transparent">
      <div className="flex gap-7">
        <CardComponent.Header>
          <div className="relative w-[197px] h-[178px] border border-neutral-gray">
            <Image
              src={PUBLIC_IMAGES.ResourceImg2}
              alt=" "
              fill
              className="object-cover"
            />
          </div>
        </CardComponent.Header>
        <div>
          <CardComponent.Body >
            <ArticleDescription
              title="Fusce scelerisque nibh sit amet quam"
              classTitle="text-xl leading-7"
              description="Maecenas ac mi vitae metus rhoncus molestie eu sodales ex."
              classDescription=""
              classDiv="gap-3"
            />
          </CardComponent.Body>

          <CardComponent.Footer>
            <LinkButton
              href="#"
              className="bg-transparent border border-foreground text-sm font-medium text-foreground h-12 min-w-[185px] w-[185px] !mt-5"
            >
              View details
            </LinkButton>
          </CardComponent.Footer>
        </div>
      </div>
    </CardComponent>
  );
};

export default ResourceArticleSmallCard;
