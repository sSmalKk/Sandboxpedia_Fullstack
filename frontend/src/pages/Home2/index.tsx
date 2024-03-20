import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../components/assets/images/close";
import { Text, Button, Img, Input, Heading } from "../../components";

export default function Home2Page() {
  const [searchBarValue34, setSearchBarValue34] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Role Player</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full md:h-auto bg-white-A700">
        <div className="flex flex-row justify-center w-full md:h-auto bg-black-900_99">
          <div className="flex flex-row md:flex-col justify-start items-center w-full gap-2.5 md:gap-5">
            <div className="flex flex-col items-center justify-start w-[23%] h-full md:h-auto bg-white-A700">
              <div className="flex flex-col items-start justify-start w-full gap-8">
                <div className="flex flex-row justify-start w-full">
                  <div className="flex flex-row justify-center w-full p-3.5 bg-white-A700 shadow-xl">
                    <div className="flex flex-row justify-center w-[92%]">
                      <div className="flex flex-row justify-start items-center w-full gap-4">
                        <div className="h-[59px] w-[41%] bg-black-900_60 rounded-[24px]" />
                        <div className="flex flex-col items-start justify-start w-[54%]">
                          <Heading size="xs" as="h1" className="!text-black-900_dd !font-montserrat">
                            Mira Franci
                          </Heading>
                          <Text size="md" as="p" className="!text-black-900_99 !font-montserrat">
                            mirafranci@mail.com
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start ml-[22px] gap-4 md:ml-0 sm:ml-5">
                  <Button
                    leftIcon={<Img src="images/img_home_icon.svg" alt="homeicon_one" />}
                    className="h-[20px] gap-3.5 text-black-900_dd font-montserrat text-base font-bold min-w-[85px] sm:min-w-full"
                  >
                    Home
                  </Button>
                  <Button
                    leftIcon={<Img src="images/img_vector_black_900_1.svg" alt="vector_one" />}
                    className="w-full h-[21px] gap-3.5 text-black-900_60 font-montserrat text-base font-bold"
                  >
                    player configuration
                  </Button>
                  <Button
                    leftIcon={<Img src="images/img_add_friends_icon.svg" alt="addfriends_one" />}
                    className="h-[20px] gap-[19px] text-black-900_60 font-montserrat text-base font-bold min-w-[103px] sm:min-w-full"
                  >
                    Friends
                  </Button>
                  <Button className="h-[20px] gap-3 text-black-900_60 font-montserrat text-base font-bold min-w-[108px] sm:min-w-full">
                    universe
                  </Button>
                  <Button
                    leftIcon={<Img src="images/img_u_dropbox.svg" alt="udropbox_one" />}
                    className="h-[21px] gap-[13px] text-black-900_60 font-montserrat text-base font-bold min-w-[111px] sm:min-w-full"
                  >
                    Sandbox
                  </Button>
                </div>
              </div>
              <div className="h-[290px] w-full bg-black-900_60 rounded-[24px]" />
              <div className="flex flex-row justify-center w-full">
                <Button
                  size="6xl"
                  shape="square"
                  className="w-full sm:px-5 text-white-A700 font-montserrat font-bold !bg-colors2 shadow-lg"
                >
                  Log Out
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[78%] md:w-full gap-[9px]">
              <Input
                size="md"
                
                name="search"
                placeholder="Search"
                value={searchBarValue34}
                onChange={(e: string) => setSearchBarValue34(e)}
                prefix={<Img src="images/img_search.svg" alt="search" className="cursor-pointer" />}
                suffix={
                  searchBarValue34?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue34("")} height={14} width={14} fillColor="#000000ff" />
                  ) : null
                }
                className="w-full gap-[15px] text-white-A700 tracking-[0.50px] font-inter !bg-white-A700"
              />
              <div className="w-[58%] ml-[189px] gap-[50px] grid-cols-3 md:ml-5 sm:grid-cols-1 sm:gap-5 grid">
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
          </div>
        </div>
      </div>
    </>
  );
}
