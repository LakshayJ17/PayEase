import { motion } from "framer-motion";

export const NavLink = ({ href, active, children }) => {
  return (
    <a
      href={href}
      className={`relative px-2 py-1 transition-colors duration-300 ${
        active ? "text-white" : "text-gray-400 hover:text-white"
      }`}
    >
      {children}
      {active && (
        <motion.span
          layoutId="navIndicator"
          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </a>
  );
};
