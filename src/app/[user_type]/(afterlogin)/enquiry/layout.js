import EnquiryTab from "@/components/Enquiry/EnquiryTab";

export default function EnquiryLayout({ children }) {
  return (
    <section className="after_login_page_section_padding container flex items-center">
      <EnquiryTab />
      {children}
    </section>
  );
}
