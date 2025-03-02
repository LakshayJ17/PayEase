import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Mail, User, Lock } from "lucide-react";
import { BottomWarning } from "@/components/BottomWarning";

export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async () => {
        setLoading(true);
        try {
            const response = await axios.post("https://payease-qu9o.onrender.com/api/v1/user/signup", {
                username,
                firstName,
                lastName,
                password,
            });

            localStorage.setItem("userId", response.data.userId);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("initial", firstName[0].toUpperCase());
            localStorage.setItem("firstName", firstName);
            navigate("/homepage");
        } catch (error) {
            alert("Email already taken / Incorrect credentials");
        }
        setLoading(false);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0a101f] to-[#111827] px-4">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl"></div>
            </div>

            <Card className="w-full max-w-md border-0 bg-gray-900/70 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden relative z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>

                <div className="relative">
                    <CardHeader className="text-center space-y-2 pb-4 pt-8">
                        <CardTitle className="text-white text-3xl font-bold tracking-tight">Sign up for PayEase</CardTitle>
                        <p className="text-gray-400 text-lg">Enter your information to create an account</p>
                    </CardHeader>

                    <CardContent className="pb-8">
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label className="text-gray-300 text-sm font-medium pl-1">First Name</Label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><User size={18} /></div>
                                        <Input type="text"
                                            placeholder="John"
                                            className={"w-full bg-gray-800/50 text-white border-gray-700/50 pl-10 py-6 h-11 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"}
                                            onChange={(e) => setFirstName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-gray-300 text-sm font-medium pl-1">Last Name</Label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><User size={18} /></div>
                                        <Input type="text"
                                            placeholder="Doe"
                                            className={"w-full bg-gray-800/50 text-white border-gray-700/50 pl-10 py-6 h-11 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"}
                                            onChange={(e) => setLastName(e.target.value)} />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-gray-300 text-sm font-medium pl-1">Email</Label>
                                <div className="relative">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Mail size={18} /></div>
                                    <Input type="email"
                                        placeholder="Enter your email"
                                        className={"w-full bg-gray-800/50 text-white border-gray-700/50 pl-10 py-6 h-11 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"}
                                        onChange={(e) => setUsername(e.target.value)} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-gray-300 text-sm font-medium pl-1">Password</Label>
                                <div className="relative">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Lock size={18} /></div>
                                    <Input type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className={"w-full bg-gray-800/50 text-white border-gray-700/50 pl-10 py-6 h-11 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"}
                                        onChange={(e) => setPassword(e.target.value)} />
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300">
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <Button label={"Sign up"}
                                className="w-full h-13 mt-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-white font-semibold shadow-lg transition-all"
                                onClick={handleSignup}
                                loading={loading}
                            />


                            <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
                        </div>
                    </CardContent>
                </div>
            </Card>
        </div>
    );
};
