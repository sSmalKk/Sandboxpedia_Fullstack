import React from "react";
import { Text,Input,Img } from "components/index";
interface Props {
  className?: string;
  passwordone?: string;
  atleastoneone?: string;
}

export default function Login224password({
  passwordone = "Password",
  atleastoneone = "At least one Uppercase, one number, one symbol",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-start w-full gap-[7px]">
        <div className="flex flex-col items-start justify-start w-full gap-[7px]">
          <Text as="p" className="tracking-[0.50px]">
            {passwordone}
          </Text>
          <Input
            name="password"
            placeholder="********"
            prefix={<Img src="images/img_upadlock.svg" alt="u:padlock" />}
            suffix={<Img src="images/img_ueye.svg" alt="u:eye" />}
            className="w-full h-9 px-[13px]"
          />
        </div>
        <Text size="xs" as="p" className="!text-black-900_60 !font-normal">
          {atleastoneone}
        </Text>
      </div>
    </div>
  );
}
