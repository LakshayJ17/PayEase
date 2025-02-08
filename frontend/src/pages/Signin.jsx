import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSigin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
        username, password
      })

      localStorage.setItem("token", response.data.token)
      navigate('/dashboard')
    } catch {
      alert("Invalid credentials")
    }
  }

  return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          placeholder="johndoe@gmail.com" label={"Email"} />

        <InputBox
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          placeholder="johndoe123" label={"Password"} />

        <div className="pt-4">
          <Button className={"w-full text-white bg-gray-800 hover:bg-gray-900"}
           label={"Sign in"} onClick={handleSigin} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}