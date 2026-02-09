import WorkshopHeader from "@/components/Workshops/WorkshopHeader";
import WorkshopTab from "@/components/Workshops/WorkshopTab";

export default function WorkshopLayout({ children }) {
  return (
    <section className="after_login_page_section_padding container">
      <WorkshopHeader />
      <WorkshopTab />
      {children}
    </section>
  );
}