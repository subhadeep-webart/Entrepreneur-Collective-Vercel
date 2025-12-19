import { Input } from "@heroui/react";

const CommentInput = () => {
  return (
    <Input
      placeholder="Enter Your Comments Here"
      radius="full"
      type="email"
      classNames={{
        inputWrapper:
          "bg-white shadow-none border border-[#D0D0D0] rounded-full " +
          "!px-5 !py-3 h-[55px] " +
          "data-[hover=true]:bg-white data-[focus=true]:bg-white data-[filled=true]:bg-white",
        input:
          "text-black placeholder:text-[#292929] font-medium text-sm bg-white",
      }}
    />
  );
};

export default CommentInput;
