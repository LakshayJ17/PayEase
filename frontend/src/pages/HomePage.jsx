// import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { motion, AnimatePresence } from "framer-motion"
// import mobilepayment from "../assets/mobilepayment.png"
// import creditcard from "../assets/creditcard.png"
// import banktransfer from "../assets/banktransfer.png"
// import { Button } from "../components/Button"

// export default function HomePage() {
//     const [loading, setLoading] = useState(true)
//     const [activeSection, setActiveSection] = useState("")
//     const navigate = useNavigate()

//     // Page loading effect
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setLoading(false)
//         }, 1500)

//         return () => clearTimeout(timer)
//     }, [])

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         setActiveSection(entry.target.id)
//                     }
//                 })
//             },
//             { threshold: 0.3 },
//         )

//         const sections = document.querySelectorAll("section[id]")
//         sections.forEach((section) => observer.observe(section))

//         return () => {
//             sections.forEach((section) => observer.unobserve(section))
//         }
//     }, [])

//     // Handle payment method selection
//     const handlePaymentSelect = () => {
//         setLoading(true)
//         setTimeout(() => {
//             navigate("/dashboard")
//         }, 1000)
//     }

//     return (
//         <AnimatePresence>
//             {loading ? (
//                 <motion.div
//                     initial={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a101f]"
//                 >
//                     <div className="text-center">
//                         <div className="relative w-20 h-20 mx-auto mb-4">
//                             <div className="absolute inset-0 rounded-full border-t-2 border-purple-500 animate-spin"></div>
//                             <div className="absolute inset-2 rounded-full border-t-2 border-blue-500 animate-spin [animation-duration:3s]"></div>
//                             <div className="absolute inset-4 rounded-full border-t-2 border-indigo-500 animate-spin [animation-duration:5s]"></div>
//                         </div>
//                         <motion.div
//                             initial={{ opacity: 0, y: 10 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.3 }}
//                             className="text-xl font-medium text-white"
//                         >
//                             Loading PayEase
//                         </motion.div>
//                     </div>
//                 </motion.div>
//             ) : (
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.5 }}
//                     className="text-white min-h-screen bg-gradient-to-br from-[#0a101f] to-[#111827] relative overflow-hidden"
//                 >
//                     {/* Animated Background Elements */}
//                     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                         <motion.div
//                             animate={{
//                                 x: [0, 10, 0],
//                                 y: [0, -10, 0],
//                             }}
//                             transition={{
//                                 repeat: Number.POSITIVE_INFINITY,
//                                 duration: 8,
//                                 ease: "easeInOut",
//                             }}
//                             className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]"
//                         ></motion.div>
//                         <motion.div
//                             animate={{
//                                 x: [0, -10, 0],
//                                 y: [0, 10, 0],
//                             }}
//                             transition={{
//                                 repeat: Number.POSITIVE_INFINITY,
//                                 duration: 10,
//                                 ease: "easeInOut",
//                             }}
//                             className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-500/10 blur-[100px]"
//                         ></motion.div>
//                         <motion.div
//                             animate={{
//                                 x: [0, 15, 0],
//                                 y: [0, 15, 0],
//                             }}
//                             transition={{
//                                 repeat: Number.POSITIVE_INFINITY,
//                                 duration: 12,
//                                 ease: "easeInOut",
//                             }}
//                             className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-purple-500/5 blur-[80px]"
//                         ></motion.div>
//                     </div>

//                     {/* Header */}
//                     <motion.header
//                         initial={{ y: -20, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ duration: 0.5 }}
//                         className="fixed w-full top-0 z-40 flex justify-between px-8 py-6 bg-gray-900/40 backdrop-blur-xl border-b border-white/5 shadow-lg"
//                     >
//                         <div className="text-3xl font-bold text-white">
//                             <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
//                                 PayEase
//                             </span>
//                         </div>
//                         <nav className="hidden md:flex gap-6 text-lg">
//                             <NavLink href="#home" active={activeSection === "home"}>
//                                 Home
//                             </NavLink>
//                             <NavLink href="#payment-methods" active={activeSection === "payment-methods"}>
//                                 Services
//                             </NavLink>
//                             <NavLink href="#features" active={activeSection === "features"}>
//                                 Features
//                             </NavLink>
//                         </nav>

//                     </motion.header>

//                     {/* Hero Section */}
//                     <section id="home" className="relative h-[100vh] ">

//                         <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent">
//                             <div className="h-full flex flex-col justify-center px-6 sm:px-12 lg:px-24">
//                                 <motion.div
//                                     initial={{ opacity: 0, y: 30 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.8, delay: 0.2 }}
//                                     className="max-w-4xl space-y-6"
//                                 >
//                                     <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
//                                         <motion.span
//                                             initial={{ opacity: 0, y: 20 }}
//                                             animate={{ opacity: 1, y: 0 }}
//                                             transition={{ duration: 0.5, delay: 0.3 }}
//                                             className="block"
//                                         >
//                                             Revolutionize
//                                         </motion.span>
//                                         <motion.span
//                                             initial={{ opacity: 0, y: 20 }}
//                                             animate={{ opacity: 1, y: 0 }}
//                                             transition={{ duration: 0.5, delay: 0.5 }}
//                                             className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
//                                         >
//                                             Your Payments
//                                         </motion.span>
//                                         <motion.span
//                                             initial={{ opacity: 0, y: 20 }}
//                                             animate={{ opacity: 1, y: 0 }}
//                                             transition={{ duration: 0.5, delay: 0.7 }}
//                                             className="block"
//                                         >
//                                             with PayEase
//                                         </motion.span>
//                                     </h1>
//                                     <motion.p
//                                         initial={{ opacity: 0 }}
//                                         animate={{ opacity: 1 }}
//                                         transition={{ duration: 0.8, delay: 0.9 }}
//                                         className="text-xl sm:text-2xl text-gray-300 max-w-2xl"
//                                     >
//                                         Experience lightning-fast, secure transactions across multiple payment methods. Simplify your
//                                         financial life today.
//                                     </motion.p>
//                                     <motion.div
//                                         initial={{ opacity: 0, y: 20 }}
//                                         animate={{ opacity: 1, y: 0 }}
//                                         transition={{ duration: 0.5, delay: 1.1 }}
//                                     >
//                                         <Button
//                                             className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-8 py-3 rounded-xl text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
//                                             label="Get started"
//                                             onClick={() => {
//                                                 navigate("/signup")
//                                             }}
//                                         />
//                                         <Button
//                                             className=" bg-white px-8 py-3 rounded-sm text-black font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
//                                             label="Explore"
//                                             onClick={() => {
//                                                 const element = document.getElementById("payment-methods")
//                                                 element?.scrollIntoView({ behavior: "smooth" })
//                                             }}
//                                         />
//                                     </motion.div>
//                                 </motion.div>
//                             </div>
//                         </div>
//                     </section>

//                     {/* Payment Methods */}
//                     <section id="payment-methods" className="max-w-6xl mx-auto py-25 px-4">
//                         <motion.h2
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true, amount: 0.3 }}
//                             transition={{ duration: 0.5 }}
//                             className="text-4xl font-bold text-center mb-4"
//                         >
//                             <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
//                                 Our Services
//                             </span>
//                         </motion.h2>
//                         <motion.p
//                             initial={{ opacity: 0 }}
//                             whileInView={{ opacity: 1 }}
//                             viewport={{ once: true, amount: 0.3 }}
//                             transition={{ duration: 0.5, delay: 0.2 }}
//                             className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
//                         >
//                             Select from our range of secure payment options designed to make your transactions seamless and
//                             worry-free.
//                         </motion.p>
//                         <div className="grid md:grid-cols-3 gap-10">
//                             <PaymentCard
//                                 image={creditcard}
//                                 title="Credit Card"
//                                 description="Use your credit card for quick and easy payments with enhanced security features."
//                                 buttonLabel="Learn More"
//                                 buttonClass="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400"
//                                 delay={0.1}
//                             />

//                             <PaymentCard
//                                 image={mobilepayment}
//                                 title="Mobile Payments"
//                                 description="Pay directly from your mobile device with ease and convenience anywhere, anytime."
//                                 buttonLabel="Pay Now"
//                                 buttonClass="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400"
//                                 onClick={handlePaymentSelect}
//                                 loading={loading}
//                                 delay={0.3}
//                             />

//                             <PaymentCard
//                                 image={banktransfer}
//                                 title="Bank Transfers"
//                                 description="Transfer funds securely from your bank account with complete transaction history."
//                                 buttonLabel="Learn More"
//                                 buttonClass="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400"
//                                 delay={0.5}
//                             />
//                         </div>
//                     </section>

//                     {/* Features Section */}
//                     <section id="features" className="py-20">
//                         <div className="max-w-6xl mx-auto px-4 pt-5">
//                             <motion.h2
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true, amount: 0.3 }}
//                                 transition={{ duration: 0.5 }}
//                                 className="text-4xl font-bold text-center mb-4"
//                             >
//                                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
//                                     Why Choose PayEase?
//                                 </span>
//                             </motion.h2>
//                             <motion.p
//                                 initial={{ opacity: 0 }}
//                                 whileInView={{ opacity: 1 }}
//                                 viewport={{ once: true, amount: 0.3 }}
//                                 transition={{ duration: 0.5, delay: 0.2 }}
//                                 className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
//                             >
//                                 We provide the most reliable payment solutions with cutting-edge technology and customer-focused
//                                 service.
//                             </motion.p>
//                             <div className="grid md:grid-cols-3 gap-8">
//                                 <FeatureCard
//                                     title="Secure Transactions"
//                                     icon="🔒"
//                                     description="Your security is our priority. Enjoy encrypted transactions and advanced fraud protection systems."
//                                     delay={0.1}
//                                 />
//                                 <FeatureCard
//                                     title="Fast Payments"
//                                     icon="⚡"
//                                     description="Send and receive payments instantly with minimal transaction fees and maximum efficiency."
//                                     delay={0.3}
//                                 />
//                                 <FeatureCard
//                                     title="24/7 Support"
//                                     icon="💬"
//                                     description="Need help? Our dedicated support team is available 24/7 to assist you with any questions or concerns."
//                                     delay={0.5}
//                                 />
//                             </div>
//                         </div>
//                     </section>

//                     {/* Footer */}
//                     <footer className="bg-gray-900/70 backdrop-blur-xl py-12 border-t border-white/5">
//                         <div className="max-w-6xl mx-auto px-4 text-center">
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 0.5 }}
//                             >
//                                 <div className="text-2xl font-bold mb-4">
//                                     <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
//                                         PayEase
//                                     </span>
//                                 </div>
//                                 <p className="text-gray-400 mb-6">Simplifying payments for a better financial future.</p>
//                                 <div className="flex justify-center gap-6 mb-8">
//                                     <SocialIcon icon="twitter" />
//                                     <SocialIcon icon="facebook" />
//                                     <SocialIcon icon="linkedin" />
//                                     <SocialIcon icon="envelope" />
//                                 </div>
//                                 <p className="text-gray-500 text-sm">© {new Date().getFullYear()} PayEase. All rights reserved.</p>
//                             </motion.div>
//                         </div>
//                     </footer>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     )
// }

// // Navigation Link Component
// const NavLink = ({ href, active, children }) => {
//     return (
//         <a
//             href={href}
//             className={`relative px-2 py-1 transition-colors duration-300 ${active ? "text-white" : "text-gray-400 hover:text-white"
//                 }`}
//         >
//             {children}
//             {active && (
//                 <motion.span
//                     layoutId="navIndicator"
//                     className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                 />
//             )}
//         </a>
//     )
// }

// // Payment Card Component
// const PaymentCard = ({ image, title, description, buttonLabel, buttonClass, onClick, loading, delay = 0 }) => {
//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.5, delay }}
//             whileHover={{ y: -5 }}
//             className="relative rounded-2xl overflow-hidden group"
//         >
//             <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//             <div className="bg-gray-900/50 backdrop-blur-xl border border-white/5 rounded-2xl shadow-xl p-8 text-white transition-all duration-300 h-full flex flex-col">
//                 <div className="bg-gray-800/50 rounded-xl p-4 mb-6 shadow-md overflow-hidden group-hover:shadow-blue-500/10 transition-all duration-300">
//                     <motion.img
//                         src={image}
//                         alt={title}
//                         className="h-48 w-full object-contain transition-transform duration-500 group-hover:scale-105"
//                     />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3">{title}</h3>
//                 <p className="text-gray-400 mb-6 flex-grow">{description}</p>
//                 {/* <Button
//                     className={`w-full py-3 rounded-xl text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-lg ${buttonClass}`}
//                     label={buttonLabel}
//                     onClick={onClick}
//                     loading={loading}
//                 /> */}
//             </div>
//         </motion.div>
//     )
// }

// // Feature Card Component
// const FeatureCard = ({ title, icon, description, delay = 0 }) => {
//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.5, delay }}
//             whileHover={{ y: -5 }}
//             className="bg-gray-900/50 backdrop-blur-xl border border-white/5 p-8 rounded-2xl shadow-xl hover:shadow-purple-500/10 transition-all duration-300 text-white text-center h-full"
//         >
//             <motion.div
//                 initial={{ scale: 0.8 }}
//                 whileInView={{ scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: delay + 0.2 }}
//                 className="text-5xl mb-4"
//             >
//                 {icon}
//             </motion.div>
//             <h3 className="text-xl font-semibold mb-3">{title}</h3>
//             <p className="text-gray-400">{description}</p>
//         </motion.div>
//     )
// }

// // Social Icon Component
// const SocialIcon = ({ icon }) => {
//     return (
//         <a
//             href="#"
//             className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors duration-300"
//         >
//             <span className="sr-only">{icon}</span>
//             <i className={`fa fa-${icon}`}></i>
//         </a>
//     )
// }


import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import mobilepayment from "../assets/mobilepayment.png"
import creditcard from "../assets/creditcard.png"
import banktransfer from "../assets/banktransfer.png"
import { Button } from "../components/Button"

export default function HomePage() {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const navigate = useNavigate()

  // Page loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  // Handle payment method selection
  const handlePaymentSelect = () => {
    setLoading(true)
    setTimeout(() => {
      navigate("/dashboard")
    }, 1000)
  }

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a101f]"
        >
          <div className="text-center">
            <div className="relative w-20 h-20 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full border-t-2 border-purple-500 animate-spin"></div>
              <div className="absolute inset-2 rounded-full border-t-2 border-blue-500 animate-spin [animation-duration:3s]"></div>
              <div className="absolute inset-4 rounded-full border-t-2 border-indigo-500 animate-spin [animation-duration:5s]"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl font-medium text-white"
            >
              Loading PayEase
            </motion.div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white min-h-screen bg-gradient-to-br from-[#0a101f] to-[#111827] relative overflow-hidden"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                x: [0, 10, 0],
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 8,
                ease: "easeInOut",
              }}
              className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]"
            ></motion.div>
            <motion.div
              animate={{
                x: [0, -10, 0],
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 10,
                ease: "easeInOut",
              }}
              className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-500/10 blur-[100px]"
            ></motion.div>
            <motion.div
              animate={{
                x: [0, 15, 0],
                y: [0, 15, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 12,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-purple-500/5 blur-[80px]"
            ></motion.div>
          </div>

          {/* Header */}
          <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed w-full top-0 z-40 flex justify-between px-8 py-6 bg-gray-900/40 backdrop-blur-xl border-b border-white/5 shadow-lg"
          >
            <div className="text-3xl font-bold text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                PayEase
              </span>
            </div>
            <nav className="hidden md:flex gap-6 text-lg">
              <NavLink href="#home" active={activeSection === "home"}>
                Home
              </NavLink>
              <NavLink href="#payment-methods" active={activeSection === "payment-methods"}>
                Services
              </NavLink>
              <NavLink href="#features" active={activeSection === "features"}>
                Features
              </NavLink>
            </nav>
          </motion.header>

          {/* Hero Section */}
          <section id="home" className="relative h-[100vh] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent">
              <div className="h-full flex flex-col justify-center items-center px-6 sm:px-12 lg:px-24">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-6xl space-y-6 text-center"
                >
                  <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="block"
                    >
                      Revolutionize Your Payments
                    </motion.span>
                    {/* <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
                    >
                      Your Payments
                    </motion.span> */}
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
                    >
                      with PayEase
                    </motion.span>
                  </h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto pt-5"
                  >
                    Experience lightning-fast, secure transactions across multiple payment methods. Simplify your
                    financial life today.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center pt-5"
                  >
                    <Button
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-8 py-3 rounded-sm text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                      label="Get started"
                      onClick={() => {
                        navigate("/signup")
                      }}
                    />
                    <Button
                      className="bg-white px-8 py-3 rounded-sm text-black font-semibold transition-all duration-300 shadow-lg hover:shadow-white/20"
                      label="Learn more"
                      onClick={() => {
                        const element = document.getElementById("payment-methods")
                        element?.scrollIntoView({ behavior: "smooth" })
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Payment Methods */}
          <section id="payment-methods" className="max-w-6xl mx-auto py-25 px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-center mb-4"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Our Services
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              Select from our range of secure payment options designed to make your transactions seamless and
              worry-free.
            </motion.p>
            <div className="grid md:grid-cols-3 gap-10">
              <PaymentCard
                image={creditcard}
                title="Credit Card"
                description="Use your credit card for quick and easy payments with enhanced security features."
                buttonLabel="Learn More"
                buttonClass="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400"
                delay={0.1}
              />

              <PaymentCard
                image={mobilepayment}
                title="Mobile Payments"
                description="Pay directly from your mobile device with ease and convenience anywhere, anytime."
                buttonLabel="Pay Now"
                buttonClass="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400"
                onClick={handlePaymentSelect}
                loading={loading}
                delay={0.3}
              />

              <PaymentCard
                image={banktransfer}
                title="Bank Transfers"
                description="Transfer funds securely from your bank account with complete transaction history."
                buttonLabel="Learn More"
                buttonClass="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400"
                delay={0.5}
              />
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-20">
            <div className="max-w-6xl mx-auto px-4 pt-5">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-center mb-4"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  Why Choose PayEase?
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
              >
                We provide the most reliable payment solutions with cutting-edge technology and customer-focused
                service.
              </motion.p>
              <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard
                  title="Secure Transactions"
                  icon="🔒"
                  description="Your security is our priority. Enjoy encrypted transactions and advanced fraud protection systems."
                  delay={0.1}
                />
                <FeatureCard
                  title="Fast Payments"
                  icon="⚡"
                  description="Send and receive payments instantly with minimal transaction fees and maximum efficiency."
                  delay={0.3}
                />
                <FeatureCard
                  title="24/7 Support"
                  icon="💬"
                  description="Need help? Our dedicated support team is available 24/7 to assist you with any questions or concerns."
                  delay={0.5}
                />
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900/70 backdrop-blur-xl py-12 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-2xl font-bold mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                    PayEase
                  </span>
                </div>
                <p className="text-gray-400 mb-6">Simplifying payments for a better financial future.</p>
                <div className="flex justify-center gap-6 mb-8">
                  <SocialIcon icon="twitter" />
                  <SocialIcon icon="facebook" />
                  <SocialIcon icon="linkedin" />
                  <SocialIcon icon="envelope" />
                </div>
                <p className="text-gray-500 text-sm">© {new Date().getFullYear()} PayEase. All rights reserved.</p>
              </motion.div>
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Navigation Link Component
const NavLink = ({ href, active, children }) => {
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
  )
}

// Payment Card Component
const PaymentCard = ({ image, title, description, buttonLabel, buttonClass, onClick, loading, delay = 0 }) => {
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
  )
}

// Feature Card Component
const FeatureCard = ({ title, icon, description, delay = 0 }) => {
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
  )
}

// Social Icon Component
const SocialIcon = ({ icon }) => {
  return (
    <a
      href="#"
      className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors duration-300"
    >
      <span className="sr-only">{icon}</span>
      <i className={`fa fa-${icon}`}></i>
    </a>
  )
}

