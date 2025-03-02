import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        axios
            .get(`https://payease-qu9o.onrender.com/api/v1/user/bulk?filter=${filter}`)
            .then((response) => {
                setUsers(response.data.user);
            });
    }, [filter]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
        >
            <h2 className="text-2xl font-semibold text-white mb-4">Users</h2>

            <div className="mb-6">
                <input
                    onChange={(e) => setFilter(e.target.value)}
                    type="text"
                    placeholder="Search users..."
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            <div className="space-y-4">
                {users
                    .filter((user) => user._id !== userId)
                    .map((user) => (
                        <User key={user._id} user={user} />
                    ))}
            </div>
        </motion.div>
    );
};

function User({ user }) {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);

    const handlePay = () => {
        setLoading(true);
        setTimeout(() => {
            navigate(`/send?id=${user._id}&name=${user.firstName}`);
            setLoading(false);
        }, 1000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex justify-between items-center bg-gray-800/50 p-4 rounded-lg border border-gray-700"
        >
            <div className="flex items-center space-x-4">
                <div className="rounded-full h-10 w-10 bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center text-lg font-semibold shadow-md">
                    {user.firstName[0].toUpperCase()}
                </div>
                <div>
                    <p className="text-sm sm:text-xl font-semibold text-white">
                        {user.firstName} {user.lastName}
                    </p>
                </div>
            </div>

            <Button
                onClick={handlePay}
                label="Send Money"
                className="text-sm sm:text-lg py-2 px-3 rounded-sm bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-white font-semibold shadow-lg transition-all"
                loading={loading}
            />
        </motion.div>
    );
}


