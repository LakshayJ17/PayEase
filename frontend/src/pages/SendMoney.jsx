// import { useSearchParams } from 'react-router-dom';
// import axios from "axios";
// import { useState } from 'react';
// import { Button } from '../components/Button';

// export const SendMoney = () => {
//     const [searchParams] = useSearchParams();
//     const id = searchParams.get("id");
//     const name = searchParams.get("name");
//     const [amount, setAmount] = useState(0);
//     const [loading, setLoading] = useState(false);
//     const [success, setSuccess] = useState(false);

//     const handleTransfer = async () => {
//         setLoading(true);
//         try {
//             const response = await axios.post("https://payease-qu9o.onrender.com/api/v1/account/transfer", {
//                 to: id,
//                 amount
//             }, {
//                 headers: {
//                     Authorization: "Bearer " + localStorage.getItem("token")
//                 }
//             });
//             if (response.status === 200) {
//                 setSuccess(true);
//             }

//         } catch (error) {
//             console.error(error);
//             setSuccess(false);
//             alert("Transfer failed");
//         }
//         setLoading(false);
//     }

//     return <div className="flex justify-center h-screen bg-gray-100">
//         <div className="h-full flex flex-col justify-center">
//             <div
//                 className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
//                 <div className="flex flex-col space-y-1.5 p-2">
//                     <h2 className="text-3xl font-bold text-center">Send Money</h2>
//                 </div>
//                 <div className="p-3">
//                     <div className="flex items-center space-x-4">
//                         <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
//                             <span className="text-2xl text-white">{name[0].toUpperCase()}</span>
//                         </div>
//                         <h3 className="text-2xl font-semibold">{name}</h3>
//                     </div>
//                     <div className="space-y-4 pt-5">
//                         {success ? (
//                             <div className="flex flex-col items-center">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
//                                 </svg>

//                                 <p className="text-xl font-semibold text-green-600 mt-3">Transfer Successful!</p>
//                             </div>
//                         ) : (
//                             <>
//                                 <div className="space-y-3">
//                                     <label className="text-sm font-medium" htmlFor="amount">
//                                         Amount (in Rs)
//                                     </label>
//                                     <input
//                                         onChange={(e) => setAmount(e.target.value)}
//                                         type="number"
//                                         className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
//                                         id="amount"
//                                         placeholder="Enter amount"
//                                     />
//                                 </div>

//                                 <Button
//                                     onClick={handleTransfer}
//                                     className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white cursor-pointer"
//                                     label={"Initiate Transfer"}
//                                     loading={loading}
//                                 />
//                             </>
//                         )}
//                     </div>

//                     {/* <div className="space-y-4 pt-5">
//                         <div className="space-y-3">
//                             <div>
//                                 <label
//                                     className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                                     htmlFor="amount"
//                                 >
//                                     Amount (in Rs)
//                                 </label>
//                             </div>

//                             <div>
//                                 <input
//                                     onChange={(e) => {
//                                         setAmount(e.target.value);
//                                     }}
//                                     type="number"
//                                     className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
//                                     id="amount"
//                                     placeholder="Enter amount"
//                                 />
//                             </div>

//                         </div>
//                         <Button
//                             onClick={handleTransfer}
//                             className={"justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white cursor-pointer"}
//                             label={"Initiate Transfer"}
//                             loading={loading}
//                         />
//                     </div> */}
//                 </div>
//             </div>
//         </div>
//     </div>
// }

import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Button } from "../components/Button";

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleTransfer = async () => {
        setLoading(true);
        try {
            const response = await axios.post("https://payease-qu9o.onrender.com/api/v1/account/transfer", {
                to: id,
                amount,
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            });

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
        <div className={`flex justify-center h-screen transition-all duration-500 ${success ? "bg-green-100" : "bg-gray-100"}`}>
            <div className="h-full flex flex-col justify-center items-center">
                <div className={`border text-card-foreground max-w-md p-6 space-y-8 w-96 shadow-lg rounded-lg transition-all duration-500 ${success ? "bg-green-500 text-white border-green-600" : "bg-white"}`}>
                    
                    {success ? (
                        <div className="flex flex-col items-center text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-16 h-16 text-white animate-bounce">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <h2 className="text-2xl font-bold mt-4">Transfer Successful! 🎉</h2>
                            <p className="text-lg mt-2">You have successfully sent ₹{amount} to {name}.</p>
                        </div>
                    ) : (
                        <>
                            <div className="flex flex-col space-y-1.5 text-center">
                                <h2 className="text-3xl font-bold text-gray-800">Send Money</h2>
                                <p className="text-gray-600">Enter the amount to transfer</p>
                            </div>

                            <div className="flex items-center space-x-4 justify-start">
                                <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-semibold">
                                    {name[0].toUpperCase()}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-medium text-gray-700" htmlFor="amount">
                                    Amount (in ₹)
                                </label>
                                <input
                                    onChange={(e) => setAmount(e.target.value)}
                                    type="number"
                                    className="flex h-12 w-full rounded-lg border border-gray-300 bg-gray-50 mt-2 px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    id="amount"
                                    placeholder="Enter amount"
                                />
                            </div>

                            <Button
                                onClick={handleTransfer}
                                className="justify-center rounded-lg text-lg font-medium transition-colors h-12 px-6 w-full bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
                                label={"Initiate Transfer"}
                                loading={loading}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
