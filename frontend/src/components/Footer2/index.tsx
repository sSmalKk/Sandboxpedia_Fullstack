import React from "react";
import { Text, Button, Img } from "./..";

interface Props {
  className?: string;
  labelOne?: string;
  email?: string;
  mensage?: string;
  buttonOne?: string;
  description?: string;
}

export default function HomeRowdescription({
  labelOne = "ContactForm",
  email = "example@example.com",
  mensage = "Mensage",
  buttonOne = "Button",
  description = "© 2004 - 2024 Sulake Corporation Ltd. HABBO é marca registrada da Sulake Oy na União Européia, EUA, Japão, China e várias outras jurisdições. Todos os direitos reservados. O Habbo Hotel é recomendado para maiores de 13 anos.",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start w-[32%] gap-3">
        <Button size="sm" shape="round" className="w-[36px]">
          <Img src="images/img_u_linkedin_alt.svg" />
        </Button>
        <Button size="sm" shape="round" className="w-[36px]">
          <Img src="images/img_u_facebook.svg" />
        </Button>
        <Button size="sm" shape="round" className="w-[36px]">
          <Img src="images/img_u_instagram.svg" />
        </Button>
        <Button size="sm" shape="round" className="w-[36px]">
          <Img src="images/img_u_twitter_alt.svg" />
        </Button>
        <Button size="sm" shape="round" className="w-[36px]">
          <Img src="images/img_u_twitter_alt.svg" />
        </Button>
        <Button size="sm" shape="round" className="w-[36px]">
          <Img src="images/img_u_twitter_alt.svg" />
        </Button>
        <Button size="sm" shape="round" className="w-[36px]">
          <Img src="images/img_u_twitter_alt.svg" />
        </Button>
        <Button size="sm" shape="round" className="w-[36px]">
          <Img src="images/img_u_twitter_alt.svg" />
        </Button>
      </div>
      <div className="flex flex-col items-center justify-start w-[64%] gap-2.5">
        <div className="flex flex-row md:flex-col justify-center w-full md:gap-5">
          <div className="flex flex-col items-center justify-start w-[91%] md:w-full gap-7 border-white-A700 border border-solid">
            <div className="flex flex-col items-start justify-start w-[47%] md:w-full gap-[5px]">
              <Text as="p" className="tracking-[0.50px]">
                {labelOne}
              </Text>
              <div className="flex flex-col items-center justify-start w-full pt-2 gap-2">
                <div className="flex flex-row justify-start w-full">
                  <Text as="p" className="mt-px ml-[3px] tracking-[0.50px]">
                    {email}
                  </Text>
                </div>
                <div className="h-px w-full bg-white-A700" />
              </div>
            </div>
            <div className="flex flex-row justify-center w-[47%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full pt-2 gap-2">
                <div className="flex flex-row justify-start w-full">
                  <Text as="p" className="mt-px ml-[3px] tracking-[0.50px]">
                    {mensage}
                  </Text>
                </div>
                <div className="h-px w-full bg-white-A700" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-[10%] md:h-auto p-4 border-white-A700 border border-solid bg-blue_gray-900_19 rounded-[3px]">
            <Text as="p" className="mt-9 mb-[37px] tracking-[0.50px]">
              {buttonOne}
            </Text>
          </div>
        </div>
        <Text as="p" className="tracking-[0.50px] !leading-4">
          {description}
        </Text>
      </div>
    </div>
  );
}
