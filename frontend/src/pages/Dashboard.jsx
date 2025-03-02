import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios"

export const Dashboard = () => {
    const initial = localStorage.getItem("initial")
    const firstName = localStorage.getItem("firstName")
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem("token");
            // Fetch balance
            const balanceResponse = await axios.get('https://payease-qu9o.onrender.com/api/v1/account/balance', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const formattedBalance = balanceResponse.data.balance.toFixed(2);
            setBalance(formattedBalance);
        };

        fetchUserData();
    }, []);

    return (
        <div className="min-h-[100vh] bg-gradient-to-br from-[#0a101f] to-[#111827]">
            <Appbar initial={initial} username={firstName} />
            <div className="m-8">
                <Balance value={balance} />
                <Users />
            </div>
        </div >
    )
}

