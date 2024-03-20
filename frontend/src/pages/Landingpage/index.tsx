import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, SelectBox, Input } from "../../components";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function LandingpagePage() {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Role Player</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full h-full bg-white-A700">
       
        <div className="flex flex-row md:flex-col justify-between items-start w-full p-5 md:gap-10 bg-indigo-A100_01">
          <div className="flex flex-col items-center justify-start w-[53%] md:w-full ml-20 pb-5 gap-5 my-5 md:ml-5 md:my-0">
            <div className="flex flex-row justify-center w-full">
              <div className="flex w-full h-[477px] max-w-[668px]">
                <Img
                  src="images/img_unsplash_vxhpxyqocfq.png"
                  alt="unsplash_one"
                  className="w-full md:h-auto sm:w-full object-cover rounded-[19px]"
                />
              </div>
            </div>
            <div className="justify-center w-[88%] mt-[20.14px] mb-[19.86px] gap-[50px] grid-cols-3 sm:grid-cols-1 grid">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full pb-2.5 gap-2.5 bg-blue_gray-900_19 rounded-[10px]">
                  <div className="flex flex-row justify-end items-start w-full pb-2.5 px-2.5 rounded-tl-[10px] rounded-tr-[10px] bg-gray-200" />
                  <div className="flex flex-col items-start justify-start w-[89%] md:w-full pt-[3px] gap-[5px]">
                    <Text as="p" className="!text-black-900_dd tracking-[0.10px]">
                      Subtitle 2
                    </Text>
                    <Text size="md" as="p" className="!text-black-900_99 tracking-[0.40px] !leading-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[30%] md:w-full mt-5 mb-[699px] ml-[109px] mr-20 gap-10 md:mx-5 md:my-0">
            <div className="flex flex-col items-center justify-start w-full mt-10 gap-[9px] bg-black-900_99 rounded-[5px]">
              <div className="flex flex-row justify-center w-full pt-0.5">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="h-[56px] w-full bg-black-900_dd" />
                  <Text size="4xl" as="p" className="mt-[-56px] ml-5 md:ml-0 !font-inter">
                    Informativo!
                  </Text>
                </div>
              </div>
              <div className="flex flex-row justify-center w-full">
                <Text as="p" className="tracking-[0.20px] !font-urbanist !font-normal !leading-[19px]">
                  <span className="text-white-A700 tracking-[0.15px] font-roboto text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in cillum pariatur.
                  </span>
                  <span className="text-white-A700"></span>
                  <span className="text-indigo-A700 tracking-[0.15px] font-roboto text-base font-bold">
                    Read more...
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center items-center w-full mt-[0.14px]">
          <div className="flex flex-row justify-center w-full pl-20 pr-14 gap-9 md:px-5 bg-black-900_dd">
            <div className="flex flex-row md:flex-col justify-center items-center w-full pl-20 pr-14 gap-9 md:gap-5 md:px-5 bg-black-900_dd">
              <div className="flex flex-row justify-start w-[32%] md:w-full gap-3">
                <Button size="3xl" shape="round" className="w-[36px]">
                  <Img src="images/img_u_linkedin_alt.svg" />
                </Button>
                <Button size="3xl" shape="round" className="w-[36px]">
                  <Img src="images/img_u_facebook.svg" />
                </Button>
                <Button size="3xl" shape="round" className="w-[36px]">
                  <Img src="images/img_u_instagram.svg" />
                </Button>
                <Button size="3xl" shape="round" className="w-[36px]">
                  <Img src="images/img_u_twitter_alt.svg" />
                </Button>
                <Button size="3xl" shape="round" className="w-[36px]">
                  <Img src="images/img_u_twitter_alt.svg" />
                </Button>
                <Button size="3xl" shape="round" className="w-[36px]">
                  <Img src="images/img_u_twitter_alt.svg" />
                </Button>
                <Button size="3xl" shape="round" className="w-[36px]">
                  <Img src="images/img_u_twitter_alt.svg" />
                </Button>
                <Button size="3xl" shape="round" className="w-[36px]">
                  <Img src="images/img_u_twitter_alt.svg" />
                </Button>
              </div>
              <div className="flex flex-col items-center justify-start w-[64%] md:w-full gap-2.5">
                <div className="flex flex-row md:flex-col justify-center w-full md:gap-5">
                  <div className="flex flex-col items-center justify-start w-[91%] md:w-full gap-7 border-white-A700 border border-solid">
                    <div className="flex flex-col items-start justify-start w-[47%] md:w-full gap-[5px]">
                      <Text size="md" as="p" className="tracking-[0.50px] !font-inter">
                        ContactForm
                      </Text>
                      <div className="flex flex-col items-center justify-start w-full pt-2 gap-2">
                        <div className="flex flex-row justify-start w-full">
                          <Text size="md" as="p" className="mt-px ml-[3px] tracking-[0.50px] !font-inter">
                            example@example.com
                          </Text>
                        </div>
                        <div className="h-px w-full bg-white-A700" />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-[47%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full pt-2 gap-2">
                        <div className="flex flex-row justify-start w-full">
                          <Text size="md" as="p" className="mt-px ml-[3px] tracking-[0.50px] !font-inter">
                            Mensage
                          </Text>
                        </div>
                        <div className="h-px w-full bg-white-A700" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center w-[10%] md:h-auto p-4 border-white-A700 border border-solid bg-blue_gray-900_19 rounded-[3px]">
                    <Text size="md" as="p" className="mt-9 mb-[37px] tracking-[0.50px] !font-inter">
                      Button
                    </Text>
                  </div>
                </div>
                <Text size="md" as="p" className="tracking-[0.50px] !font-inter !leading-4">
                  © 2004 - 2024 Sulake Corporation Ltd. HABBO é marca registrada da Sulake Oy na União Européia, EUA,
                  Japão, China e várias outras jurisdições. Todos os direitos reservados. O Habbo Hotel é recomendado
                  para maiores de 13 anos.
                </Text>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
