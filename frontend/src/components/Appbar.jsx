export const Appbar = ({initial }) => {
    return (
        <div className="shadow h-14 flex justify-between items-center px-4 bg-white">
            <div className="text-2xl font-semibold">
                PayEase
            </div>
            <div className="flex items-center">
                <div className="mr-4 text-gray-700 text-lg font-semibold">
                    Hello
                </div>
                <div className="rounded-full h-11 w-11 bg-slate-200 flex items-center justify-center text-xl text-gray-800">
                    {initial}
                </div>
            </div>
        </div>
    );
}