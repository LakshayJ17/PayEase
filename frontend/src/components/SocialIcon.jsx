export const SocialIcon = ({ icon }) => {
    return (
        <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors duration-300"
        >
            <span className="sr-only">{icon}</span>
            <i className={`fa fa-${icon}`}></i>
        </a>
    );
};
