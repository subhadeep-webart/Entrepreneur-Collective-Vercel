import BigArticleSection from "./BigArticleSection";
import SmallArticleSection from "./SmallArticleSection";

const ResourceDetailSection = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-7">
        <div className="col-span-9">
            <BigArticleSection/>
        </div>
        <div className="col-span-3">
            <SmallArticleSection/>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetailSection;
