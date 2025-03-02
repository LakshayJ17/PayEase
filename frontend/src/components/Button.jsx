import { motion } from "framer-motion";

export const Button = ({ className = "", label, onClick, loading = false, disabled = false }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled || loading}
      className={`relative cursor-pointer ${className} ${disabled || loading ? "opacity-70 cursor-not-allowed" : ""}`}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
        </div>
      ) : (
        <span>{label}</span>
      )}
      <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
    </motion.button>
  );
};
