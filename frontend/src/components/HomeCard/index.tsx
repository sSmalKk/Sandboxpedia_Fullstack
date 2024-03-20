import React from "react";
import { Text, Button, Img } from "./..";

interface Props {
  className?: string;
  subtitlecounter?: string;
  loremipsum?: string;
}

export default function HomeCardnoaction({
  subtitlecounter = "Subtitle 2",
  loremipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full pb-2.5 gap-2.5 bg-blue_gray-900_19 rounded-[10px]">
        <div className="flex flex-row justify-end w-full p-2.5 rounded-tl-[10px] rounded-tr-[10px] bg-gray-200">
          <Button shape="circle" className="w-[24px] mb-14">
            <Img src="images/img_heart_outline.svg" />
          </Button>
        </div>
        <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[5px] md:px-5 max-w-[143px]">
          <Text size="md" as="p" className="!text-black-900_dd tracking-[0.10px] !font-medium">
            {subtitlecounter}
          </Text>
          <Text as="p" className="!text-black-900_99 tracking-[0.40px] !leading-4">
            {loremipsum}
          </Text>
        </div>
      </div>
    </div>
  );
}
