import { motion } from "framer-motion"

export const Balance = ({ value }) => {
  return <>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-8 shadow-lg"
    >
      <h2 className="text-xl font-semibold text-gray-300 mb-2">Your Balance</h2>
      <div className="text-3xl font-bold text-green-400">₹ {value}</div>
    </motion.div>
  </>
}

