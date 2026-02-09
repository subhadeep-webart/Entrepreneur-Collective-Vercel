import ChooseUsCard from "./ChooseUsCard";

const ChooseUsSection = () => {
  return (
    <section className="container">
      <div className="flex flex-col gap-12 items-center justify-center">
        <h3 className="text-5xl font-semibold text-black">Why choose us</h3>
        <div className="flex gap-3 justify-center items-center">
          <ChooseUsCard
            classAvatar={"w-16 h-16"}
            image="https://i.pravatar.cc/150?u=jane"
            description="Phasellus vitae risus egestas, varius tellus at, dignissim lectus. Maecenas ac mi vitae metus rhoncus molestie eu sodales ex. Maecenas nec quam felis. Nulla faucibus facilisis massa"
            name="Smith Andrew"
            descriptionClass="text-[10px]"
            nameClass="text-xs"
          />

          <ChooseUsCard
            image="https://i.pravatar.cc/150?u=jane"
            description="Phasellus vitae risus egestas, varius tellus at, dignissim lectus. Maecenas ac mi vitae metus rhoncus molestie eu sodales ex. Maecenas nec quam felis. Nulla faucibus facilisis massa"
            name="Harry White"
            wrapperClass="max-w-[422] w-[422px] h-[366px]"
          />
          <ChooseUsCard
            classAvatar={"w-16 h-16"}
            image="https://i.pravatar.cc/150?u=jane"
            description="Phasellus vitae risus egestas, varius tellus at, dignissim lectus. Maecenas ac mi vitae metus rhoncus molestie eu sodales ex. Maecenas nec quam felis. Nulla faucibus facilisis massa"
            name="Kenedy Doe"
            descriptionClass="text-[10px]"
            nameClass="text-xs"
          />
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;
