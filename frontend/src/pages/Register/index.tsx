import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../components/assets/images/close";
import { Text, Img, Button, Radio, Input, SeekBar, GoogleMap } from "../../components";

export default function RegisterPage() {
  const [searchBarValue4, setSearchBarValue4] = React.useState("");
  const [searchBarValue5, setSearchBarValue5] = React.useState("");
  const [searchBarValue6, setSearchBarValue6] = React.useState("");
  const [searchBarValue7, setSearchBarValue7] = React.useState("");
  const [searchBarValue8, setSearchBarValue8] = React.useState("");
  const [searchBarValue9, setSearchBarValue9] = React.useState("");
  const [searchBarValue10, setSearchBarValue10] = React.useState("");
  const [searchBarValue11, setSearchBarValue11] = React.useState("");
  const [searchBarValue12, setSearchBarValue12] = React.useState("");
  const [searchBarValue13, setSearchBarValue13] = React.useState("");
  const [searchBarValue14, setSearchBarValue14] = React.useState("");
  const [searchBarValue15, setSearchBarValue15] = React.useState("");
  const [searchBarValue16, setSearchBarValue16] = React.useState("");
  const [searchBarValue17, setSearchBarValue17] = React.useState("");
  const [searchBarValue18, setSearchBarValue18] = React.useState("");
  const [searchBarValue20, setSearchBarValue20] = React.useState("");
  const [searchBarValue22, setSearchBarValue22] = React.useState("");
  const [searchBarValue23, setSearchBarValue23] = React.useState("");
  const [searchBarValue25, setSearchBarValue25] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Role Player</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full gap-2.5 px-14 py-20 md:p-5 bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full gap-2.5 p-[30px] md:px-5 sm:p-5 bg-black-900_60 max-w-[1160px]">
          <div className="flex flex-row md:flex-col justify-start w-[93%] md:w-full gap-2.5 md:gap-5">
            <div className="flex flex-col items-center justify-start w-[42%] md:w-full gap-7 p-5 bg-black-900_1e">
              <div className="flex flex-col items-center justify-start w-[62%] md:w-full gap-[29px]">
                <Text size="s" as="p" className="!text-red-900 !font-inter">
                  At least one Uppercase, one number, one symbol
                </Text>
                <Text size="s" as="p" className="!text-green-700 !font-inter">
                  At least one Uppercase, one number, one symbol
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-[85%] md:w-full gap-[29px]">
                <Input
                  name="name"
                  placeholder="nickname"
                  className="w-[99%] h-[57px] sm:w-full gap-[5px] text-white-A700 tracking-[0.50px] font-inter text-xs"
                />
                <div className="flex flex-col items-start justify-start w-[99%] md:w-full gap-1">
                  <Text size="md" as="p" className="tracking-[0.50px] !font-inter">
                    Name Complete
                  </Text>
                  <Input
                    color="white_A700"
                    size="xs"
                    variant="underline"
                    shape="square"
                    name="name"
                    placeholder="Input Text"
                    prefix={<Img src="images/img_uenvelopealt.svg" alt="u:envelope-alt" />}
                    suffix={<Img src="images/img_fiinfo.svg" alt="fi:info" />}
                    className="w-full sm:w-full gap-2 tracking-[0.50px] font-inter"
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-[99%] md:w-full gap-[5px]">
                  <Text size="md" as="p" className="tracking-[0.50px] !font-inter">
                    Email
                  </Text>
                  <Input
                    color="white_A700"
                    size="xs"
                    variant="underline"
                    shape="square"
                    name="email"
                    placeholder="Input Text"
                    prefix={<Img src="images/img_uenvelopealt.svg" alt="u:envelope-alt" />}
                    suffix={<Img src="images/img_fiinfo.svg" alt="fi:info" />}
                    className="w-full sm:w-full gap-2 tracking-[0.50px] font-inter"
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-[99%] md:w-full gap-1">
                  <a href="#">
                    <Text size="md" as="p" className="tracking-[0.50px] !font-inter">
                      Login
                    </Text>
                  </a>
                  <Input
                    color="white_A700"
                    size="xs"
                    variant="underline"
                    shape="square"
                    name="uenvelopealt"
                    placeholder="Input Text"
                    prefix={<Img src="images/img_uenvelopealt.svg" alt="u:envelope-alt" />}
                    suffix={<Img src="images/img_fiinfo.svg" alt="fi:info" />}
                    className="w-full sm:w-full gap-2 tracking-[0.50px] font-inter"
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-[7px]">
                  <Text size="md" as="p" className="tracking-[0.50px] !font-inter">
                    Password
                  </Text>
                  <Input
                    name="password"
                    placeholder="********"
                    prefix={<Img src="images/img_upadlock.svg" alt="u:padlock" />}
                    suffix={<Img src="images/img_ueye.svg" alt="u:eye" />}
                    className="w-full h-[36px] sm:w-full gap-[13px] px-[13px] text-white-A700 tracking-[0.50px] font-inter text-xs border-b border-blue_gray-900_19 border-solid"
                  />
                  <Text size="s" as="p" className="!font-inter">
                    At least one Uppercase, one number, one symbol
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-[7px]">
                  <Text size="md" as="p" className="tracking-[0.50px] !font-inter">
                    Password
                  </Text>
                  <Input
                    name="password"
                    placeholder="********"
                    prefix={<Img src="images/img_upadlock.svg" alt="u:padlock" />}
                    suffix={<Img src="images/img_ueye.svg" alt="u:eye" />}
                    className="w-full h-[36px] sm:w-full gap-[13px] px-[13px] text-white-A700 tracking-[0.50px] font-inter text-xs border-b border-blue_gray-900_19 border-solid"
                  />
                  <Text size="s" as="p" className="!font-inter">
                    At least one Uppercase, one number, one symbol
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full p-4 border-gray-300 border border-solid shadow-xs rounded-[5px]">
                <Input
                  name="search"
                  placeholder="Search for gender"
                  value={searchBarValue25}
                  onChange={(e: string) => setSearchBarValue25(e)}
                  suffix={searchBarValue25?.length > 0 ? <CloseSVG onClick={() => setSearchBarValue25("")} /> : null}
                  className="w-full h-[40px] text-gray-300 tracking-[0.25px] text-sm"
                />
                <div className="flex flex-col w-full gap-px">
                  <Radio value="male" name="listitem" label="Male" className="py-2 text-white-A700 tracking-[0.15px]" />
                  <Radio
                    value="female"
                    name="listitem1"
                    label="Female"
                    className="py-2 text-white-A700 tracking-[0.15px]"
                  />
                </div>
                <div className="flex flex-row justify-center w-full py-2">
                  <Button
                    leftIcon={<Img src="images/img_u_plus_square.svg" alt="uplussquare_one" />}
                    className="justify-start w-full h-[24px] text-white-A700 tracking-[0.15px] text-base"
                  >
                    other
                  </Button>
                </div>
              </div>
            </div>
            <Img
              src="images/img_rectangle_253.png"
              alt="image_one"
              className="w-[58%] md:w-full md:h-[880px] object-cover"
            />
          </div>
          <div className="flex flex-row justify-center w-[23%] md:w-full">
            <div className="flex flex-row w-full">
              <div className="flex flex-row justify-center w-[60%]">
                <div className="flex flex-row justify-center w-[54%]">
                  <div className="flex flex-col items-start justify-start w-full gap-1.5">
                    <div className="flex flex-row justify-end items-center w-[89%] md:w-full ml-[9px] md:ml-0">
                      <div className="flex flex-col items-center justify-start h-[24px] w-[24px]">
                        <Text className="flex justify-center items-center h-[24px] w-[24px] tracking-[1.25px] uppercase text-sm font-medium bg-indigo-A700 text-center rounded-[50%]">
                          1
                        </Text>
                      </div>
                      <div className="h-[2px] w-[66%] bg-blue_gray-100" />
                    </div>
                    <Text className="tracking-[0.25px] text-center text-sm font-normal">Step 1</Text>
                  </div>
                </div>
                <div className="flex flex-row justify-center w-[54%] ml-[-9px]">
                  <div className="flex flex-col items-start justify-start w-full gap-1.5">
                    <div className="flex flex-row justify-end items-center w-[89%] md:w-full ml-[9px] md:ml-0">
                      <div className="flex flex-col items-center justify-start h-[24px] w-[24px]">
                        <Text className="flex justify-center items-center h-[24px] w-[24px] !text-gray-300 tracking-[1.25px] uppercase text-sm font-medium bg-black-900_1e text-center rounded-[50%]">
                          2
                        </Text>
                      </div>
                      <div className="h-[2px] w-[66%] bg-blue_gray-100" />
                    </div>
                    <Text className="tracking-[0.25px] text-center text-sm font-normal">Step 2</Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-[45%]">
                <div className="flex flex-row justify-center w-[72%]">
                  <div className="flex flex-col items-start justify-start w-full gap-1.5">
                    <div className="flex flex-row justify-end items-center w-[89%] md:w-full ml-[9px] md:ml-0">
                      <div className="flex flex-col items-center justify-start h-[24px] w-[24px]">
                        <Text className="flex justify-center items-center h-[24px] w-[24px] !text-gray-300 tracking-[1.25px] uppercase text-sm font-medium bg-black-900_1e text-center rounded-[50%]">
                          3
                        </Text>
                      </div>
                      <div className="h-[2px] w-[66%] bg-blue_gray-100" />
                    </div>
                    <Text className="tracking-[0.25px] text-center text-sm font-normal">Step 3</Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[37%] ml-[-9px]">
                  <div className="flex flex-col items-center justify-start w-full gap-1.5">
                    <div className="flex flex-col items-center justify-start h-[24px] w-[24px]">
                      <Text className="flex justify-center items-center h-[24px] w-[24px] !text-gray-300 tracking-[1.25px] uppercase text-sm font-medium bg-black-900_1e text-center rounded-[50%]">
                        4
                      </Text>
                    </div>
                    <Text className="tracking-[0.25px] text-center text-sm font-normal">Step 4</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full gap-2.5 p-[30px] md:px-5 sm:p-5 bg-black-900_60 max-w-[1160px]">
          <div className="flex flex-row md:flex-col justify-start w-[93%] md:w-full gap-2.5 md:gap-5">
            <div className="flex flex-col items-center justify-start w-[42%] md:w-full gap-7 p-5 bg-black-900_1e">
              <div className="flex flex-col items-center justify-start w-[62%] md:w-full gap-[29px]">
                <Text size="s" as="p" className="!text-red-900 !font-inter">
                  At least one Uppercase, one number, one symbol
                </Text>
                <Text size="s" as="p" className="!text-green-700 !font-inter">
                  At least one Uppercase, one number, one symbol
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                <div className="flex flex-col items-center justify-start h-[379px] w-[378px] md:w-full p-4 border-gray-300 border border-solid shadow-xs rounded-[5px]">
                  <div className="flex flex-col items-center justify-start h-[347px] w-[346px] md:w-full">
                    <Input
                      name="columnlabel_one"
                      placeholder="lorem"
                      className="w-[92%] h-[57px] sm:w-full gap-[5px] text-white-A700 tracking-[0.50px] font-inter text-xs"
                    />
                    <div className="flex flex-row justify-center w-[91%] md:h-auto border-gray-300 border-[0.5px] border-solid rounded-md">
                      <div className="flex flex-col items-center justify-start w-full md:h-auto gap-[7px] p-4 bg-white-A700 rounded-md">
                        <div className="flex flex-row justify-between items-center w-full">
                          <Img
                            src="images/img_angle_right_b_solid.svg"
                            alt="anglerightbone"
                            className="h-[24px] w-[24px]"
                          />
                          <Text className="!text-gray-900_01 tracking-[0.10px] text-center text-sm font-medium">
                            March 2023
                          </Text>
                          <Img src="images/img_arrow_right.svg" alt="arrowrightone" className="h-[24px] w-[24px]" />
                        </div>
                        <div className="flex flex-row justify-center w-full">
                          <Text className="!text-gray-700 tracking-[0.40px] text-center text-xs font-normal">Mon</Text>
                          <Text className="ml-4 !text-gray-700 tracking-[0.40px] text-center text-xs font-normal">
                            Tue
                          </Text>
                          <Text className="ml-4 !text-gray-700 tracking-[0.40px] text-center text-xs font-normal">
                            Wed
                          </Text>
                          <Text className="ml-4 !text-gray-700 tracking-[0.40px] text-center text-xs font-normal">
                            Thu
                          </Text>
                          <Text className="h-[15px] ml-[22px] sm:ml-5 !text-gray-700 tracking-[0.40px] text-center text-xs font-normal">
                            Fri
                          </Text>
                          <Text className="ml-[23px] sm:ml-5 !text-gray-700 tracking-[0.40px] text-center text-xs font-normal">
                            Sat
                          </Text>
                          <Text className="ml-[19px] !text-gray-700 tracking-[0.40px] text-center text-xs font-normal">
                            Sun
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full pb-[11px]">
                          <div className="flex flex-col w-full gap-px">
                            <div className="flex flex-row justify-center w-full">
                              <div className="flex flex-col items-start justify-start h-[40px] w-[40px] p-[11px]">
                                <Text className="!text-gray-500 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  31
                                </Text>
                              </div>
                              <div className="flex flex-col items-start justify-start h-[40px] w-[40px] p-[11px]">
                                <Text className="ml-1 md:ml-0 !text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  1
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                                <Text className="!text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  2
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                                <Text className="!text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  3
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                                <Text className="!text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  4
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                                <Text className="!text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  5
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                                <Text className="!text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  6
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row justify-center items-center w-full">
                              <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                                <Text className="!text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  7
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[3%] ml-4">
                                <Text className="!text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  8
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start h-[40px] w-[40px] ml-4 p-[11px]">
                                <Text className="!text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  9
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                                <Text className="h-[17px] !text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  10
                                </Text>
                              </div>
                              <div className="flex flex-col items-start justify-start h-[40px] w-[40px] p-[11px]">
                                <Text className="!text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  11
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                                <Text className="h-[17px] !text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  12
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                                <Text className="h-[17px] !text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  13
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row justify-center items-center w-[93%] md:w-full mx-auto">
                              <div className="flex flex-row justify-center items-center h-[17px] w-[18px]">
                                <Text className="h-[17px] !text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  14
                                </Text>
                              </div>
                              <Button className="h-[40px] ml-[11px] px-[11px] text-white-A700 tracking-[1.25px] uppercase text-sm font-medium bg-blue-800 min-w-[40px] rounded-[50%]">
                                15
                              </Button>
                              <div className="flex flex-row justify-center items-center h-[17px] w-[18px] ml-[11px]">
                                <Text className="h-[17px] !text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  16
                                </Text>
                              </div>
                              <div className="flex flex-row justify-center items-center h-[17px] w-[18px] ml-[22px] sm:ml-5">
                                <Text className="h-[17px] !text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  17
                                </Text>
                              </div>
                              <div className="flex flex-row justify-center items-center h-[17px] w-[18px] ml-[22px] sm:ml-5">
                                <Text className="h-[17px] !text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  18
                                </Text>
                              </div>
                              <div className="flex flex-row justify-center items-center h-[17px] w-[18px] ml-[22px] sm:ml-5">
                                <Text className="h-[17px] !text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  19
                                </Text>
                              </div>
                              <div className="flex flex-row justify-center items-center h-[17px] w-[18px] ml-[22px] sm:ml-5">
                                <Text className="h-[17px] !text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  20
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col w-full gap-[11px]">
                            <div className="flex flex-row justify-center w-full">
                              <div className="flex flex-col items-start justify-start h-[40px] w-[40px] p-[11px]">
                                <Text className="!text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  21
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                                <Text className="h-[17px] !text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  22
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                                <Text className="h-[17px] !text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  23
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                                <Text className="h-[17px] !text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  24
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                                <Text className="h-[17px] !text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  25
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                                <Text className="h-[17px] !text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  26
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start h-[40px] w-[40px] p-[11px]">
                                <Text className="h-[17px] !text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  27
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row justify-center w-[91%] md:w-full ml-[11px] mr-4">
                              <div className="flex flex-row justify-center items-center h-[17px] w-[18px]">
                                <Text className="h-[17px] !text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  28
                                </Text>
                              </div>
                              <div className="flex flex-row justify-center items-center h-[17px] w-[18px] ml-[22px] sm:ml-5">
                                <Text className="h-[17px] !text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  29
                                </Text>
                              </div>
                              <div className="flex flex-row justify-center items-center h-[17px] w-[18px] ml-[22px] sm:ml-5">
                                <Text className="h-[17px] !text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  30
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[6%] ml-[22px] sm:ml-5">
                                <Text className="!text-gray-900 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  31
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[3%] ml-[29px] sm:ml-5">
                                <Text className="!text-gray-500 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  1
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[4%] ml-[33px] sm:ml-5">
                                <Text className="!text-gray-500 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  2
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[4%] ml-8 sm:ml-5">
                                <Text className="!text-gray-500 tracking-[1.25px] uppercase text-center text-sm font-medium">
                                  3
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-[30px]">
                  <div className="flex flex-col items-center justify-start w-full p-4 border-gray-300 border border-solid shadow-xs rounded-[5px]">
                    <Input
                      name="search"
                      placeholder="Search for primal hand"
                      value={searchBarValue23}
                      onChange={(e: string) => setSearchBarValue23(e)}
                      suffix={
                        searchBarValue23?.length > 0 ? <CloseSVG onClick={() => setSearchBarValue23("")} /> : null
                      }
                      className="w-full h-[40px] text-gray-300 tracking-[0.25px] text-sm"
                    />
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="righ"
                          name="radio1"
                          label="Righ"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="left"
                          name="radioone1"
                          label="Left"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full py-2">
                      <Button
                        leftIcon={<Img src="images/img_u_plus_square.svg" alt="other_one" />}
                        className="justify-start w-full h-[24px] text-white-A700 tracking-[0.15px] text-base"
                      >
                        other
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full p-4 border-gray-300 border border-solid shadow-xs rounded-[5px]">
                    <Input
                      name="search"
                      placeholder="Search for primal leg"
                      value={searchBarValue22}
                      onChange={(e: string) => setSearchBarValue22(e)}
                      suffix={
                        searchBarValue22?.length > 0 ? <CloseSVG onClick={() => setSearchBarValue22("")} /> : null
                      }
                      className="w-full h-[40px] text-gray-300 tracking-[0.25px] text-sm"
                    />
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="righ1"
                          name="radio2"
                          label="Righ"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="left1"
                          name="radioone2"
                          label="Left"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full py-2">
                      <Button
                        leftIcon={<Img src="images/img_u_plus_square.svg" alt="uplussquare_one" />}
                        className="justify-start w-full h-[24px] text-white-A700 tracking-[0.15px] text-base"
                      >
                        other
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-[30px]">
                  <div className="flex flex-col items-center justify-start w-full gap-1.5 border-gray-300 border border-solid shadow-xs rounded-[5px]">
                    <Text size="s" as="p" className="mt-3.5 !text-red-900 !font-inter">
                      THATS IS NOT YOUR HOUSE! Its more like where your APERANCE was from!
                    </Text>
                    <div className="flex flex-col items-start justify-start w-[92%] md:w-full mb-3.5">
                      <Input
                        name="columnlabel_one"
                        placeholder="“Aperance was”"
                        className="w-[92%] h-[57px] sm:w-full gap-1 text-white-A700 tracking-[0.50px] font-inter text-xs"
                      />
                      <GoogleMap showMarker={false} className="h-[346px] w-[346px]" />
                      <div className="flex flex-col items-center justify-start w-full">
                        <Input
                          name="search"
                          placeholder="Search for feet"
                          value={searchBarValue20}
                          onChange={(e: string) => setSearchBarValue20(e)}
                          suffix={
                            searchBarValue20?.length > 0 ? <CloseSVG onClick={() => setSearchBarValue20("")} /> : null
                          }
                          className="w-full h-[40px] text-gray-300 tracking-[0.25px] text-sm"
                        />
                        <div className="flex flex-row justify-center w-full py-2">
                          <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                            <Radio
                              
                              value="male15"
                              name="radio15"
                              label="Male"
                              className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row justify-center w-full py-2">
                          <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                            <Radio
                              
                              value="female15"
                              name="radioone15"
                              label="Female"
                              className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row justify-center w-full py-2">
                          <Button
                            leftIcon={<Img src="images/img_u_plus_square.svg" alt="other_one" />}
                            className="justify-start w-full h-[24px] text-white-A700 tracking-[0.15px] text-base"
                          >
                            other
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full p-4 border-gray-300 border border-solid shadow-xs rounded-[5px]">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Input
                        name="country"
                        placeholder="Country"
                        className="w-[92%] h-[57px] sm:w-full gap-1 text-white-A700 tracking-[0.50px] font-inter text-xs"
                      />
                      <GoogleMap showMarker={false} className="h-[346px] w-[346px]" />
                      <div className="flex flex-col items-center justify-start w-full">
                        <Input
                          name="search"
                          placeholder="Search for feet"
                          value={searchBarValue18}
                          onChange={(e: string) => setSearchBarValue18(e)}
                          suffix={
                            searchBarValue18?.length > 0 ? <CloseSVG onClick={() => setSearchBarValue18("")} /> : null
                          }
                          className="w-full h-[40px] text-gray-300 tracking-[0.25px] text-sm"
                        />
                        <div className="flex flex-row justify-center w-full py-2">
                          <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                            <Radio
                              
                              value="male16"
                              name="radio16"
                              label="Male"
                              className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row justify-center w-full py-2">
                          <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                            <Radio
                              
                              value="female16"
                              name="radioone16"
                              label="Female"
                              className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row justify-center w-full py-2">
                          <Button
                            leftIcon={<Img src="images/img_u_plus_square.svg" alt="uplussquare_one" />}
                            className="justify-start w-full h-[24px] text-white-A700 tracking-[0.15px] text-base"
                          >
                            other
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              src="images/img_rectangle_253.png"
              alt="imageone_one"
              className="w-[58%] md:w-full md:h-[2217px] object-cover"
            />
          </div>
          <div className="flex flex-row justify-center w-[23%] md:w-full">
            <div className="flex flex-row w-full">
              <div className="flex flex-row justify-center w-[60%]">
                <div className="flex flex-row justify-center w-[54%]">
                  <div className="flex flex-col items-start justify-start w-full gap-1.5">
                    <div className="flex flex-row justify-end items-center w-[89%] md:w-full ml-[9px] md:ml-0">
                      <div className="flex flex-col items-center justify-start h-[24px] w-[24px]">
                        <Text className="flex justify-center items-center h-[24px] w-[24px] tracking-[1.25px] uppercase text-sm font-medium bg-black-900_1e text-center rounded-[50%]">
                          1
                        </Text>
                      </div>
                      <div className="h-[2px] w-[66%] bg-blue_gray-100" />
                    </div>
                    <Text className="tracking-[0.25px] text-center text-sm font-normal">Step 1</Text>
                  </div>
                </div>
                <div className="flex flex-row justify-center w-[54%] ml-[-9px]">
                  <div className="flex flex-col items-start justify-start w-full gap-1.5">
                    <div className="flex flex-row justify-end items-center w-[89%] md:w-full ml-[9px] md:ml-0">
                      <div className="flex flex-col items-center justify-start h-[24px] w-[24px]">
                        <Text className="flex justify-center items-center h-[24px] w-[24px] !text-gray-300 tracking-[1.25px] uppercase text-sm font-medium bg-indigo-A700 text-center rounded-[50%]">
                          2
                        </Text>
                      </div>
                      <div className="h-[2px] w-[66%] bg-blue_gray-100" />
                    </div>
                    <Text className="tracking-[0.25px] text-center text-sm font-normal">Step 2</Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-[45%]">
                <div className="flex flex-row justify-center w-[72%]">
                  <div className="flex flex-col items-start justify-start w-full gap-1.5">
                    <div className="flex flex-row justify-end items-center w-[89%] md:w-full ml-[9px] md:ml-0">
                      <div className="flex flex-col items-center justify-start h-[24px] w-[24px]">
                        <Text className="flex justify-center items-center h-[24px] w-[24px] !text-gray-300 tracking-[1.25px] uppercase text-sm font-medium bg-black-900_1e text-center rounded-[50%]">
                          3
                        </Text>
                      </div>
                      <div className="h-[2px] w-[66%] bg-blue_gray-100" />
                    </div>
                    <Text className="tracking-[0.25px] text-center text-sm font-normal">Step 3</Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[37%] ml-[-9px]">
                  <div className="flex flex-col items-center justify-start w-full gap-1.5">
                    <div className="flex flex-col items-center justify-start h-[24px] w-[24px]">
                      <Text className="flex justify-center items-center h-[24px] w-[24px] !text-gray-300 tracking-[1.25px] uppercase text-sm font-medium bg-black-900_1e text-center rounded-[50%]">
                        4
                      </Text>
                    </div>
                    <Text className="tracking-[0.25px] text-center text-sm font-normal">Step 4</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full gap-2.5 p-[30px] md:px-5 sm:p-5 bg-black-900_60 max-w-[1160px]">
          <div className="flex flex-row md:flex-col justify-start w-[93%] md:w-full gap-2.5 md:gap-5">
            <div className="flex flex-col items-center justify-center w-[42%] md:w-full gap-7 p-4 bg-black-900_1e">
              <div className="flex flex-col items-center justify-start w-[61%] md:w-full mt-1 gap-[29px]">
                <Text size="s" as="p" className="!text-red-900 !font-inter">
                  At least one Uppercase, one number, one symbol
                </Text>
                <Text size="s" as="p" className="!text-green-700 !font-inter">
                  At least one Uppercase, one number, one symbol
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full mb-[3px] gap-[30px]">
                <div className="flex flex-col items-center justify-start w-[99%] md:w-full p-4 border-gray-300 border border-solid shadow-xs rounded-[5px]">
                  <Input
                    name="search"
                    placeholder="Search for head"
                    value={searchBarValue17}
                    onChange={(e: string) => setSearchBarValue17(e)}
                    suffix={searchBarValue17?.length > 0 ? <CloseSVG onClick={() => setSearchBarValue17("")} /> : null}
                    className="w-full h-[40px] text-gray-300 tracking-[0.25px] text-sm"
                  />
                  <div className="flex flex-row justify-center w-full py-2">
                    <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                      <Radio
                        
                        value="male1"
                        name="radio"
                        label="Male"
                        className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full py-2">
                    <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                      <Radio
                        
                        value="female1"
                        name="radioone"
                        label="Female"
                        className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full py-2">
                    <Button
                      leftIcon={<Img src="images/img_u_plus_square.svg" alt="uplussquare" />}
                      className="justify-start w-full h-[24px] text-white-A700 tracking-[0.15px] text-base"
                    >
                      other
                    </Button>
                  </div>
                </div>
                <SeekBar
                  inputValue={[55.73]}
                  trackColors={["#0042fc", "#2b2b2b19"]}
                  className="flex h-[26px] w-full rounded-[3px]"
                  trackClassName="h-[6px] w-full rounded-[3px]"
                  thumbClassName="flex justify-center items-center h-[16px] w-[16px] rounded-[50%] outline-none bg-indigo-A700 shadow-md"
                />
                <div className="flex flex-col w-[99%] gap-[30px]">
                  <div className="flex flex-col items-center justify-start w-full p-4 border-gray-300 border border-solid shadow-xs rounded-[5px]">
                    <Input
                      name="search"
                      placeholder="Search for skin"
                      value={searchBarValue16}
                      onChange={(e: string) => setSearchBarValue16(e)}
                      suffix={
                        searchBarValue16?.length > 0 ? <CloseSVG onClick={() => setSearchBarValue16("")} /> : null
                      }
                      className="w-full h-[40px] text-gray-300 tracking-[0.25px] text-sm"
                    />
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="male3"
                          name="radio3"
                          label="Male"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="female3"
                          name="radioone3"
                          label="Female"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full py-2">
                      <Button
                        leftIcon={<Img src="images/img_u_plus_square.svg" alt="other_one" />}
                        className="justify-start w-full h-[24px] text-white-A700 tracking-[0.15px] text-base"
                      >
                        other
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full p-4 border-gray-300 border border-solid shadow-xs rounded-[5px]">
                    <Input
                      name="search"
                      placeholder="Search for chest"
                      value={searchBarValue15}
                      onChange={(e: string) => setSearchBarValue15(e)}
                      suffix={
                        searchBarValue15?.length > 0 ? <CloseSVG onClick={() => setSearchBarValue15("")} /> : null
                      }
                      className="w-full h-[40px] text-gray-300 tracking-[0.25px] text-sm"
                    />
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="male4"
                          name="radio4"
                          label="Male"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="female4"
                          name="radioone4"
                          label="Female"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full py-2">
                      <Button
                        leftIcon={<Img src="images/img_u_plus_square.svg" alt="uplussquare_one" />}
                        className="justify-start w-full h-[24px] text-white-A700 tracking-[0.15px] text-base"
                      >
                        other
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full p-4 border-gray-300 border border-solid shadow-xs rounded-[5px]">
                    <Input
                      name="search"
                      placeholder="Search for abs"
                      value={searchBarValue14}
                      onChange={(e: string) => setSearchBarValue14(e)}
                      suffix={
                        searchBarValue14?.length > 0 ? <CloseSVG onClick={() => setSearchBarValue14("")} /> : null
                      }
                      className="w-full h-[40px] text-gray-300 tracking-[0.25px] text-sm"
                    />
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="male5"
                          name="radio5"
                          label="Male"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="female5"
                          name="radioone5"
                          label="Female"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full py-2">
                      <Button
                        leftIcon={<Img src="images/img_u_plus_square.svg" alt="uplussquare_one" />}
                        className="justify-start w-full h-[24px] text-white-A700 tracking-[0.15px] text-base"
                      >
                        other
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full p-4 border-gray-300 border border-solid shadow-xs rounded-[5px]">
                    <Input
                      name="search"
                      placeholder="Search for legs"
                      value={searchBarValue13}
                      onChange={(e: string) => setSearchBarValue13(e)}
                      suffix={
                        searchBarValue13?.length > 0 ? <CloseSVG onClick={() => setSearchBarValue13("")} /> : null
                      }
                      className="w-full h-[40px] text-gray-300 tracking-[0.25px] text-sm"
                    />
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="male6"
                          name="radio6"
                          label="Male"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="female6"
                          name="radioone6"
                          label="Female"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full py-2">
                      <Button
                        leftIcon={<Img src="images/img_u_plus_square.svg" alt="uplussquare_one" />}
                        className="justify-start w-full h-[24px] text-white-A700 tracking-[0.15px] text-base"
                      >
                        other
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full p-4 border-gray-300 border border-solid shadow-xs rounded-[5px]">
                    <Input
                      name="search"
                      placeholder="Search for orgam"
                      value={searchBarValue12}
                      onChange={(e: string) => setSearchBarValue12(e)}
                      suffix={
                        searchBarValue12?.length > 0 ? <CloseSVG onClick={() => setSearchBarValue12("")} /> : null
                      }
                      className="w-full h-[40px] text-gray-300 tracking-[0.25px] text-sm"
                    />
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="male7"
                          name="radio7"
                          label="Male"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="female7"
                          name="radioone7"
                          label="Female"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full py-2">
                      <Button
                        leftIcon={<Img src="images/img_u_plus_square.svg" alt="uplussquare_one" />}
                        className="justify-start w-full h-[24px] text-white-A700 tracking-[0.15px] text-base bg-colors1"
                      >
                        other
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full p-4 border-gray-300 border border-solid shadow-xs rounded-[5px]">
                    <Input
                      name="search"
                      placeholder="Search for feet"
                      value={searchBarValue11}
                      onChange={(e: string) => setSearchBarValue11(e)}
                      suffix={
                        searchBarValue11?.length > 0 ? <CloseSVG onClick={() => setSearchBarValue11("")} /> : null
                      }
                      className="w-full h-[40px] text-gray-300 tracking-[0.25px] text-sm"
                    />
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="male8"
                          name="radio8"
                          label="Male"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="female8"
                          name="radioone8"
                          label="Female"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full py-2">
                      <Button
                        leftIcon={<Img src="images/img_u_plus_square.svg" alt="uplussquare_one" />}
                        className="justify-start w-full h-[24px] text-white-A700 tracking-[0.15px] text-base"
                      >
                        other
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              src="images/img_rectangle_253.png"
              alt="imagetwo_one"
              className="w-[58%] md:w-full md:h-[1704px] object-cover"
            />
          </div>
          <div className="flex flex-row justify-center w-[23%] md:w-full">
            <div className="flex flex-row w-full">
              <div className="flex flex-row justify-center w-[60%]">
                <div className="flex flex-row justify-center w-[54%]">
                  <div className="flex flex-col items-start justify-start w-full gap-1.5">
                    <div className="flex flex-row justify-end items-center w-[89%] md:w-full ml-[9px] md:ml-0">
                      <div className="flex flex-col items-center justify-start h-[24px] w-[24px]">
                        <Text className="flex justify-center items-center h-[24px] w-[24px] tracking-[1.25px] uppercase text-sm font-medium bg-black-900_1e text-center rounded-[50%]">
                          1
                        </Text>
                      </div>
                      <div className="h-[2px] w-[66%] bg-blue_gray-100" />
                    </div>
                    <Text className="tracking-[0.25px] text-center text-sm font-normal">Step 1</Text>
                  </div>
                </div>
                <div className="flex flex-row justify-center w-[54%] ml-[-9px]">
                  <div className="flex flex-col items-start justify-start w-full gap-1.5">
                    <div className="flex flex-row justify-end items-center w-[89%] md:w-full ml-[9px] md:ml-0">
                      <div className="flex flex-col items-center justify-start h-[24px] w-[24px]">
                        <Text className="flex justify-center items-center h-[24px] w-[24px] !text-gray-300 tracking-[1.25px] uppercase text-sm font-medium bg-black-900_1e text-center rounded-[50%]">
                          2
                        </Text>
                      </div>
                      <div className="h-[2px] w-[66%] bg-blue_gray-100" />
                    </div>
                    <Text className="tracking-[0.25px] text-center text-sm font-normal">Step 2</Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-[45%]">
                <div className="flex flex-row justify-center w-[72%]">
                  <div className="flex flex-col items-start justify-start w-full gap-1.5">
                    <div className="flex flex-row justify-end items-center w-[89%] md:w-full ml-[9px] md:ml-0">
                      <div className="flex flex-col items-center justify-start h-[24px] w-[24px]">
                        <Text className="flex justify-center items-center h-[24px] w-[24px] !text-gray-300 tracking-[1.25px] uppercase text-sm font-medium bg-indigo-A700 text-center rounded-[50%]">
                          3
                        </Text>
                      </div>
                      <div className="h-[2px] w-[66%] bg-blue_gray-100" />
                    </div>
                    <Text className="tracking-[0.25px] text-center text-sm font-normal">Step 3</Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[37%] ml-[-9px]">
                  <div className="flex flex-col items-center justify-start w-full gap-1.5">
                    <div className="flex flex-col items-center justify-start h-[24px] w-[24px]">
                      <Text className="flex justify-center items-center h-[24px] w-[24px] !text-gray-300 tracking-[1.25px] uppercase text-sm font-medium bg-black-900_1e text-center rounded-[50%]">
                        4
                      </Text>
                    </div>
                    <Text className="tracking-[0.25px] text-center text-sm font-normal">Step 4</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full gap-2.5 p-[30px] md:px-5 sm:p-5 bg-black-900_60 max-w-[1160px]">
          <div className="flex flex-row md:flex-col justify-start w-[93%] md:w-full gap-2.5 md:gap-5">
            <div className="flex flex-col items-center justify-center w-[42%] md:w-full gap-7 p-4 bg-black-900_1e">
              <div className="flex flex-col items-center justify-start w-[61%] md:w-full mt-1 gap-[29px]">
                <Text size="s" as="p" className="!text-red-900 !font-inter">
                  At least one Uppercase, one number, one symbol
                </Text>
                <Text size="s" as="p" className="!text-green-700 !font-inter">
                  At least one Uppercase, one number, one symbol
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full mb-[3px] gap-[30px]">
                <div className="flex flex-col items-center justify-start w-[99%] md:w-full p-4 border-gray-300 border border-solid shadow-xs rounded-[5px]">
                  <Input
                    name="search"
                    placeholder="Search for head"
                    value={searchBarValue10}
                    onChange={(e: string) => setSearchBarValue10(e)}
                    suffix={searchBarValue10?.length > 0 ? <CloseSVG onClick={() => setSearchBarValue10("")} /> : null}
                    className="w-full h-[40px] text-gray-300 tracking-[0.25px] text-sm"
                  />
                  <div className="flex flex-row justify-center w-full py-2">
                    <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                      <Radio
                        
                        value="male2"
                        name="radiotwo"
                        label="Male"
                        className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full py-2">
                    <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                      <Radio
                        
                        value="female2"
                        name="radiothree"
                        label="Female"
                        className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full py-2">
                    <Button
                      leftIcon={<Img src="images/img_u_plus_square.svg" alt="uplussquare" />}
                      className="justify-start w-full h-[24px] text-white-A700 tracking-[0.15px] text-base"
                    >
                      other
                    </Button>
                  </div>
                </div>
                <SeekBar
                  inputValue={[55.73]}
                  trackColors={["#0042fc", "#2b2b2b19"]}
                  className="flex h-[26px] w-full rounded-[3px]"
                  trackClassName="h-[6px] w-full rounded-[3px]"
                  thumbClassName="flex justify-center items-center h-[16px] w-[16px] rounded-[50%] outline-none bg-indigo-A700 shadow-md"
                />
                <div className="flex flex-col w-[99%] gap-[30px]">
                  <div className="flex flex-col items-center justify-start w-full p-4 border-gray-300 border border-solid shadow-xs rounded-[5px]">
                    <Input
                      name="search"
                      placeholder="Search for skin"
                      value={searchBarValue9}
                      onChange={(e: string) => setSearchBarValue9(e)}
                      suffix={searchBarValue9?.length > 0 ? <CloseSVG onClick={() => setSearchBarValue9("")} /> : null}
                      className="w-full h-[40px] text-gray-300 tracking-[0.25px] text-sm"
                    />
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="male9"
                          name="radio9"
                          label="Male"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="female9"
                          name="radioone9"
                          label="Female"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full py-2">
                      <Button
                        leftIcon={<Img src="images/img_u_plus_square.svg" alt="other_one" />}
                        className="justify-start w-full h-[24px] text-white-A700 tracking-[0.15px] text-base"
                      >
                        other
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full p-4 border-gray-300 border border-solid shadow-xs rounded-[5px]">
                    <Input
                      name="search"
                      placeholder="Search for chest"
                      value={searchBarValue8}
                      onChange={(e: string) => setSearchBarValue8(e)}
                      suffix={searchBarValue8?.length > 0 ? <CloseSVG onClick={() => setSearchBarValue8("")} /> : null}
                      className="w-full h-[40px] text-gray-300 tracking-[0.25px] text-sm"
                    />
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="male10"
                          name="radio10"
                          label="Male"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="female10"
                          name="radioone10"
                          label="Female"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full py-2">
                      <Button
                        leftIcon={<Img src="images/img_u_plus_square.svg" alt="uplussquare_one" />}
                        className="justify-start w-full h-[24px] text-white-A700 tracking-[0.15px] text-base"
                      >
                        other
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full p-4 border-gray-300 border border-solid shadow-xs rounded-[5px]">
                    <Input
                      name="search"
                      placeholder="Search for abs"
                      value={searchBarValue7}
                      onChange={(e: string) => setSearchBarValue7(e)}
                      suffix={searchBarValue7?.length > 0 ? <CloseSVG onClick={() => setSearchBarValue7("")} /> : null}
                      className="w-full h-[40px] text-gray-300 tracking-[0.25px] text-sm"
                    />
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="male11"
                          name="radio11"
                          label="Male"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="female11"
                          name="radioone11"
                          label="Female"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full py-2">
                      <Button
                        leftIcon={<Img src="images/img_u_plus_square.svg" alt="uplussquare_one" />}
                        className="justify-start w-full h-[24px] text-white-A700 tracking-[0.15px] text-base"
                      >
                        other
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full p-4 border-gray-300 border border-solid shadow-xs rounded-[5px]">
                    <Input
                      name="search"
                      placeholder="Search for legs"
                      value={searchBarValue6}
                      onChange={(e: string) => setSearchBarValue6(e)}
                      suffix={searchBarValue6?.length > 0 ? <CloseSVG onClick={() => setSearchBarValue6("")} /> : null}
                      className="w-full h-[40px] text-gray-300 tracking-[0.25px] text-sm"
                    />
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="male12"
                          name="radio12"
                          label="Male"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="female12"
                          name="radioone12"
                          label="Female"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full py-2">
                      <Button
                        leftIcon={<Img src="images/img_u_plus_square.svg" alt="uplussquare_one" />}
                        className="justify-start w-full h-[24px] text-white-A700 tracking-[0.15px] text-base"
                      >
                        other
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full p-4 border-gray-300 border border-solid shadow-xs rounded-[5px]">
                    <Input
                      name="search"
                      placeholder="Search for orgam"
                      value={searchBarValue5}
                      onChange={(e: string) => setSearchBarValue5(e)}
                      suffix={searchBarValue5?.length > 0 ? <CloseSVG onClick={() => setSearchBarValue5("")} /> : null}
                      className="w-full h-[40px] text-gray-300 tracking-[0.25px] text-sm"
                    />
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="male13"
                          name="radio13"
                          label="Male"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="female13"
                          name="radioone13"
                          label="Female"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full py-2">
                      <Button
                        leftIcon={<Img src="images/img_u_plus_square.svg" alt="uplussquare_one" />}
                        className="justify-start w-full h-[24px] text-white-A700 tracking-[0.15px] text-base"
                      >
                        other
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full p-4 border-gray-300 border border-solid shadow-xs rounded-[5px]">
                    <Input
                      name="search"
                      placeholder="Search for feet"
                      value={searchBarValue4}
                      onChange={(e: string) => setSearchBarValue4(e)}
                      suffix={searchBarValue4?.length > 0 ? <CloseSVG onClick={() => setSearchBarValue4("")} /> : null}
                      className="w-full h-[40px] text-gray-300 tracking-[0.25px] text-sm"
                    />
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="male14"
                          name="radio14"
                          label="Male"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full py-2">
                      <div className="flex flex-row justify-start w-full sm:w-full px-[5px]">
                        <Radio
                          
                          value="female14"
                          name="radioone14"
                          label="Female"
                          className="pl-2 gap-2 py-0.5 text-white-A700 tracking-[0.15px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full py-2">
                      <Button
                        leftIcon={<Img src="images/img_u_plus_square.svg" alt="uplussquare_one" />}
                        className="justify-start w-full h-[24px] text-white-A700 tracking-[0.15px] text-base"
                      >
                        other
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              src="images/img_rectangle_253.png"
              alt="imagethree_one"
              className="w-[58%] md:w-full md:h-[1704px] object-cover"
            />
          </div>
          <div className="flex flex-row justify-center w-[23%] md:w-full">
            <div className="flex flex-row w-full">
              <div className="flex flex-row justify-center w-[60%]">
                <div className="flex flex-row justify-center w-[54%]">
                  <div className="flex flex-col items-start justify-start w-full gap-1.5">
                    <div className="flex flex-row justify-end items-center w-[89%] md:w-full ml-[9px] md:ml-0">
                      <div className="flex flex-col items-center justify-start h-[24px] w-[24px]">
                        <Text className="flex justify-center items-center h-[24px] w-[24px] tracking-[1.25px] uppercase text-sm font-medium bg-black-900_1e text-center rounded-[50%]">
                          1
                        </Text>
                      </div>
                      <div className="h-[2px] w-[66%] bg-blue_gray-100" />
                    </div>
                    <Text className="tracking-[0.25px] text-center text-sm font-normal">Step 1</Text>
                  </div>
                </div>
                <div className="flex flex-row justify-center w-[54%] ml-[-9px]">
                  <div className="flex flex-col items-start justify-start w-full gap-1.5">
                    <div className="flex flex-row justify-end items-center w-[89%] md:w-full ml-[9px] md:ml-0">
                      <div className="flex flex-col items-center justify-start h-[24px] w-[24px]">
                        <Text className="flex justify-center items-center h-[24px] w-[24px] !text-gray-300 tracking-[1.25px] uppercase text-sm font-medium bg-black-900_1e text-center rounded-[50%]">
                          2
                        </Text>
                      </div>
                      <div className="h-[2px] w-[66%] bg-blue_gray-100" />
                    </div>
                    <Text className="tracking-[0.25px] text-center text-sm font-normal">Step 2</Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-[45%]">
                <div className="flex flex-row justify-center w-[72%]">
                  <div className="flex flex-col items-start justify-start w-full gap-1.5">
                    <div className="flex flex-row justify-end items-center w-[89%] md:w-full ml-[9px] md:ml-0">
                      <div className="flex flex-col items-center justify-start h-[24px] w-[24px]">
                        <Text className="flex justify-center items-center h-[24px] w-[24px] !text-gray-300 tracking-[1.25px] uppercase text-sm font-medium bg-black-900_1e text-center rounded-[50%]">
                          3
                        </Text>
                      </div>
                      <div className="h-[2px] w-[66%] bg-blue_gray-100" />
                    </div>
                    <Text className="tracking-[0.25px] text-center text-sm font-normal">Step 3</Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[37%] ml-[-9px]">
                  <div className="flex flex-col items-center justify-start w-full gap-1.5">
                    <div className="flex flex-col items-center justify-start h-[24px] w-[24px]">
                      <Text className="flex justify-center items-center h-[24px] w-[24px] !text-gray-300 tracking-[1.25px] uppercase text-sm font-medium bg-indigo-A700 text-center rounded-[50%]">
                        4
                      </Text>
                    </div>
                    <Text className="!text-green-700 tracking-[0.25px] text-center text-sm font-normal">Step 4</Text>
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
