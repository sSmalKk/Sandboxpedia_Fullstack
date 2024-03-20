import React from "react";
import { Text } from "./..";

interface Props {
  className?: string;
  label?: string;
  email?: string;
}

export default function Home531inputund({ label, email = "example@example.com", ...props }: Props) {
  return (
    <div {...props}>
      {!!label ? (
        <Text size="md" as="p" className="tracking-[0.50px] !font-inter">
          {label}
        </Text>
      ) : null}
      <div className="flex flex-col items-center justify-start w-full pt-2 gap-2">
        <div className="flex flex-row justify-start w-full">
          <Text size="md" as="p" className="mt-px ml-[3px] tracking-[0.50px] !font-inter">
            {email}
          </Text>
        </div>
        <div className="h-px w-full bg-white-A700" />
      </div>
    </div>
  );
}
