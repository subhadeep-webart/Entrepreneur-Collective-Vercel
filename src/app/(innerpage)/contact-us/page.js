import { Icons } from "@/assets";
import InnerPageSectionHeader from "@/components/shared/InnerPage/InnerPageSectionHeader";
import ContactUsForm from "@/components/ui/Forms/ContactUsForm";
import { INNER_PAGE_HEADER } from "@/contants/layout_constant";

const ContactUsPage = () => {
    const pageContent = INNER_PAGE_HEADER?.["contact-us"]?.sectionHeader;
    return (
        <>
            <InnerPageSectionHeader headerText={pageContent?.headerText ?? ""} subText={pageContent?.subText ?? ""} />
            <div className="grid grid-cols-12 gap-7 w-full container">
                <div className="col-span-8 w-full flex flex-col gap-12">
                    <div className="flex flex-col gap-5">
                        <h3 className="text-black font-semibold text-3xl">Fill-up  the form and contact us</h3>
                        <p className="text-cool-gray text-xl font-normal">Nulla libero neque, blandit ut quam vitae</p>
                    </div>
                    <ContactUsForm />
                </div>
                <div className="col-span-4 w-full">
                    <div className="w-full bg-almost-gray flex flex-col gap-7 justify-center h-[326px] !px-9">
                        <h3 className="font-semibold text-3xl text-white">{`Don't be hesitate to say hello`}</h3>
                        <div className="flex gap-4">
                            <Icons.Mail size={18} className="text-white" />
                            <div className="flex flex-col">
                                <p className="font-bold text-sm text-white">Email</p>
                                <span className="text-xs text-white font-normal">abc@gmail.com</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Icons.House size={18} className="text-white" />
                            <div className="flex flex-col">
                                <p className="font-bold text-sm text-white">Address</p>
                                <span className="text-xs text-white font-normal">abc....</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUsPage;