import Image from "next/image";
import LikesSection from "./LikesSection";
import { PUBLIC_IMAGES } from "@/assets";
import WriteCommentCard from "@/components/shared/Cards/WriteCommentCard";
import TextSection from "./TextSection";
import ImageSection from "./ImageSection";

const BigArticleSection = () => {
  return (
    <div>
      <h3 className="font-semibold text-2xl text-foreground !mb-4">
        Curabitur nec urna luctus, ultrices quam ac, lacinia nisl. Suspendisse
        euismod risus id fringilla ornare.
      </h3>
      <div className="!mb-11">
        <LikesSection />
      </div>

      <div className="relative w-[960px] h-[326px]">
        <Image
          src={PUBLIC_IMAGES.ResourceDetailImg1}
          alt="Profile"
          fill
          className="object-cover"
        />
      </div>

      <div className="!mt-11">
        <WriteCommentCard />
      </div>

      <div className="!mt-5">
       <TextSection/>
      </div>

      <div className="!mt-14">
        <ImageSection/>
      </div>

       <div className="!mt-11">
        <WriteCommentCard />
      </div>
    </div>
  );
};

export default BigArticleSection;
