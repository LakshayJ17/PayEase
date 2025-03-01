export function Button({ label, onClick, className, loading = false }) {
    return (
        <button
            onClick={onClick}
            type="button"
            disabled={loading}
            className={`w-full cursor-pointer text-white py-2 px-6 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out flex items-center justify-center
            ${loading ? "opacity-50 cursor-not-allowed" : "hover:shadow-md transform hover:-translate-y-1"} ${className}`}
        >
            {loading ? (
                <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 00-8 8h4z"></path>
                </svg>
            ) : (
                label
            )}
        </button>
    );
}

