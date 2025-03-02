import { motion } from "framer-motion";

export const FeatureCard = ({ title, icon, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="bg-gray-900/50 backdrop-blur-xl border border-white/5 p-8 rounded-2xl shadow-xl hover:shadow-purple-500/10 transition-all duration-300 text-white text-center h-full"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className="text-5xl mb-4"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

