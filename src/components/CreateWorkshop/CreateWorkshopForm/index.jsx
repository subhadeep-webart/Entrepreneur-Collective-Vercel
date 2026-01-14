import AgendaForm from "./AgendaForm";
import WorkshopForm from "./WorkshopForm";

const CreateWorkshopForm = () => {
  return (
    <div className="container after_login_page_section_padding">
      <div className="grid grid-cols-12 gap-7">
        <div className="col-span-8">
          <WorkshopForm />
        </div>
        <div className="col-span-4">
          <AgendaForm />
        </div>
      </div>
    </div>
  );
};

export default CreateWorkshopForm;
