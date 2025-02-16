export function Button({ label, onClick, className, loading = false }) {
    return (
        <button
            onClick={onClick}
            type="button"
            disabled={loading}
            className={`focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-m px-5 py-2.5 me-2 mb-2 cursor-pointer flex items-center justify-center ${loading ? "opacity-50 cursor-not-allowed" : ""
                } ${className}`}
        >
            {loading ? (
                <>
                    <svg
                        className="animate-spin h-5 w-5 mr-2 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 00-8 8h4z"
                        ></path>
                    </svg>

                </>
            ) : (
                label
            )}
        </button>
    );
}
