import payment from "../assets/payment.jpg";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-gray-800 to-black flex items-center justify-center min-h-screen px-6">
      <main className="w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div className="hidden lg:flex justify-center items-center">
            <div className="relative group w-full max-w-2xl">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-40 transition duration-300 group-hover:opacity-70"></div>
              <img
                className="relative w-full h-auto object-contain rounded-3xl shadow-xl transition-transform duration-300 group-hover:scale-105"
                src={payment}
                alt="Digital Payment"
              />
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start max-w-lg mx-auto w-full lg:max-w-none">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight text-center lg:text-left">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                PayEase
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 text-center lg:text-left">
              Simplifying payments for a better financial future.
            </p>

            <div className="space-y-4 w-full max-w-md">
              <Button
                onClick={() => navigate("/signup")}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 px-8 rounded-xl text-lg font-semibold transition-all duration-300 ease-in-out hover:shadow-lg hover:brightness-110 transform hover:-translate-y-1 cursor-pointer"
                label="Get Started"
              />

              <Button
                onClick={() => navigate("/signin")}
                className="w-full bg-gray-800 text-white py-4 px-8 rounded-xl text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-gray-700 hover:shadow-md transform hover:-translate-y-1 cursor-pointer"
                label="Login"
              />
            </div>
          </div>
        </div>

        <div className="lg:hidden flex justify-center mt-10">
          <div className="relative group w-full flex items-center justify-center">
            <div className="absolute -inset-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-50"></div>
            <img
              className="relative w-10/12 max-w-xs h-auto object-cover rounded-3xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
              src={payment}
              alt="Digital Payment"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

