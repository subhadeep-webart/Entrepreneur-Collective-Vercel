const { PUBLIC_IMAGES } = require("@/assets");
const { default: ToolsCard } = require("./ToolsCard");

const AIToolsSection = () => {
  return (
    <div className="max-w-[421px] w-full border border-neutral-gray bg-white !px-6 !py-7 flex flex-col gap-7">
      <h4 className="font-bold text-2xl text-almost-black">Top 10 AI tools</h4>
      <div className="grid grid-cols-2 gap-4 w-[421px]">
        <ToolsCard image={PUBLIC_IMAGES.Chatgpt} title="ChatGPT" />
        <ToolsCard image={PUBLIC_IMAGES.Grammerly} title="Grammarly" />
        <ToolsCard image={PUBLIC_IMAGES.Fireflies} title="Fireflies.AI Corp." />
        <ToolsCard image={PUBLIC_IMAGES.Gemini} title="Gemini" />
        <ToolsCard image={PUBLIC_IMAGES.Chatgpt} title="Notion AI" />
        <ToolsCard image={PUBLIC_IMAGES.Grammerly} title="Zapier Central" />
         <ToolsCard image={PUBLIC_IMAGES.Chatgpt} title="Perplexity" />
        <ToolsCard image={PUBLIC_IMAGES.Grammerly} title="Canva AI" />
         <ToolsCard image={PUBLIC_IMAGES.Chatgpt} title="Jasper" />
        <ToolsCard image={PUBLIC_IMAGES.Grammerly} title="ElevenLabs" />
      </div>
    </div>
  );
};

export default AIToolsSection;
