// import { useEffect, useState } from "react";
// import { Button } from "./Button";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// // Component to display the list of users and provide a search functionality
// export const Users = () => {
//     const [users, setUsers] = useState([]);
//     const [filter, setFilter] = useState("");
//     const userId = localStorage.getItem("userId");

//     useEffect(() => {
//         axios.get(`https://payease-qu9o.onrender.com/api/v1/user/bulk?filter=${filter}`)
//             .then(response => {
//                 setUsers(response.data.user);
//             });
//     }, [filter]);

//     return (
//         <div className="mt-6">
//             <h2 className="text-2xl font-semibold text-gray-900">Users</h2>

//             <div className="my-4">
//                 <input
//                     onChange={(e) => setFilter(e.target.value)}
//                     type="text"
//                     placeholder="Search users..."
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 />
//             </div>

//             <div className="space-y-4">
//                 {users.filter(user => user._id !== userId).map(user => (
//                     <User key={user._id} user={user} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// function User({ user }) {
//     const navigate = useNavigate();
//     const [loading, setLoading] = useState(false);

//     const handlePay = () => {
//         setLoading(true);
//         setTimeout(() => {
//             navigate(`/send?id=${user._id}&name=${user.firstName}`);
//             setLoading(false);
//         }, 1000);
//     };

//     return (
//         <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg border border-gray-200">
//             <div className="flex items-center">
//                 <div className="rounded-full h-12 w-12 bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center text-xl font-semibold shadow-md">
//                     {user.firstName[0].toUpperCase()}
//                 </div>
//                 <div className="ml-4">
//                     <p className="text-lg font-semibold text-gray-800">{user.firstName} {user.lastName}</p>
//                 </div>
//             </div>

//             <div>
//                 <Button 
//                     onClick={handlePay}
//                     label="Send Money"
//                     className="text-white bg-gray-800 hover:bg-gray-900 transition rounded-lg"
//                     loading={loading}
//                 />
//             </div>
//         </div>
//     );
// }

import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Component to display the list of users and provide a search functionality
export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        axios.get(`https://payease-qu9o.onrender.com/api/v1/user/bulk?filter=${filter}`)
            .then(response => {
                setUsers(response.data.user);
            });
    }, [filter]);

    return (
        <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-900">Users</h2>

            <div className="my-4">
                <input
                    onChange={(e) => setFilter(e.target.value)}
                    type="text"
                    placeholder="Search users..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>

            <div className="space-y-4">
                {users.filter(user => user._id !== userId).map(user => (
                    <User key={user._id} user={user} />
                ))}
            </div>
        </div>
    );
};

function User({ user }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handlePay = () => {
        setLoading(true);
        setTimeout(() => {
            navigate(`/send?id=${user._id}&name=${user.firstName}`);
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-3 sm:p-4 shadow-md rounded-lg border border-gray-200">
            <div className="flex items-center space-x-3 sm:space-x-4 w-full sm:w-auto">
                <div className="rounded-full h-10 w-10 sm:h-12 sm:w-12 bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center text-lg font-semibold shadow-md">
                    {user.firstName[0].toUpperCase()}
                </div>
                <div className="text-center sm:text-left">
                    <p className="text-md sm:text-lg font-semibold text-gray-800">{user.firstName} {user.lastName}</p>
                </div>
            </div>

            <div className="w-full sm:w-auto mt-3 sm:mt-0">
                <Button 
                    onClick={handlePay}
                    label="Send Money"
                    className="text-white bg-blue-600 hover:bg-blue-700 transition rounded-lg px-4 py-2 text-sm"
                    loading={loading}
                />
            </div>
        </div>
    );
}

