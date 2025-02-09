import payment from "../assets/payment.jpg";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white flex items-center justify-center min-h-screen">
      <main className="w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-2xl">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl blur-lg opacity-30"></div>
              <img
                className="relative w-full h-auto object-contain rounded-2xl shadow-lg"
                src={payment}
                alt="Digital Payment"
              />
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start max-w-lg mx-auto w-full lg:max-w-none">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight text-center">
              PayEase
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 text-center">
              Simplifying payments, one click at a time
            </p>

            <div className="space-y-4 w-full max-w-md">
              <div>
                <Button
                  onClick={() => navigate("/signup")}
                  className="w-full bg-black text-white py-4 px-8 rounded-xl text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-gray-800 hover:shadow-xl focus:ring-4 focus:ring-gray-400 focus:ring-opacity-50 transform hover:-translate-y-1"
                  label="Get started"
                />
              </div>

              <div>
                <Button
                  onClick={() => navigate("/signin")}
                  className="w-full bg-gray-200 text-gray-900 py-4 px-8 rounded-xl text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-gray-200 hover:shadow-md focus:ring-4 focus:ring-gray-200 focus:ring-opacity-50 transform hover:-translate-y-1"
                  label="Login"
                />
              </div>
            </div>

            <div className="lg:hidden mt-16 w-full mx-auto">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl blur-lg opacity-30"></div>
                <img
                  className="relative w-full h-auto object-contain rounded-2xl shadow-lg"
                  src={payment}
                  alt="Digital Payment"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

