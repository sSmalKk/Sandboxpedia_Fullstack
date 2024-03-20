import React,{ useEffect, useState }  from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "components/Header"
import Navmenuwhite from "components/Navmenuwhite";
import Navmenublue from "components/Navmenublue";
import { Text, Button, Img, SelectBox, Input } from "./components";

function App() {
  
const dev = true;
const token = localStorage.getItem('token');
const currentTime = new Date(); // Obtém a hora atual
const [inputValue, setInputValue] = useState("");
    const [userData, setUserData] = useState(null);

    useEffect(() => {
      fetchUserData();
    }, []);
  
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:5000/admin/user/me", {
          method: "GET",
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Credentials': 'include'
          }
        });
  
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
  
        const data = await response.json();
        setUserData(data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    useEffect(() => {
      const updateStatus = async () => {
        try {
          const response = await fetch("http://localhost:5000/admin/user/partial-update/{id}", {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
              'Credentials': 'include'
            },
            body: JSON.stringify({
              "status": "online"
            })
          });
    
          if (!response.ok) {
            throw new Error("Failed to create message");
          }
    
          console.log("Status Update");
        } catch (error) {
          console.error("Error updating status:", error);
        }
      };
  
      // Call the function to update status
      updateStatus();
    }, []);     





const createMessage = async () => {
    const requestBody = {
      message: inputValue,
      sender: "Optional",
      recipient: "Fantastic",
      createdAt: currentTime // Adiciona a hora atual ao requestBody

    };

    try {
      const response = await fetch("http://localhost:5000/admin/chat_message/create", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'Credentials': 'include'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error("Failed to create message");
      }

      console.log("Message created successfully");
    } catch (error) {
      console.error("Error creating message:", error);
    }
  };
  return (
    <><Router>
    {dev ? (
      <>
        {/* Código para o modo de desenvolvimento */}
      </>
    ) : (

    <><div className="flex flex-col items-end justify-start w-full gap-[19px]">
            <Header heading={` ${userData}`}
              Status={` ${userData}`}
              text={` ${userData}`}
              className="flex flex-row md:flex-col justify-between items-center w-full md:h-auto p-[5px] md:gap-10 bg-black-900_60" life={0} />
            {userData ? (
              <></>


            ) : (
              <p><div className="flex flex-col items-center justify-start w-[32%] md:w-full mt-[19px] ml-[830px] mr-[72px] md:mx-5">
                <div className="flex flex-col items-center justify-start w-full gap-7 p-5 bg-black-900_60">
                  <div className="flex flex-col items-center justify-start w-[62%] md:w-full mt-[20.89px] gap-[29px]">
                    <Text size="s" as="p" className="!text-red-900 !font-inter">
                      At least one Uppercase, one number, one symbol
                    </Text>
                    <Text size="s" as="p" className="mt-[29px] !text-green-700 !font-inter">
                      At least one Uppercase, one number, one symbol
                    </Text>
                  </div>
                  <div className="flex flex-col w-full mt-[28.11px] gap-[30px] md:px-5 max-w-xs">
                    <Input
                      name="columnlabel"
                      placeholder="Label"
                      className="w-[99%] h-[57px] sm:w-full gap-[5px] mx-auto text-white-A700 tracking-[0.50px] font-inter text-xs" />
                    <div className="flex flex-col items-start justify-start w-full mt-[30px] gap-[7px]">
                      <Text size="md" as="p" className="mt-[0.21px] mr-[261px] md:mr-5 tracking-[0.50px] !font-inter">
                        Password
                      </Text>
                      <div className="flex flex-row justify-start w-full sm:w-full mt-[7.79px]">
                        <Input
                          name="input"
                          placeholder="********"
                          className="w-full h-[36px] sm:w-full mb-px text-white-A700 tracking-[0.50px] font-inter text-xs" />
                      </div>
                      <Text size="s" as="p" className="mt-[6.89px] mr-[88px] md:mr-5 !font-inter">
                        At least one Uppercase, one number, one symbol
                      </Text>
                    </div>
                  </div>
                  <Button className="w-full h-[36px] mt-[29px] px-[34px] sm:px-5 text-white-A700 tracking-[0.50px] font-inter text-xs border-white-A700 border border-solid bg-blue_gray-900_19 rounded-[3px]">
                    Login
                  </Button>
                  <Button className="h-[36px] mt-[30px] mb-5 px-[35px] sm:px-5 text-white-A700 tracking-[0.50px] font-inter text-xs bg-blue_gray-900_19 min-w-[327px] rounded-[3px] sm:min-w-full">
                    Esqueci a senha
                  </Button>
                </div>
              </div></p>
            )}

          </div><div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row sm:flex-col justify-between w-[56%] md:w-full sm:gap-10">
                <Button className="h-[38px] px-[15px] text-deep_purple-900 tracking-[0.50px] font-inter text-Flex border-deep_purple-900 border-b border-solid min-w-[135px]">
                  landing page
                </Button>
                <Button className="h-[38px] px-4 text-white-A700 tracking-[0.50px] font-inter text-Flex bg-blue_gray-900_19 min-w-[171px] rounded-[3px]">
                  about the project
                </Button>
                <Button className="h-[38px] px-4 text-white-A700 tracking-[0.50px] font-inter text-Flex bg-blue_gray-900_19 min-w-[90px] rounded-[3px]">
                  help us
                </Button>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Navmenuwhite className="flex flex-row md:flex-col justify-start items-center w-full pl-20 pr-14 gap-2.5 md:gap-5 md:px-5" />
                <Navmenublue className="flex flex-row md:flex-col justify-start items-center w-full pl-20 pr-14 gap-2.5 md:gap-5 md:px-5 bg-deep_purple-900" />

              </div>
            </div></>
)}
       <Routes />
    </Router>
      </>
  );
}

export default App;
