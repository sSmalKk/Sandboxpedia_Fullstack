import React from "react";
import { Text } from "./..";

interface Props {
  className?: string;
  title?: string;
  text?: string;
}

export default function Informativo({ title = "Informativo!", text, ...props }: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-center w-full pt-0.5">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="h-[56px] w-full bg-black-900_dd" />
          <Text size="4xl" as="p" className="mt-[-56px] ml-5 md:ml-0 !font-inter">
            {title}
          </Text>
        </div>
      </div>
      <div className="flex flex-row justify-center w-full">
        <Text as="p" className="tracking-[0.20px] !font-urbanist !font-normal !leading-[19px]">
          <span className="text-white-A700 tracking-[0.15px] font-roboto text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in cillum pariatur.
          </span>
          <span className="text-white-A700"></span>
          <span className="text-indigo-A700 tracking-[0.15px] font-roboto text-base font-bold">Read more...</span>
        </Text>
      </div>
    </div>
  );
}
