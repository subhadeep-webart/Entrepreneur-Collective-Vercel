"use client";

import { InputOtp } from "@heroui/react";

const OtpInput = () => {
  return (
    <InputOtp
      length={6}
      variant="bordered"
      classNames={{
        segment:
          "relative bg-transparent shadow-none border-white border-1 " +
          "after:content-[''] after:absolute after:left-2 after:right-2 after:bottom-2 " +
          "after:h-[2px] after:bg-[#8B8B8B]",
        segmentWrapper: "gap-4"
      }}
    />
  );
};

export default OtpInput;
