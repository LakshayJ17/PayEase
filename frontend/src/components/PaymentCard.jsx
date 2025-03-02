import { motion } from "framer-motion";

export const PaymentCard = ({ image, title, description, buttonLabel, buttonClass, onClick, loading, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="relative rounded-2xl overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="bg-gray-900/50 backdrop-blur-xl border border-white/5 rounded-2xl shadow-xl p-8 text-white transition-all duration-300 h-full flex flex-col">
        <div className="bg-gray-800/50 rounded-xl p-4 mb-6 shadow-md overflow-hidden group-hover:shadow-blue-500/10 transition-all duration-300">
          <motion.img
            src={image}
            alt={title}
            className="h-48 w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-400 mb-6 flex-grow">{description}</p>
        {/* <Button
          className={`w-full py-3 rounded-xl text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-lg ${buttonClass}`}
          label={buttonLabel}
          onClick={onClick}
          loading={loading}
        /> */}
      </div>
    </motion.div>
  );
};
