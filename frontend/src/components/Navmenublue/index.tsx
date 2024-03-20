import React from "react";
import { SelectBox, Img, Button } from "./..";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
interface Props {
  className?: string;
}

export default function Navmenublue({ ...props }: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row md:flex-col w-[87%] md:w-full md:h-auto gap-[104px] p-4 md:gap-10 shadow-xs rounded-[3px]">
        <Button className="h-[17px] gap-0.5 my-[5px] text-white-A700 tracking-[1.50px] uppercase text-[10px] font-medium min-w-[83px]">
          MENSAGES
        </Button>
        <Button className="h-[17px] gap-px my-[5px] text-white-A700 tracking-[1.50px] uppercase text-[10px] font-medium min-w-[102px]">
          NOTIFICATION
        </Button>
        <Button className="h-[17px] gap-0.5 my-[5px] text-white-A700 tracking-[1.50px] uppercase text-[10px] font-medium min-w-[138px]">
          SET YOUR UNIVERSE
        </Button>
        <Button className="h-[17px] gap-0.5 my-[5px] text-white-A700 tracking-[1.50px] uppercase text-[10px] font-medium min-w-[117px]">
          CREATE AN ITEM
        </Button>
        <Button className="h-[17px] gap-0.5 my-[5px] text-white-A700 tracking-[1.50px] uppercase text-[10px] font-medium min-w-[133px]">
          help the project
        </Button>
      </div>
      <SelectBox
        indicator={<Img src="images/img_uarrowright.svg" alt="u:arrow-right" />}
        name="button"
        placeholder="my linkedin"
        options={dropDownOptions}
        className="w-auto h-auto pl-4 pr-[35px] gap-px py-2.5 text-colors tracking-[0.50px] font-inter text-xs bg-blue-A700 rounded-[3px]"
      />
    </div>
  );
}
