import { Textarea } from "@heroui/react";
import FormInput from "./FormInput";
import LinkButton from "@/components/ui/Buttons/LinkButton";

const ReachUsForm = () => {
  return (
    <div className="min-w-[648px] w-full border border-graphite-gray bg-almost-black !px-12 !py-10">
      <div className="flex flex-col gap-5 !mb-10">
        <FormInput placeholder="Full name" type="text" />
        <FormInput placeholder="Email" type="email" />
        <FormInput placeholder="Phone" type="text" />

        <Textarea
          placeholder="Message"
          variant="faded"
          radius="none"
          classNames={{
            inputWrapper: [
              "border border-graphite-gray bg-gunmetal-gray text-white",
              "hover:bg-gunmetal-gray",
              "focus:bg-gunmetal-gray",
              "active:bg-gunmetal-gray",

              "data-[hover=true]:bg-gunmetal-gray",
              "data-[focus=true]:bg-gunmetal-gray",
              "data-[focus-visible=true]:shadow-none",
              "data-[pressed=true]:bg-gunmetal-gray",

              "data-[filled=true]:bg-gunmetal-gray",
              "data-[filled=true]:data-[hover=true]:bg-gunmetal-gray",
              "data-[filled=true]:data-[focus=true]:bg-gunmetal-gray",
            ],
            input:
              "!text-white font-normal placeholder:text-slate-gray !pl-[16px] !pt-[18px] min-h-[166px]  placeholder:font-normal placeholder:text-[13px]",
          }}
        />
      </div>
      <LinkButton
        href="#"
        className="w-40 h-12 font-medium text-sm text-foreground"
      >
        Submit
      </LinkButton>
    </div>
  );
};

export default ReachUsForm;
