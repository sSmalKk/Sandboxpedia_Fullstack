import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../assets/images/close";
import { Text, Button, Img, SelectBox, Input } from "../../components";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function Home1Page() {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");

  return (
    <>
      <Helmet>
        <title>teste</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-end justify-start w-full gap-[19px]">
            <header className="flex justify-center items-center w-full">
              <div className="flex flex-row md:flex-col justify-between items-center w-full md:h-auto p-[29px] md:gap-10 sm:p-5 bg-black-900_60">
                <Button
                  color="green_700"
                  size="xl"
                  className="ml-[50px] md:ml-5 sm:px-5 tracking-[0.50px] font-inter min-w-[371px] rounded-lg sm:min-w-full"
                >
                  Join in us today
                </Button>
                <Text size="lg" as="p" className="w-[25%] !text-[39.63px]">
                  Come to join us today!
                </Text>
                <Img src="images/img_u_blogger.svg" alt="ublogger_one" className="h-[101px] mr-[50px] md:mr-5" />
              </div>
            </header>
            <div className="flex flex-col items-center justify-start w-[32%] md:w-full mr-[72px] gap-7 p-5 md:mr-5 bg-black-900_60">
              <div className="flex flex-col items-center justify-start w-[62%] md:w-full gap-[29px]">
                <Text size="xs" as="p" className="!text-red-900 !font-normal">
                  At least one Uppercase, one number, one symbol
                </Text>
                <Text size="xs" as="p" className="!text-green-700 !font-normal">
                  At least one Uppercase, one number, one symbol
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[30px] md:px-5 max-w-xs">
                <div className="flex flex-col items-start justify-start w-[99%] md:w-full gap-[5px]">
                  <Text as="p" className="tracking-[0.50px]">
                    Label
                  </Text>
                  <Input
                    shape="square"
                    name="uenvelopealt"
                    placeholder="Input Text"
                    prefix={<Img src="images/img_uenvelopealt.svg" alt="u:envelope-alt" />}
                    suffix={<Img src="images/img_fiinfo.svg" alt="fi:info" />}
                    className="w-full sm:w-full gap-2"
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-[7px]">
                  <Text as="p" className="tracking-[0.50px]">
                    Password
                  </Text>
                  <div className="flex flex-row justify-start w-full pt-2">
                    <div className="flex flex-col items-center justify-start w-full gap-2">
                      <div className="flex flex-row justify-between w-[94%] md:w-full">
                        <div className="flex flex-row justify-start items-center w-[27%] gap-2.5">
                          <div className="flex flex-col items-center justify-start h-[20px] w-[20px]">
                            <div className="flex flex-col items-center justify-start h-[20px] w-[20px] p-[3px] bg-blue_gray-900_19 rounded-[50%]">
                              <Img src="images/img_u_padlock.svg" alt="upadlock_one" className="h-[14px] w-[14px]" />
                            </div>
                          </div>
                          <Text as="p" className="tracking-[0.50px]">
                            ********
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start h-[20px] w-[20px]">
                          <div className="flex flex-col items-center justify-start h-[20px] w-[20px] p-[3px] bg-blue_gray-900_19 rounded-[50%]">
                            <Img src="images/img_u_eye.svg" alt="ueye_one" className="h-[14px] w-[14px]" />
                          </div>
                        </div>
                      </div>
                      <div className="h-px w-full bg-blue_gray-900_19" />
                    </div>
                  </div>
                  <Text size="xs" as="p" className="!font-normal">
                    At least one Uppercase, one number, one symbol
                  </Text>
                </div>
              </div>
              <a
                href="#"
                className="flex justify-center items-center w-[378px] h-[36px] px-[35px] py-2.5 sm:px-5 border-white-A700 border border-solid bg-blue_gray-900_19 rounded-[3px]"
              >
                <Text as="p" className="tracking-[0.50px]">
                  Login
                </Text>
              </a>
              <Button
                color="blue_gray_900_19"
                size="md"
                shape="round"
                className="sm:px-5 tracking-[0.50px] font-inter min-w-[327px] sm:min-w-full"
              >
                Esqueci a senha
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-row sm:flex-col justify-between w-[56%] md:w-full sm:gap-10">
              <Button
                color="deep_purple_900"
                size="lg"
                variant="outline"
                shape="square"
                className="tracking-[0.50px] font-inter min-w-[135px]"
              >
                landing page
              </Button>
              <Button
                color="blue_gray_900_19"
                size="lg"
                shape="round"
                className="tracking-[0.50px] font-inter min-w-[171px]"
              >
                about the project
              </Button>
              <Button
                color="blue_gray_900_19"
                size="lg"
                shape="round"
                className="tracking-[0.50px] font-inter min-w-[90px]"
              >
                help us
              </Button>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row md:flex-col justify-start items-center w-full pl-20 pr-14 gap-2.5 md:gap-5 md:px-5">
                <div className="flex flex-row sm:flex-col justify-between w-[56%] md:h-auto p-4 sm:gap-10 bg-white-A700 shadow-xs rounded-[3px]">
                  <div className="flex flex-row w-[29%] sm:w-full gap-[68px] my-[5px] md:gap-10 sm:my-0">
                    <div className="flex flex-row justify-start items-start w-[30%] gap-0.5">
                      <div className="flex flex-col items-center justify-start h-[17px] w-[17px]">
                        <Img src="images/img_u_home_alt.svg" alt="home_one" className="h-[17px] w-[17px]" />
                      </div>
                      <Text size="xs" as="p" className="mt-0.5 !text-black-900_99 tracking-[1.50px] uppercase">
                        HOME
                      </Text>
                    </div>
                    <div className="flex flex-row justify-start items-start w-[32%] gap-0.5">
                      <div className="flex flex-col items-center justify-start h-[17px] w-[17px]">
                        <Img src="images/img_fi_credit_card.svg" alt="ficreditcard" className="h-[17px] w-[17px]" />
                      </div>
                      <Text size="xs" as="p" className="mt-0.5 !text-black-900_99 tracking-[1.50px] uppercase">
                        STORE
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-start w-[9%] sm:w-full gap-0.5">
                    <div className="flex flex-col items-center justify-start h-[17px] w-[17px] p-0.5">
                      <div className="flex flex-col items-center justify-start h-[13px] w-[13px]">
                        <div className="flex flex-col items-center justify-start h-[13px] w-[13px] gap-0.5">
                          <div className="flex flex-row justify-start w-full gap-0.5">
                            <Img src="images/img_vector.svg" alt="vector_one" className="h-[5px] w-[5px]" />
                            <Img src="images/img_vector.svg" alt="vector_three" className="h-[5px] w-[5px]" />
                          </div>
                          <div className="flex flex-row justify-start w-full gap-0.5">
                            <Img src="images/img_vector.svg" alt="vector_five" className="h-[5px] w-[5px]" />
                            <Img src="images/img_vector.svg" alt="vector_seven" className="h-[5px] w-[5px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Text size="xs" as="p" className="mt-0.5 !text-black-900_99 tracking-[1.50px] uppercase">
                      PEDIA
                    </Text>
                  </div>
                  <div className="flex flex-row w-[41%] sm:w-full gap-[68px] md:gap-10">
                    <div className="flex flex-row justify-start items-start w-[41%] gap-px">
                      <div className="flex flex-col items-center justify-start h-[17px] w-[17px]">
                        <Img src="images/img_fi_compass.svg" alt="be_a_creator" className="h-[17px] w-[17px]" />
                      </div>
                      <Text size="xs" as="p" className="mt-0.5 !text-black-900_99 tracking-[1.50px] uppercase">
                        BE A CREATOR
                      </Text>
                    </div>
                    <div className="flex flex-row justify-start items-start w-[32%] gap-0.5">
                      <div className="flex flex-col items-center justify-start h-[17px] w-[17px]">
                        <Img src="images/img_u_money_bill.svg" alt="umoneybill_one" className="h-[17px] w-[17px]" />
                      </div>
                      <Text size="xs" as="p" className="mt-0.5 !text-black-900_99 tracking-[1.50px] uppercase">
                        DONATION
                      </Text>
                    </div>
                  </div>
                </div>
                <Input
                  color="blue_gray_900_19"
                  size="sm"
                  variant="fill"
                  shape="round"
                  name="search"
                  placeholder="Search"
                  value={searchBarValue1}
                  onChange={(e: string) => setSearchBarValue1(e)}
                  prefix={<Img src="images/img_search.svg" alt="search" className="cursor-pointer" />}
                  suffix={
                    searchBarValue1?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue1("")} height={14} width={14} fillColor="#000000ff" />
                    ) : null
                  }
                  className="w-[28%] md:w-full gap-[15px] text-black-900_60"
                />
                <Button
                  color="green_700"
                  size="md"
                  shape="round"
                  rightIcon={<Img src="images/img_uarrowright.svg" alt="u:arrow-right" />}
                  className="gap-2 tracking-[0.50px] font-inter min-w-[160px]"
                >
                  Join in a Univese
                </Button>
              </div>
              <div className="flex flex-row md:flex-col justify-start items-center w-full pl-20 pr-14 gap-2.5 md:gap-5 md:px-5 bg-deep_purple-900">
                <div className="flex flex-row md:flex-col w-[87%] md:w-full md:h-auto gap-[104px] p-4 md:gap-10 shadow-xs rounded-[3px]">
                  <div className="flex flex-row justify-start items-start w-[9%] md:w-full gap-0.5 my-[5px]">
                    <div className="flex flex-col items-center justify-start h-[17px] w-[17px]">
                      <Img src="images/img_u_chat_bubble_user.svg" alt="mensages_one" className="h-[17px] w-[17px]" />
                    </div>
                    <Text size="xs" as="p" className="mt-0.5 tracking-[1.50px] uppercase">
                      MENSAGES
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-start w-[11%] md:w-full gap-px my-[5px]">
                    <div className="flex flex-col items-center justify-start h-[17px] w-[17px]">
                      <Img src="images/img_u_exclamation_circle.svg" alt="uexclamation" className="h-[17px] w-[17px]" />
                    </div>
                    <Text size="xs" as="p" className="mt-0.5 tracking-[1.50px] uppercase">
                      NOTIFICATION
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-start w-[14%] md:w-full gap-0.5 my-[5px]">
                    <div className="flex flex-col items-center justify-start h-[17px] w-[17px]">
                      <Img src="images/img_u_notes.svg" alt="unotes_one" className="h-[17px] w-[17px]" />
                    </div>
                    <Text size="xs" as="p" className="mt-0.5 tracking-[1.50px] uppercase">
                      SET YOUR UNIVERSE
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-start w-[12%] md:w-full gap-0.5 my-[5px]">
                    <div className="flex flex-col items-center justify-start h-[17px] w-[17px]">
                      <Img src="images/img_u_create_dashboard.svg" alt="ucreate_one" className="h-[17px] w-[17px]" />
                    </div>
                    <Text size="xs" as="p" className="mt-0.5 tracking-[1.50px] uppercase">
                      CREATE AN ITEM
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-start w-[14%] md:w-full gap-0.5 my-[5px]">
                    <div className="flex flex-col items-center justify-start h-[17px] w-[17px]">
                      <Img
                        src="images/img_u_money_bill_white_a700.svg"
                        alt="umoneybill_one"
                        className="h-[17px] w-[17px]"
                      />
                    </div>
                    <Text size="xs" as="p" className="mt-0.5 tracking-[1.50px] uppercase">
                      help the project
                    </Text>
                  </div>
                </div>
                <SelectBox
                  shape="round"
                  indicator={<Img src="images/img_uarrowright.svg" alt="u:arrow-right" />}
                  name="button"
                  placeholder="my linkedin"
                  options={dropDownOptions}
                  className="w-[11%] md:w-full gap-px tracking-[0.50px] font-inter"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row md:flex-col justify-between items-start w-full p-5 md:gap-10 bg-indigo-A100">
            <div className="flex flex-col items-center justify-start w-[53%] md:w-full ml-[60px] pb-5 gap-5 md:ml-5">
              <div className="flex flex-row justify-center w-full">
                <Img
                  src="images/img_unsplash_vxhpxyqocfq.png"
                  alt="unsplash_one"
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
                      <Text size="md" as="p" className="!text-black-900_dd tracking-[0.10px] !font-medium">
                        Subtitle 2
                      </Text>
                      <Text as="p" className="!text-black-900_99 tracking-[0.40px] !leading-4">
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
                      <Text size="md" as="p" className="!text-black-900_dd tracking-[0.10px] !font-medium">
                        Subtitle 2
                      </Text>
                      <Text as="p" className="!text-black-900_99 tracking-[0.40px] !leading-4">
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
                      <Text size="md" as="p" className="!text-black-900_dd tracking-[0.10px] !font-medium">
                        Subtitle 2
                      </Text>
                      <Text as="p" className="!text-black-900_99 tracking-[0.40px] !leading-4">
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
                      <Text size="md" as="p" className="!text-black-900_dd tracking-[0.10px] !font-medium">
                        Subtitle 2
                      </Text>
                      <Text as="p" className="!text-black-900_99 tracking-[0.40px] !leading-4">
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
                      <Text size="md" as="p" className="!text-black-900_dd tracking-[0.10px] !font-medium">
                        Subtitle 2
                      </Text>
                      <Text as="p" className="!text-black-900_99 tracking-[0.40px] !leading-4">
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
                      <Text size="md" as="p" className="!text-black-900_dd tracking-[0.10px] !font-medium">
                        Subtitle 2
                      </Text>
                      <Text as="p" className="!text-black-900_99 tracking-[0.40px] !leading-4">
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
                      <Text size="md" as="p" className="!text-black-900_dd tracking-[0.10px] !font-medium">
                        Subtitle 2
                      </Text>
                      <Text as="p" className="!text-black-900_99 tracking-[0.40px] !leading-4">
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
                      <Text size="md" as="p" className="!text-black-900_dd tracking-[0.10px] !font-medium">
                        Subtitle 2
                      </Text>
                      <Text as="p" className="!text-black-900_99 tracking-[0.40px] !leading-4">
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
                      <Text size="md" as="p" className="!text-black-900_dd tracking-[0.10px] !font-medium">
                        Subtitle 2
                      </Text>
                      <Text as="p" className="!text-black-900_99 tracking-[0.40px] !leading-4">
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
                    <Text size="xl" as="p" className="mt-[-56px] ml-5 md:ml-0">
                      Informativo!
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row justify-center w-full">
                  <Text size="md" as="p" className="tracking-[0.20px] !font-urbanist !leading-[19px]">
                    <span className="text-white-A700 tracking-[0.15px] font-roboto text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in cillum pariatur.
                    </span>
                    <span className="text-white-A700"></span>
                    <span className="text-indigo_A700 tracking-[0.15px] font-roboto text-base font-bold">
                      Read more...
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[9px] bg-black-900_99 rounded-[5px]">
                <div className="flex flex-row justify-center w-full pt-0.5">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="h-[56px] w-full bg-black-900_dd" />
                    <Text size="xl" as="p" className="mt-[-56px] ml-5 md:ml-0">
                      Informativo!
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row justify-center w-full">
                  <Text size="md" as="p" className="tracking-[0.20px] !font-urbanist !leading-[19px]">
                    <span className="text-white-A700 tracking-[0.15px] font-roboto text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in cillum pariatur.
                    </span>
                    <span className="text-white-A700"></span>
                    <span className="text-indigo_A700 tracking-[0.15px] font-roboto text-base font-bold">
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
            <div className="flex flex-col items-center justify-start w-[64%] md:w-full gap-2.5">
              <div className="flex flex-row md:flex-col justify-center w-full md:gap-5">
                <div className="flex flex-col items-center justify-start w-[91%] md:w-full gap-7 border-white-A700 border border-solid">
                  <div className="flex flex-col items-start justify-start w-[47%] md:w-full gap-[5px]">
                    <Text as="p" className="tracking-[0.50px]">
                      ContactForm
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full pt-2 gap-2">
                      <div className="flex flex-row justify-start w-full">
                        <Text as="p" className="mt-px ml-[3px] tracking-[0.50px]">
                          example@example.com
                        </Text>
                      </div>
                      <div className="h-px w-full bg-white-A700" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-[47%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full pt-2 gap-2">
                      <div className="flex flex-row justify-start w-full">
                        <Text as="p" className="mt-px ml-[3px] tracking-[0.50px]">
                          Mensage
                        </Text>
                      </div>
                      <div className="h-px w-full bg-white-A700" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-[10%] md:h-auto p-4 border-white-A700 border border-solid bg-blue_gray-900_19 rounded-[3px]">
                  <Text as="p" className="mt-9 mb-[37px] tracking-[0.50px]">
                    Button
                  </Text>
                </div>
              </div>
              <Text as="p" className="tracking-[0.50px] !leading-4">
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
