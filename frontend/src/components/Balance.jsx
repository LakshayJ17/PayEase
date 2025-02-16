export const Balance = ({ value }) => {
    return (
        <div className="flex justify-between items-center bg-white bg-opacity-10 backdrop-blur-lg shadow-lg rounded-2xl px-6 py-4 border border-gray-200">
            <div className="text-lg font-semibold text-gray-800">
                Your Balance
            </div>
            <div className="text-2xl font-bold text-green-400">
                ₹ {value}
            </div>
        </div>
    );
};

