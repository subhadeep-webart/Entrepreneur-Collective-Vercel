import ArticleCard from "./ArticleCard";

const ArticleCardSection = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-7">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
};

export default ArticleCardSection;
