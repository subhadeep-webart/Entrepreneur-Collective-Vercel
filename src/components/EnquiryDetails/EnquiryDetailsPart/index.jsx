import CardComponent from "@/components/ui/Cards/CardComponent";

const EnquiryDetailsPart = () => {
  return (
    <CardComponent>
      <CardComponent.Body className={"flex flex-col gap-4"}>
        <div className="flex flex-col gap-1">
          <h4 className="text-base font-semibold text-gunmetal-gray">
            What do you need help with?
          </h4>
          <span className="inline-text text-graphite-gray text-base">
            Web developer
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-base font-semibold text-gunmetal-gray">
            Location
          </h4>
          <span className="inline-text text-graphite-gray text-base">Usa</span>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-base font-semibold text-gunmetal-gray">
            Description
          </h4>
          <span className="inline-text text-graphite-gray text-base">
            Nam eu pellentesque ipsum, non posuere dui. Integer eu lectus quis
            ex maximus bibendum. Phasellus condimentum velit ac bibendum
            tincidunt. Vestibulum quis arcu quis quam facilisis tempor in nec
            lorem. Duis sagittis lacus eu mi facilisis, non egestas metus
            hendrerit. Praesent mollis id arcu ut bibendum. Fusce cursus euismod
            sodales. Ut vel tellus id purus imperdiet malesuada. Maecenas non
            porta quam. Aliquam erat volutpat. Maecenas ut dapibus ante, vel
            auctor massa.
          </span>
        </div>
      </CardComponent.Body>
    </CardComponent>
  );
};

export default EnquiryDetailsPart;
