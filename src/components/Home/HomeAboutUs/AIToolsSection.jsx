const { PUBLIC_IMAGES } = require("@/assets");
const { default: ToolsCard } = require("./ToolsCard");

const AIToolsSection=()=>{
    return(
  <div className="max-w-[421px] w-full border border-neutral-gray bg-white !px-8 !py-9 flex flex-col gap-7">
            <h4 className="font-bold text-2xl text-almost-black">
              Top 10 AI tools
            </h4>
            <div className="flex gap-14">
              <ToolsCard image={PUBLIC_IMAGES.Chatgpt} title="ChatGPT" />
              <ToolsCard image={PUBLIC_IMAGES.Grammerly} title="Grammarly" />
            </div>
            <div className="flex gap-14">
              <ToolsCard
                image={PUBLIC_IMAGES.Fireflies}
                title="Fireflies.AI Corp."
              />
              <ToolsCard image={PUBLIC_IMAGES.Gemini} title="Gemini" />
            </div>
            <div className="flex gap-14">
              <ToolsCard image={PUBLIC_IMAGES.Chatgpt} title="ChatGPT" />
              <ToolsCard image={PUBLIC_IMAGES.Grammerly} title="Grammarly" />
            </div>
            <div className="flex gap-14">
              <ToolsCard
                image={PUBLIC_IMAGES.Fireflies}
                title="Fireflies.AI Corp."
              />
              <ToolsCard image={PUBLIC_IMAGES.Gemini} title="Gemini" />
            </div>
          </div>
    )
};

export default AIToolsSection;

