import { motion } from "framer-motion"

export const Appbar = ({ username, initial }) => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/40 backdrop-blur-xl border-b border-white/5 shadow-lg"
    >
      <div className="container mx-auto py-6 px-4 sm:px-0 flex justify-between items-center text-white">
        <div className="text-2xl sm:text-4xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">PayEase</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-lg font-medium">Hello, {username}</div>
          <div className="rounded-full h-10 w-10 bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold shadow-md">
            {initial}
          </div>
        </div>
      </div>
    </motion.header>
  )
}


