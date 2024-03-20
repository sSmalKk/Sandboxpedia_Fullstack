import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Img, Text, SelectBox } from "../../components";
 
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function Home1Page() {
  return (
    <>
      <Helmet>
        <title>Role Player</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div>
      </div>
      <div className="flex flex-row justify-center w-full bg-white-A700">
        <div className="flex flex-col items-start justify-start w-full gap-[200px]">
          <div className="flex flex-row justify-start w-[30%] sm:w-full bg-black-900_99">
            <div className="flex flex-col items-center justify-start w-full gap-2.5 m-5">
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-row sm:flex-col justify-center items-start w-full sm:gap-5">
                  <div className="flex flex-row justify-center w-[98%] sm:w-full">
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-row justify-start items-start w-[37%] gap-3.5">
                        <Img
                          src="images/img_10_rectangle.png"
                          alt="image_one"
                          className="w-[40px] md:h-auto object-cover rounded-[14px]"
                        />
                        <div className="flex flex-col items-start justify-start w-[62%] pt-[3px] gap-px">
                          <Text size="xl" as="p" className="tracking-[0.15px]">
                            heading
                          </Text>
                          <Text as="p" className="!text-gray-300 tracking-[0.25px] !font-normal !leading-5">
                            <>
                              Lorem ipsum
                              <br />
                              dolor sit{" "}
                            </>
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center">
                        <Text size="md" as="p" className="!text-gray-300 tracking-[0.40px] text-right">
                          Caption
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_u_bars.svg"
                    alt="ubarsone_one"
                    className="h-[24px] w-[24px] ml-[-13px] sm:ml-0"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-2">
                <div className="flex flex-row justify-between items-center w-full">
                  <Text as="p" className="tracking-[0.10px] !font-robotoflex">
                    Title here
                  </Text>
                  <Text size="md" as="p" className="!text-black-900_99 tracking-[0.50px] !font-robotoflex !font-medium">
                    38%
                  </Text>
                </div>
                <div className="h-[4px] w-full bg-indigo-A700_19 relative rounded-sm">
                  <div style={{ width: "43%" }} className="h-full bg-blue-A700 absolute rounded-sm" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
            <div className="flex flex-row justify-between w-[21%] md:w-full">
              <div className="flex flex-col items-center justify-start pb-0.5 gap-[3px]">
                <Button className="h-[32px] w-[32px] bg-blue_gray-900_19 rounded-[50%]">
                  <Img src="images/img_110_instance.svg" />
                </Button>
                <Text className="!text-black-900_60 tracking-[1.50px] uppercase text-[10px] font-medium">
                  left HAND
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center gap-[3px]">
                <Button className="h-[32px] w-[32px] bg-blue_gray-900_19 rounded-[50%]">
                  <Img src="images/img_110_instance.svg" />
                </Button>
                <Text className="mb-0.5 !text-black-900_60 tracking-[1.50px] uppercase text-[10px] font-medium">
                  RIGHT HAND
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start pb-0.5 gap-[3px]">
                <Button className="h-[32px] w-[32px] bg-blue_gray-900_19 rounded-[50%]">
                  <Img src="images/img_110_instance.svg" />
                </Button>
                <Text className="!text-black-900_60 tracking-[1.50px] uppercase text-[10px] font-medium">
                  inventory
                </Text>
              </div>
            </div>
            <div className="flex flex-row sm:flex-col justify-center items-end w-[36%] md:w-full sm:gap-5">
              <div className="flex flex-col items-center justify-start w-[16%] sm:w-full">
                <div className="flex flex-col w-full pr-1.5 gap-[7px] py-1.5 border-black-900_60 border border-solid bg-black-900_99 rounded-[5px]">
                  <div className="flex flex-row justify-center w-[82%] md:w-full mr-3 p-[3px]">
                    <SelectBox
                      indicator={<Img src="images/img_u_users_alt.svg" alt="p_two" />}
                      name="rowp"
                      placeholder="P"
                      options={dropDownOptions}
                      isMulti={true}
                      className="w-[71%] gap-2.5 text-white-A700 tracking-[0.50px] font-robotoflex text-xs font-medium"
                    />
                  </div>
                  <div className="flex flex-row justify-center w-[81%] md:w-full mr-[13px] p-[3px]">
                    <SelectBox
                      indicator={<Img src="images/img_brazil.svg" alt="brazil_one" />}
                      name="rowl"
                      placeholder="L"
                      options={dropDownOptions}
                      isMulti={true}
                      className="w-[71%] gap-2.5 text-white-A700 tracking-[0.50px] font-robotoflex text-xs font-medium"
                    />
                  </div>
                  <div className="flex flex-row justify-center w-[84%] md:w-full mr-[11px] p-[3px]">
                    <SelectBox
                      indicator={<Img src="images/img_fi_globe.svg" alt="figlobe_one" />}
                      name="rowg"
                      placeholder="G"
                      options={dropDownOptions}
                      isMulti={true}
                      className="w-[72%] gap-2.5 text-white-A700 tracking-[0.50px] font-robotoflex text-xs font-medium"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[85%] sm:w-full gap-0.5">
                <div className="flex flex-col w-full md:h-auto gap-px overflow-auto bg-black-900_99">
                  <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-0.5">
                    <Text className="tracking-[1.50px] uppercase text-[8px] font-hairline">Today, 27 August, 2021</Text>
                    <div className="flex flex-row justify-between w-[96%] md:w-full">
                      <div className="flex flex-row justify-start items-start w-[80%] gap-3.5">
                        <Img
                          src="images/img_10_rectangle.png"
                          alt="image"
                          className="w-[40px] md:h-auto object-cover rounded-[14px]"
                        />
                        <div className="flex flex-col items-start justify-start w-[82%] pt-[3px] gap-px">
                          <Text className="tracking-[0.15px] text-base font-normal">heading</Text>
                          <Text className="!text-gray-300 tracking-[0.25px] text-sm font-normal leading-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start pt-0.5 gap-[31px]">
                        <Text className="!text-gray-300 tracking-[0.40px] text-right text-xs font-normal">g</Text>
                        <Text className="!text-gray-300 tracking-[0.40px] text-right text-xs font-normal">Caption</Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-0.5">
                    <Text className="tracking-[1.50px] uppercase text-[8px] font-hairline">Today, 27 August, 2021</Text>
                    <div className="flex flex-row justify-between w-[96%] md:w-full">
                      <div className="flex flex-row justify-start items-start w-[80%] gap-3.5">
                        <Img
                          src="images/img_10_rectangle.png"
                          alt="image_one"
                          className="w-[40px] md:h-auto object-cover rounded-[14px]"
                        />
                        <div className="flex flex-col items-start justify-start w-[82%] pt-[3px] gap-px">
                          <Text className="tracking-[0.15px] text-base font-normal">heading</Text>
                          <Text className="!text-gray-300 tracking-[0.25px] text-sm font-normal leading-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start pt-0.5 gap-[31px]">
                        <Text className="!text-gray-300 tracking-[0.40px] text-right text-xs font-normal">g</Text>
                        <Text className="!text-gray-300 tracking-[0.40px] text-right text-xs font-normal">Caption</Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-0.5">
                    <Text className="tracking-[1.50px] uppercase text-[8px] font-hairline">Today, 27 August, 2021</Text>
                    <div className="flex flex-row justify-between w-[96%] md:w-full">
                      <div className="flex flex-row justify-start items-start w-[80%] gap-3.5">
                        <Img
                          src="images/img_10_rectangle.png"
                          alt="image_one"
                          className="w-[40px] md:h-auto object-cover rounded-[14px]"
                        />
                        <div className="flex flex-col items-start justify-start w-[82%] pt-[3px] gap-px">
                          <Text className="tracking-[0.15px] text-base font-normal">heading</Text>
                          <Text className="!text-gray-300 tracking-[0.25px] text-sm font-normal leading-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start pt-0.5 gap-[31px]">
                        <Text className="!text-gray-300 tracking-[0.40px] text-right text-xs font-normal">g</Text>
                        <Text className="!text-gray-300 tracking-[0.40px] text-right text-xs font-normal">Caption</Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-0.5">
                    <Text className="tracking-[1.50px] uppercase text-[8px] font-hairline">Today, 27 August, 2021</Text>
                    <div className="flex flex-row justify-between w-[96%] md:w-full">
                      <div className="flex flex-row justify-start items-start w-[80%] gap-3.5">
                        <Img
                          src="images/img_10_rectangle.png"
                          alt="image_one"
                          className="w-[40px] md:h-auto object-cover rounded-[14px]"
                        />
                        <div className="flex flex-col items-start justify-start w-[82%] pt-[3px] gap-px">
                          <Text className="tracking-[0.15px] text-base font-normal">heading</Text>
                          <Text className="!text-gray-300 tracking-[0.25px] text-sm font-normal leading-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start pt-0.5 gap-[31px]">
                        <Text className="!text-gray-300 tracking-[0.40px] text-right text-xs font-normal">g</Text>
                        <Text className="!text-gray-300 tracking-[0.40px] text-right text-xs font-normal">Caption</Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-0.5">
                    <Text className="tracking-[1.50px] uppercase text-[8px] font-hairline">Today, 27 August, 2021</Text>
                    <div className="flex flex-row justify-between w-[96%] md:w-full">
                      <div className="flex flex-row justify-start items-start w-[80%] gap-3.5">
                        <Img
                          src="images/img_10_rectangle.png"
                          alt="image_one"
                          className="w-[40px] md:h-auto object-cover rounded-[14px]"
                        />
                        <div className="flex flex-col items-start justify-start w-[82%] pt-[3px] gap-px">
                          <Text className="tracking-[0.15px] text-base font-normal">heading</Text>
                          <Text className="!text-gray-300 tracking-[0.25px] text-sm font-normal leading-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-start pt-0.5 gap-[31px]">
                        <Text className="!text-gray-300 tracking-[0.40px] text-right text-xs font-normal">g</Text>
                        <Text className="!text-gray-300 tracking-[0.40px] text-right text-xs font-normal">Caption</Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row sm:flex-col justify-center w-full sm:w-full sm:gap-5 bg-black-900_99">
                  <div className="flex flex-row justify-center w-[82%] sm:w-full">
                    <Input
                      size="xs"
                      name="inputone_one"
                      placeholder="Input text"
                      prefix={<Img src="images/img_left_icon_black_900.svg" alt="Left Icon" />}
                      suffix={<Img src="images/img_right_icon_white_a700.svg" alt="Right Icon" />}
                      className="w-full md:h-auto gap-[13px] text-white-A700 tracking-[0.50px] font-inter font-bold border-black-900_60 border border-solid !rounded-[5px]"
                    />
                  </div>
                  <Button
                    color="blue_gray_900_19"
                    size="4xl"
                    
                    className="tracking-[0.50px] font-inter font-bold border-black-900_dd border border-solid min-w-[73px]"
                  >
                    Button
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
