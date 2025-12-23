import ResourceArticleCard from "./ResourceArticleCard";
import ResourceArticleSmallCard from "./ResourceArticleSmallCard";

const ResourceArticle = () => {
  return (
    <div className="container !pb-14">
      <div className="grid grid-cols-12 gap-7">
        <div className="col-span-7">
          <ResourceArticleCard />
        </div>
        <div className="col-span-5">
          <div className="flex flex-col gap-7">
            <ResourceArticleSmallCard />
            <ResourceArticleSmallCard />
            <ResourceArticleSmallCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceArticle;
