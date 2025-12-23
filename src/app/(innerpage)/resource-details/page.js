import ResourceDetailSection from "@/components/ResourceDetails/ResourceDetailSection";
import InnerPageSectionHeader from "@/components/shared/InnerPage/InnerPageSectionHeader";
import { INNER_PAGE_HEADER } from "@/contants/layout_constant";

const ResourceDetailsPage = () => {
  const pageContent = INNER_PAGE_HEADER?.["resource-details"]?.sectionHeader;
  return (
    <>
      <InnerPageSectionHeader
        headerText={pageContent?.headerText ?? ""}
        subText={pageContent?.subText ?? ""}
      />
      <ResourceDetailSection />
    </>
  );
};

export default ResourceDetailsPage;
