export function Button({ label, onClick, className, loading = false }) {
    return (
        <button
            onClick={onClick}
            type="button"
            disabled={loading}
            className={`w-full flex items-center justify-center px-6 py-2 rounded-lg text-white font-medium text-lg transition-all duration-300
            ${loading ? "opacity-50 cursor-not-allowed" : "hover:brightness-110 hover:scale-105"}
            bg-gradient-to-r from-purple-600 to-blue-500 shadow-md ${className}`}
        >
            {loading ? (
                <svg className="animate-spin h-6 w-6 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 00-8 8h4z"></path>
                </svg>
            ) : (
                label
            )}
        </button>
    );
}
