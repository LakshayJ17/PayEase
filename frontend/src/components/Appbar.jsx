export const Appbar = ({ username, initial }) => {
    return (
        <div className="shadow-lg h-16 flex justify-between items-center px-6 py-10 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
            <div className="text-2xl font-bold tracking-wide">
                PayEase
            </div>
            <div className="flex items-center">
                <div className="mr-4 text-lg font-medium">
                    Hello, {username}
                </div>
                <div className="rounded-full h-12 w-12 bg-white text-purple-600 flex items-center justify-center text-xl font-bold shadow-md">
                    {initial}
                </div>
            </div>
        </div>
    );
};
