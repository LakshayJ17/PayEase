import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async () => {
        setLoading(true);
        try {
            // We have used post bcz we have to send a post request
            const response = await axios.post("https://payease-qu9o.onrender.com/api/v1/user/signup", {
                username, firstName, lastName, password
            })

            // We have to store the token (Bearer ####) in the local storage
            localStorage.setItem("userId", response.data.userId)
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("initial", firstName[0].toUpperCase())
            localStorage.setItem("firstName", firstName)
            navigate("/homepage")
        } catch {
            alert("Email aready taken / Incorrect credentials")
        }
        setLoading(false)
    }

    // Taking all the inputs such as name, email , pwd and then on clicking the sign up button, we are sending the data to the backend and store the received token in the local storage
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign up"} />
                    <SubHeading label={"Enter your information to create an account"} />
                    <InputBox onChange={e => {
                        setFirstName(e.target.value)
                    }} placeholder="John" label={"First Name"} />

                    <InputBox onChange={e => {
                        setLastName(e.target.value)
                    }} placeholder="Doe" label={"Last Name"} />

                    <InputBox onChange={e => {
                        setUsername(e.target.value)
                    }} placeholder="johndoe@gmail.com" label={"Email"} />

                    <InputBox onChange={e => {
                        setPassword(e.target.value)
                    }} placeholder="password123" label={"Password"} />

                    <div className="pt-4">
                        <Button className={" text-white bg-gray-800 hover:bg-gray-900 "}
                            onClick={handleSignup}
                            label={"Sign up"}
                            loading={loading} />
                    </div>

                    <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
                </div>
            </div>
        </div>
    );
};