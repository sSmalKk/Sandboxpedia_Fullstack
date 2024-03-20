import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../components/assets/images/close";
import { Text, Button, Input, Img } from "../../components";

export default function PediaPage() {
  const [searchBarValue40, setSearchBarValue40] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Role Player</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <header className="flex flex-row md:flex-col justify-between items-center w-full md:h-auto p-[5px] md:gap-10 bg-black-900_60">
          <Img src="images/img_u_blogger.svg" alt="ubloggerone_one" className="h-[101px] ml-[75px] md:ml-5" />
          <Text size="3xl" as="p" className="w-[24%] !text-[39.63px]">
            Come to join us today!
          </Text>
          <div className="flex flex-col items-center justify-start w-[33%] mr-[75px] gap-[5px] p-5 md:mr-5 bg-black-900_99 rounded-[3px]">
            <div className="flex flex-row justify-center w-full md:px-5 max-w-[390px]">
              <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-col items-start justify-start w-[28%] gap-px">
                  <div className="flex flex-row justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-[80%] gap-px py-[3px]">
                      <Text size="xl" as="p" className="tracking-[0.15px]">
                        heading
                      </Text>
                      <Text as="p" className="mb-[13px] !text-gray-300 tracking-[0.25px] !font-normal !leading-5">
                        <>
                          Lorem ipsum
                          <br />
                          dolor sit{" "}
                        </>
                      </Text>
                    </div>
                  </div>
                  <Text as="p" className="tracking-[0.10px] !font-robotoflex">
                    Title here
                  </Text>
                </div>
                <div className="h-[102px] w-[31%] relative">
                  <Img
                    src="images/img_10_rectangle.png"
                    alt="image_one"
                    className="justify-center h-[102px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[14px]"
                  />
                  <div className="flex flex-col items-end justify-start w-[37%] h-max gap-[66px] right-0 bottom-0 top-0 m-auto absolute">
                    <div className="flex flex-row justify-end w-full">
                      <Text size="md" as="p" className="!text-gray-300 tracking-[0.40px] text-right">
                        Caption
                      </Text>
                    </div>
                    <Text
                      size="md"
                      as="p"
                      className="!text-black-900_99 tracking-[0.50px] !font-robotoflex !font-medium"
                    >
                      38%
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[4px] w-full bg-indigo-A700_19 relative rounded-sm">
              <div style={{ width: "43%" }} className="h-full bg-blue-A700 absolute rounded-sm" />
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-row md:flex-col justify-start items-center w-full pl-20 pr-14 gap-2.5 md:gap-5 md:px-5">
              <div className="flex flex-row sm:flex-col justify-between w-[56%] md:h-auto p-4 sm:gap-10 bg-white-A700 shadow-xs rounded-[3px]">
                <div className="flex flex-row gap-[68px] my-[5px] md:gap-10 sm:my-0">
                  <Button className="h-[17px] gap-0.5 text-black-900_99 tracking-[1.50px] uppercase text-[10px] font-medium min-w-[52px]">
                    HOME
                  </Button>
                  <Button className="h-[17px] gap-0.5 text-black-900_99 tracking-[1.50px] uppercase text-[10px] font-medium min-w-[56px]">
                    STORE
                  </Button>
                </div>
                <div className="flex flex-row justify-start items-start w-[9%] sm:w-full gap-0.5">
                  <div className="flex flex-col items-center justify-start h-[17px] w-[17px] p-0.5">
                    <div className="flex flex-col items-center justify-start h-[13px] w-[13px]">
                      <div className="flex flex-col h-[13px] w-[13px] gap-0.5">
                        <div className="flex flex-row justify-start w-full gap-0.5">
                          <Img src="images/img_vector.svg" alt="vectorone_one" className="h-[5px] w-[5px]" />
                          <Img src="images/img_vector.svg" alt="vectorthree_one" className="h-[5px] w-[5px]" />
                        </div>
                        <div className="flex flex-row justify-start w-full gap-0.5">
                          <Img src="images/img_vector.svg" alt="vectorone_one" className="h-[5px] w-[5px]" />
                          <Img src="images/img_vector.svg" alt="vectorthree_one" className="h-[5px] w-[5px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text size="s" as="p" className="mt-0.5 !text-black-900_99 tracking-[1.50px] uppercase !font-medium">
                    PEDIA
                  </Text>
                </div>
                <div className="flex flex-row gap-[68px] md:gap-10">
                  <Button className="h-[17px] gap-px text-black-900_99 tracking-[1.50px] uppercase text-[10px] font-medium min-w-[103px]">
                    BE A CREATOR
                  </Button>
                  <Button className="h-[17px] gap-0.5 text-black-900_99 tracking-[1.50px] uppercase text-[10px] font-medium min-w-[80px]">
                    DONATION
                  </Button>
                </div>
              </div>
              <div className="flex flex-row sm:flex-col justify-start items-center w-[42%] md:w-full gap-2.5 sm:gap-5">
                <Input
                  size="md"
                  
                  name="search"
                  placeholder="Search"
                  value={searchBarValue40}
                  onChange={(e: string) => setSearchBarValue40(e)}
                  prefix={<Img src="images/img_search.svg" alt="search" className="cursor-pointer" />}
                  suffix={
                    searchBarValue40?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue40("")} height={14} width={14} fillColor="#000000ff" />
                    ) : null
                  }
                  className="w-[66%] sm:w-full gap-[15px] text-black-900_60 tracking-[0.50px] font-inter"
                />
                <Button
                  color="green_700"
                  size="4xl"
                  
                  rightIcon={<Img src="images/img_uarrowright.svg" alt="u:arrow-right" />}
                  className="gap-2 tracking-[0.50px] font-inter min-w-[160px]"
                >
                  Join in a Univese
                </Button>
              </div>
            </div>
            <div className="flex flex-row md:flex-col justify-start items-center w-full pl-20 pr-14 gap-2.5 md:gap-5 md:px-5 bg-deep_purple-900">
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
              <Button
                color="blue_A700"
                size="4xl"
                
                rightIcon={<Img src="images/img_uarrowright.svg" alt="u:arrow-right" />}
                className="gap-2 tracking-[0.50px] font-inter min-w-[125px]"
              >
                my linkedin
              </Button>
            </div>
          </div>
          <div className="flex flex-row md:flex-col justify-between items-start w-full p-5 md:gap-10 bg-indigo-A100_01">
            <div className="flex flex-col items-center justify-start w-[53%] md:w-full ml-[60px] pb-5 gap-5 md:ml-5">
              <div className="flex flex-row justify-center w-full">
                <Img
                  src="images/img_unsplash_vxhpxyqocfq.png"
                  alt="unsplashone_one"
                  className="w-full md:h-auto sm:w-full object-cover rounded-[19px]"
                />
              </div>
              <div className="justify-center w-[88%] gap-[50px] grid-cols-3 sm:grid-cols-1 sm:gap-5 grid">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full pb-2.5 gap-2.5 bg-blue_gray-900_19 rounded-[10px]">
                    <div className="flex flex-row justify-end w-full p-2.5 rounded-tl-[10px] rounded-tr-[10px] bg-gray-200">
                      <Button shape="circle" className="w-[24px] mb-14">
                        <Img src="images/img_heart_outline.svg" />
                      </Button>
                    </div>
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
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full pb-2.5 gap-2.5 bg-blue_gray-900_19 rounded-[10px]">
                    <div className="flex flex-row justify-end w-full p-2.5 rounded-tl-[10px] rounded-tr-[10px] bg-gray-200">
                      <Button shape="circle" className="w-[24px] mb-14">
                        <Img src="images/img_heart_outline.svg" />
                      </Button>
                    </div>
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
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full pb-2.5 gap-2.5 bg-blue_gray-900_19 rounded-[10px]">
                    <div className="flex flex-row justify-end w-full p-2.5 rounded-tl-[10px] rounded-tr-[10px] bg-gray-200">
                      <Button shape="circle" className="w-[24px] mb-14">
                        <Img src="images/img_heart_outline.svg" />
                      </Button>
                    </div>
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
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full pb-2.5 gap-2.5 bg-blue_gray-900_19 rounded-[10px]">
                    <div className="flex flex-row justify-end w-full p-2.5 rounded-tl-[10px] rounded-tr-[10px] bg-gray-200">
                      <Button shape="circle" className="w-[24px] mb-14">
                        <Img src="images/img_heart_outline.svg" />
                      </Button>
                    </div>
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
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full pb-2.5 gap-2.5 bg-blue_gray-900_19 rounded-[10px]">
                    <div className="flex flex-row justify-end w-full p-2.5 rounded-tl-[10px] rounded-tr-[10px] bg-gray-200">
                      <Button shape="circle" className="w-[24px] mb-14">
                        <Img src="images/img_heart_outline.svg" />
                      </Button>
                    </div>
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
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full pb-2.5 gap-2.5 bg-blue_gray-900_19 rounded-[10px]">
                    <div className="flex flex-row justify-end w-full p-2.5 rounded-tl-[10px] rounded-tr-[10px] bg-gray-200">
                      <Button shape="circle" className="w-[24px] mb-14">
                        <Img src="images/img_heart_outline.svg" />
                      </Button>
                    </div>
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
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full pb-2.5 gap-2.5 bg-blue_gray-900_19 rounded-[10px]">
                    <div className="flex flex-row justify-end w-full p-2.5 rounded-tl-[10px] rounded-tr-[10px] bg-gray-200">
                      <Button shape="circle" className="w-[24px] mb-14">
                        <Img src="images/img_heart_outline.svg" />
                      </Button>
                    </div>
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
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full pb-2.5 gap-2.5 bg-blue_gray-900_19 rounded-[10px]">
                    <div className="flex flex-row justify-end w-full p-2.5 rounded-tl-[10px] rounded-tr-[10px] bg-gray-200">
                      <Button shape="circle" className="w-[24px] mb-14">
                        <Img src="images/img_heart_outline.svg" />
                      </Button>
                    </div>
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
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full pb-2.5 gap-2.5 bg-blue_gray-900_19 rounded-[10px]">
                    <div className="flex flex-row justify-end w-full p-2.5 rounded-tl-[10px] rounded-tr-[10px] bg-gray-200">
                      <Button shape="circle" className="w-[24px] mb-14">
                        <Img src="images/img_heart_outline.svg" />
                      </Button>
                    </div>
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
            <div className="flex flex-col w-[30%] md:w-full mr-[60px] gap-10 md:mr-5">
              <div className="flex flex-col items-center justify-start w-full gap-[9px] bg-black-900_99 rounded-[5px]">
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in cillum pariatur.
                    </span>
                    <span className="text-white-A700"></span>
                    <span className="text-indigo-A700 tracking-[0.15px] font-roboto text-base font-bold">
                      Read more...
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[9px] bg-black-900_99 rounded-[5px]">
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in cillum pariatur.
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
        </div>
        <footer className="flex justify-center items-center w-full">
          <div className="flex flex-row md:flex-col justify-center items-center w-full pl-20 pr-14 gap-9 md:gap-5 md:px-5 bg-black-900_dd">
            <div className="flex flex-row justify-start w-[32%] md:w-full gap-3">
              <Button size="3xl"  className="w-[36px]">
                <Img src="images/img_u_linkedin_alt.svg" />
              </Button>
              <Button size="3xl"  className="w-[36px]">
                <Img src="images/img_u_facebook.svg" />
              </Button>
              <Button size="3xl"  className="w-[36px]">
                <Img src="images/img_u_instagram.svg" />
              </Button>
              <Button size="3xl"  className="w-[36px]">
                <Img src="images/img_u_twitter_alt.svg" />
              </Button>
              <Button size="3xl"  className="w-[36px]">
                <Img src="images/img_u_twitter_alt.svg" />
              </Button>
              <Button size="3xl"  className="w-[36px]">
                <Img src="images/img_u_twitter_alt.svg" />
              </Button>
              <Button size="3xl"  className="w-[36px]">
                <Img src="images/img_u_twitter_alt.svg" />
              </Button>
              <Button size="3xl"  className="w-[36px]">
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
                    <Input
                      name="columnemail"
                      placeholder="example@example.com"
                      className="w-full h-[36px] sm:w-full gap-2 text-white-A700 tracking-[0.50px] font-inter text-xs"
                    />
                  </div>
                  <div className="flex flex-row justify-center w-[47%] md:w-full">
                    <Input
                      name="columnmensage"
                      placeholder="Mensage"
                      className="w-full h-[36px] sm:w-full gap-2 text-white-A700 tracking-[0.50px] font-inter text-xs"
                    />
                  </div>
                </div>
                <Button className="h-[121px] px-[15px] text-white-A700 tracking-[0.50px] font-inter text-xs border-white-A700 border border-solid bg-blue_gray-900_19 min-w-[73px] rounded-[3px]">
                  Button
                </Button>
              </div>
              <Text size="md" as="p" className="tracking-[0.50px] !font-inter !leading-4">
                © 2004 - 2024 Sulake Corporation Ltd. HABBO é marca registrada da Sulake Oy na União Européia, EUA,
                Japão, China e várias outras jurisdições. Todos os direitos reservados. O Habbo Hotel é recomendado para
                maiores de 13 anos.
              </Text>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
