import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Eye, EyeOff, Lock, Mail } from "lucide-react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BottomWarning } from "@/components/BottomWarning"
import { Button } from "@/components/ui/Button"


export function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false)

  const handleSignin = async () => {
    setLoading(true);
    try {
      const response = await axios.post("https://payease-qu9o.onrender.com/api/v1/user/signin", {
        username, password
      });

      if (response.data.token && response.data.firstName) {
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("initial", response.data.firstName[0].toUpperCase());
        localStorage.setItem("firstName", response.data.firstName);
        navigate('/homepage');
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      alert("Invalid credentials");
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
            <CardTitle className="text-white text-3xl font-bold tracking-tight">Welcome to PayEase</CardTitle>
            <p className="text-gray-400 text-lg">Log in to get the best services!</p>
          </CardHeader>

          <CardContent className="pb-8">
            <div className="space-y-6">
              {/* Email Input */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300 text-sm font-medium pl-1">
                  Email
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Mail size={18} />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-gray-800/50 text-white border-gray-700/50 pl-10 py-6 h-11 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-300 text-sm font-medium pl-1">
                  Password
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Lock size={18} />
                  </div>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full bg-gray-800/50 text-white border-gray-700/50 pl-10 pr-10 py-6 h-11 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <a href="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                  Forgot password?
                </a>
              </div>

              <Button
                className={"w-full text-white bg-blue-600 hover:bg-blue-500"}
                label={"Sign in"}
                onClick={handleSignin}
                loading={loading}
              />

              {/* Signup Link */}
              <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}

