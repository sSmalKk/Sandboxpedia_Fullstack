import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text } from "../../components";

interface Props {
  Status?: string;
}

export default function LoginPage() {
  const [message, setMessage] = useState("");
  const token = localStorage.getItem('token');

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    // Captura os valores dos inputs de registro
    const username = (document.getElementById("register-username") as HTMLInputElement).value;
    const email = (document.getElementById("register-email") as HTMLInputElement).value;
    const password = (document.getElementById("register-password") as HTMLInputElement).value;
    const confirmPassword = (document.getElementById("register-confirm-password") as HTMLInputElement).value;
    
    // Verifica se as senhas são iguais
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    // Monta o objeto com os dados do formulário de registro
    const formData = JSON.stringify({
      "username": username,
      "email": email,
      "password": password
    });

    console.log("Register Form Data:", formData); // Debugging

    try {
      // Exemplo de como fazer uma requisição de registro
      const response = await fetch(`http://localhost:5000/admin/auth/register`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Device-Secret': 'myjwtclientsecret',
          'Credentials': 'include'
        },
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        const authToken = data.data.token;
        localStorage.setItem('token', authToken);
      } else {
        const errorMessage = await response.text();
        setMessage(errorMessage);
      }
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    // Captura os valores dos inputs de login
    const username = (document.getElementById("login-username") as HTMLInputElement).value;
    const password = (document.getElementById("login-password") as HTMLInputElement).value;
  
    // Monta o objeto com os dados do formulário de login
    const formData = JSON.stringify({
      "username": username,
      "password": password
    });
  
    console.log("Login Form Data:", formData); // Debugging
  
    try {
      // Exemplo de como fazer uma requisição de login
      const response = await fetch(`http://localhost:5000/admin/auth/login`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Device-Secret': 'myjwtclientsecret',
          'Credentials': 'include'
        },
        body: formData
      });
  
      if (response.ok) {
        const data = await response.json();
        const authToken = data.data.token;
        localStorage.setItem('token', authToken);
        // Redirect to the home page
        window.location.href = "/home";
      } else {
        const errorMessage = await response.text();
        setMessage(errorMessage);
      }
    } catch (error) {
      console.error("Error login:", error);
    }
  };

  useEffect(() => {
    const updateStatus = async () => {
      try {
        const response = await fetch("http://localhost:5000/admin/user/partial-update/{65ea18ed579a45908606ae4b}", {
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
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <>
      <Helmet>
        <title>Role Player</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center items-center w-full px-14 py-[157px] bg-white-A700_06">
        <div className="flex flex-col items-center justify-start w-[27%] ml-[183px] gap-[57px]">
          <form onSubmit={handleRegisterSubmit}>
            <div className="flex flex-col items-start justify-start w-full gap-1.5">
              <Text as="p" className="tracking-[0.50px] hover:text-blue-500">
                Register
              </Text>
              <Input 
                type="text" 
                name="register-username" 
                placeholder="Username" 
                id="register-username"
              />
              <Input 
                type="email" 
                name="register-email" 
                placeholder="Email" 
                id="register-email"
              />
              <Input 
                type="password" 
                name="register-password" 
                placeholder="Password" 
                id="register-password"
              />
              <Input 
                type="password" 
                name="register-confirm-password" 
                placeholder="Confirm Password" 
                id="register-confirm-password"
              />
              <Button
                type="submit"
                
                className="w-full tracking-[0.50px] border-black-900_dd_06 border border-solid hover:bg-gray-200"
              >
                Register
              </Button>
              {message && <p className="text-red-500">{message}</p>}
            </div>
          </form>
        </div>
        <div className="flex flex-col items-center justify-start w-[27%] mr-[183px] gap-[58px]">
          <form onSubmit={handleLoginSubmit}>
            <div className="flex flex-col items-start justify-start w-full gap-1.5">
              <Text as="p" className="tracking-[0.50px] hover:text-blue-500">
                Login
              </Text>
              <Input
                type="text"
                name="login-username"
                placeholder="Username"
                className="w-full"
                id="login-username"
              />
              <Input
                type="password"
                name="login-password"
                placeholder="Password"
                className="w-full"
                id="login-password"
              />
              <Button
                type="submit"
                
                className="w-full tracking-[0.50px] border-black-900_dd_06 border border-solid hover:bg-gray-200"
              >
                Login
               </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
