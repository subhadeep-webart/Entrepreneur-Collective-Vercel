import ArticleCardSection from "@/components/Resources/ArticleCardSection";
import ResourceArticle from "@/components/Resources/ResourceArticle";
import TabSection from "@/components/Resources/TabSection";
import InnerPageSectionHeader from "@/components/shared/InnerPage/InnerPageSectionHeader";
import { INNER_PAGE_HEADER } from "@/contants/layout_constant";


const ResourcesPage = () => {
  const pageContent = INNER_PAGE_HEADER?.["resources"]?.sectionHeader;
  return (
    <>
      <InnerPageSectionHeader headerText={pageContent?.headerText ?? ""} subText={pageContent?.subText ?? ""} />
      <TabSection />
      <ResourceArticle />
      <ArticleCardSection />
    </>
  );
};

export default ResourcesPage;
