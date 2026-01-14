import LinkButton from "@/components/ui/Buttons/LinkButton";
import InputField from "@/components/ui/InputField";

const AgendaForm = () => {
  return (
    <div className="w-full bg-white border border-neutral-gray !px-8 !py-12">
      <div className="flex flex-col gap-7">
        <h3 className="font-semibold text-2xl text-foreground">
          Agenda (Time Segments)
        </h3>
        <div className="flex gap-6">
          <InputField
            label="Start time"
            placeholder="Please select"
            isTime={true}
          />
          <InputField
            label="End time"
            placeholder="Please select"
            isTime={true}
          />
        </div>
        <InputField label="Enter agenda" placeholder="Please enter" />

        <div className="flex gap-6">
          <InputField
            label="Start time"
            placeholder="Please select"
            isTime={true}
          />
          <InputField
            label="End time"
            placeholder="Please select"
            isTime={true}
          />
        </div>
        <InputField label="Enter agenda" placeholder="Please enter" />

        <div className="flex justify-center items-center">
          <LinkButton
            href="#"
            className="bg-transparent border border-foreground w-[197px] h-11"
          >
            Add more slot
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default AgendaForm;
