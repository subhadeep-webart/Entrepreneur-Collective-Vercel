"use client";
import { Icons } from "@/assets";
import IconCard from "../IconCard";
import { Input } from "@heroui/react";

const WriteCommentCard = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-5">
        <IconCard icon={Icons.Heart} color="#DF0000" size={14} />
        <IconCard icon={Icons.MessageCircle} color="#000000" size={14} />

        <IconCard icon={Icons.Share2} color="#000000" size={14} />
      </div>
      <div className="relative">
        <Input
          placeholder="Type your comment here"
          classNames={{
            inputWrapper: [
              "bg-transparent",
              "hover:bg-transparent",
              "focus:bg-transparent",
              "active:bg-transparent",

              "data-[hover=true]:bg-transparent",
              "data-[focus=true]:bg-transparent",
              "data-[focus-visible=true]:shadow-none",
              "data-[pressed=true]:bg-transparent",

              "data-[filled=true]:bg-transparent",
              "data-[filled=true]:data-[hover=true]:bg-transparent",
              "data-[filled=true]:data-[focus=true]:bg-transparent",

              "!shadow-none",
              "border",
              "border-silver-gray",
              "rounded-none",
              "px-0",
            ],
            input: [
              "text-black",
              "font-normal",
              "placeholder:text-foreground",
              "placeholder:font-normal",
              "placeholder:text-xs",
              "placeholder:!pl-4",
            ],
          }}
        />

        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
     
          <button className="text-gray-500 hover:text-gray-700">
            <Icons.Smile size={20} color="#000000" />
          </button>

      
          <label
            htmlFor="file-upload"
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <Icons.Paperclip size={20} color="#000000" />
          </label>
          <input type="file" id="file-upload" className="hidden" />

          {/* Send button */}
          <button className="text-blue-600 hover:text-blue-800">
            <Icons.SendHorizonal size={20} color="#000000" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WriteCommentCard;
