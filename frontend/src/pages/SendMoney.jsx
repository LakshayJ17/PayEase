// import { useSearchParams } from "react-router-dom";
// import axios from "axios";
// import { useState } from "react";
// import { Button } from "../components/Button";

// export const SendMoney = () => {
//     const [searchParams] = useSearchParams();
//     const id = searchParams.get("id");
//     const name = searchParams.get("name");
//     const [amount, setAmount] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [success, setSuccess] = useState(false);
//     const [error, setError] = useState(""); 

//     const handleTransfer = async () => {
//         if (!amount || amount <= 0) {
//             setError("Please enter a valid amount greater than ₹0.");
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
//         <div className={`flex justify-center items-center min-h-screen transition-all duration-500 ${success ? "bg-green-500" : "bg-gray-100"}`}>
//             {success ? (
//                 <div className="w-full h-full sm:h-auto sm:w-96 p-6 bg-green-600 text-white text-center flex flex-col justify-center items-center sm:rounded-lg shadow-lg animate-fadeIn">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
//                          className="w-16 h-16 text-white animate-bounceOnce">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
//                     </svg>
//                     <h2 className="text-3xl font-bold mt-4">Transfer Successful! 🎉</h2>
//                     <p className="text-lg mt-2">You have successfully sent ₹{amount} to {name}.</p>
//                 </div>
//             ) : (
//                 <div className="border text-card-foreground max-w-md p-6 space-y-8 w-96 bg-white shadow-lg rounded-lg">
//                     <div className="flex flex-col space-y-1.5 text-center">
//                         <h2 className="text-3xl font-bold text-gray-800">Send Money</h2>
//                         <p className="text-gray-600">Enter the amount to transfer</p>
//                     </div>
//                     <div className="flex items-center space-x-4 justify-start">
//                         <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-2xl font-semibold">
//                             {name[0].toUpperCase()}
//                         </div>
//                         <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
//                     </div>
//                     <div className="space-y-3">
//                         <label className="text-sm font-medium text-gray-700" htmlFor="amount">Amount (in ₹)</label>
//                         <input
//                             onChange={(e) => {
//                                 setAmount(e.target.value);
//                                 if (e.target.value > 0) setError(""); 
//                             }}
//                             type="number"
//                             value={amount}
//                             className="flex h-12 w-full rounded-lg border border-gray-300 bg-gray-50 mt-3 px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             id="amount"
//                             placeholder="Enter amount"
//                         />
//                         {error && <p className="text-red-500 text-sm">{error}</p>}
//                     </div>
//                     <Button
//                         onClick={handleTransfer}
//                         className="justify-center rounded-lg text-lg font-medium transition-colors h-12 px-6 w-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
//                         label={"Initiate Transfer"}
//                         loading={loading}
//                         disabled={!amount || amount <= 0} 
//                     />
//                 </div>
//             )}
//         </div>
//     );
// };

import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Button } from "../components/ui/Button";

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleTransfer = async () => {
        if (!amount || amount <= 0) {
            setError("Please enter a valid amount greater than ₹0.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const response = await axios.post(
                "https://payease-qu9o.onrender.com/api/v1/account/transfer",
                { to: id, amount },
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
        <div className={`flex justify-center items-center min-h-screen transition-all duration-500 ${success ? "bg-green-700" : "bg-gray-100"}`}>
            {success ? (
                <div className="w-screen h-screen sm:w-96 sm:h-auto p-6 bg-green-700 text-white text-center flex flex-col justify-center items-center sm:rounded-lg shadow-lg animate-fadeIn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                         className="w-16 h-16 text-white animate-bounceOnce">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <h2 className="text-3xl font-bold mt-4">Transfer Successful! 🎉</h2>
                    <p className="text-lg mt-2">You have successfully sent ₹{amount} to {name}.</p>
                </div>
            ) : (
                <div className="border text-card-foreground max-w-md p-6 space-y-8 w-96 bg-white shadow-lg rounded-lg">
                    <div className="flex flex-col space-y-1.5 text-center">
                        <h2 className="text-3xl font-bold text-gray-800">Send Money</h2>
                        <p className="text-gray-600">Enter the amount to transfer</p>
                    </div>
                    <div className="flex items-center space-x-4 justify-start">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-2xl font-semibold">
                            {name[0].toUpperCase()}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                    </div>
                    <div className="space-y-3">
                        <label className="text-sm font-medium text-gray-700" htmlFor="amount">Amount (in ₹)</label>
                        <input
                            onChange={(e) => {
                                setAmount(e.target.value);
                                if (e.target.value > 0) setError("");
                            }}
                            type="number"
                            value={amount}
                            className="flex h-12 w-full rounded-lg border border-gray-300 bg-gray-50 mt-3 px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="amount"
                            placeholder="Enter amount"
                        />
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                    </div>
                    <Button
                        onClick={handleTransfer}
                        className="justify-center rounded-lg text-lg font-medium transition-colors h-12 px-6 w-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                        label={"Initiate Transfer"}
                        loading={loading}
                        disabled={!amount || amount <= 0} 
                    />
                </div>
            )}
        </div>
    );
};
