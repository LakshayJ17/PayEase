// import { useNavigate, useSearchParams } from "react-router-dom";
// import axios from "axios";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Button } from "../components/Button";

// export const SendMoney = () => {
//     const [searchParams] = useSearchParams();
//     const id = searchParams.get("id");
//     const name = searchParams.get("name");
//     const [amount, setAmount] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [success, setSuccess] = useState(false);
//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const handleTransfer = async () => {
//         if (!amount || amount <= 0) {
//             setError("Enter a valid amount greater than ₹0.");
//             return;
//         }

//         setLoading(true);
//         setError("");

//         try {
//             const response = await axios.post(
//                 "https://payease-qu9o.onrender.com/api/v1/account/transfer",
//                 { to: id, amount },
//                 { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
//             );

//             if (response.status === 200) {
//                 setSuccess(true);
//             }
//         } catch (error) {
//             console.error(error);
//             setSuccess(false);
//             alert("Transfer failed");
//         }
//         setLoading(false);
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#0a101f] to-[#111827] px-6 lg:px-8 relative">
//             {/* Animated Background Glow */}
//             <motion.div
//                 animate={{ opacity: [0, 0.5, 0.3, 0] }}
//                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
//                 className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent blur-[120px]"
//             />

//             {/* Success Message */}
//             {success ? (
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.85 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.5 }}
//                     className="w-full max-w-lg bg-gray-900/80 backdrop-blur-2xl border border-gray-700 shadow-xl rounded-2xl p-8 lg:p-10 text-center text-white relative"
//                 >
//                     <motion.svg
//                         initial={{ scale: 0 }}
//                         animate={{ scale: 1 }}
//                         transition={{ duration: 0.5, ease: "easeOut" }}
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="2"
//                         stroke="currentColor"
//                         className="w-16 h-16 mx-auto text-green-400"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//                         />
//                     </motion.svg>
//                     <h2 className="text-2xl lg:text-3xl font-bold mt-5">Transaction Successful! 🎉</h2>
//                     <p className="text-lg mt-3">
//                         Sent <span className="text-blue-400 font-semibold">₹{amount}</span> to{" "}
//                         <span className="font-semibold">{name}</span>.
//                     </p>
//                     <Button
//                         onClick={() => navigate('/dashboard')}
//                         className="mt-6 lg:mt-8 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all"
//                         label={"Make Another Transfer"}
//                     />
//                 </motion.div>
//             ) : (
//                 // Money Transfer Form
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="w-full max-w-lg bg-gray-900/80 backdrop-blur-xl border border-gray-700 shadow-xl rounded-2xl p-8 lg:p-10"
//                 >
//                     <div className="text-center">
//                         <h2 className="text-3xl lg:text-4xl font-bold text-white">Send Money</h2>
//                         <p className="text-gray-400 mt-2">Enter the amount to transfer</p>
//                     </div>

//                     {/* Recipient Info */}
//                     <div className="flex items-center space-x-4 mt-6 lg:mt-8">
//                         <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-2xl font-semibold shadow-lg">
//                             {name[0].toUpperCase()}
//                         </div>
//                         <h3 className="text-xl lg:text-2xl font-semibold text-white">{name}</h3>
//                     </div>

//                     {/* Amount Input */}
//                     <div className="space-y-4 mt-6 lg:mt-8">
//                         <label className="text-sm lg:text-base font-medium text-gray-300" htmlFor="amount">
//                             Amount (in ₹)
//                         </label>
//                         <input
//                             onChange={(e) => {
//                                 setAmount(e.target.value);
//                                 if (e.target.value > 0) setError("");
//                             }}
//                             type="number"
//                             value={amount}
//                             className="flex h-14 w-full rounded-xl border border-gray-700 bg-gray-800 text-white px-5 py-3 mt-2 text-lg lg:text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                             id="amount"
//                             placeholder="Enter amount"
//                         />
//                         {error && <p className="text-red-500 text-sm">{error}</p>}
//                     </div>

//                     {/* Transfer Button */}
//                     <Button
//                         onClick={handleTransfer}
//                         className={"w-full h-13 mt-6 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-white font-semibold shadow-lg transition-all"}
//                         label={"Initiate Transfer"}
//                         loading={loading}
//                         disabled={!amount || amount <= 0}
//                     />
//                 </motion.div>
//             )}
//         </div>
//     );
// };

import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/Button";

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleTransfer = async () => {
        const amountNumber = parseFloat(amount);

        setLoading(true);

        try {
            const response = await axios.post(
                "https://payease-qu9o.onrender.com/api/v1/account/transfer",
                { to: id, amount: amountNumber },
                { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
            );

            if (response.status === 200) {
                setSuccess(true);
            }
        } catch (error) {
            console.error(error);
            setSuccess(false);
            alert("Transfer failed");
        }
        setLoading(false);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#0a101f] to-[#111827] px-6 lg:px-8 relative">
            {/* Animated Background Glow */}
            <motion.div
                animate={{ opacity: [0, 0.5, 0.3, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent blur-[120px]"
            />

            {/* Success Message */}
            {success ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-lg bg-gray-900/80 backdrop-blur-2xl border border-gray-700 shadow-xl rounded-2xl p-8 lg:p-10 text-center text-white relative"
                >
                    <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-16 h-16 mx-auto text-green-400"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </motion.svg>
                    <h2 className="text-2xl lg:text-3xl font-bold mt-5">Transaction Successful! 🎉</h2>
                    <p className="text-lg mt-3">
                        Sent <span className="text-blue-400 font-semibold">₹{amount}</span> to{" "}
                        <span className="font-semibold">{name}</span>.
                    </p>
                    <Button
                        onClick={() => navigate('/dashboard')}
                        className="mt-6 lg:mt-8 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all"
                        label={"Make Another Transfer"}
                    />
                </motion.div>
            ) : (
                // Money Transfer Form
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-lg bg-gray-900/80 backdrop-blur-xl border border-gray-700 shadow-xl rounded-2xl p-8 lg:p-10"
                >
                    <div className="text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">Send Money</h2>
                        <p className="text-gray-400 mt-2">Enter the amount to transfer</p>
                    </div>

                    {/* Recipient Info */}
                    <div className="flex items-center space-x-4 mt-6 lg:mt-8">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-2xl font-semibold shadow-lg">
                            {name[0].toUpperCase()}
                        </div>
                        <h3 className="text-xl lg:text-2xl font-semibold text-white">{name}</h3>
                    </div>

                    {/* Amount Input */}
                    <div className="space-y-4 mt-6 lg:mt-8">
                        <label className="text-sm lg:text-base font-medium text-gray-300" htmlFor="amount">
                            Amount (in ₹)
                        </label>
                        <input
                            onChange={(e) => {
                                setAmount(e.target.value);
                            }}
                            type="number"
                            value={amount}
                            className="flex h-14 w-full rounded-xl border border-gray-700 bg-gray-800 text-white px-5 py-3 mt-2 text-lg lg:text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            id="amount"
                            placeholder="Enter amount"
                        />
                    </div>

                    {/* Transfer Button */}
                    <Button
                        onClick={handleTransfer}
                        className={"w-full h-13 mt-6 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-white font-semibold shadow-lg transition-all"}
                        label={"Initiate Transfer"}
                        loading={loading}
                        disabled={!amount || parseFloat(amount) <= 0}
                    />
                </motion.div>
            )}
        </div>
    );
};
