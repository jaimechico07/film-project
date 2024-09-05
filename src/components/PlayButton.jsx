import React from "react";
import { CiPlay1 } from "react-icons/ci";

const PlayButton = () => {
  return (
    <a
      href=""
      className="bg-tertiary-100 flex items-center gap-2 font-semibold text-lg xl:text-[21px] px-3 py-[6px] lg:px-4 lg:py-[8px] 2xl:px-6 2xl:py-[12px] rounded-[15px] w-fit transition-shadow hover:shadow-[0px_0px_35px_4px_#58DDA] hover:shadow-tertiary-100"
    >
      <CiPlay1 size={"1.3em"} /> Play
    </a>
  );
};

export default PlayButton;
