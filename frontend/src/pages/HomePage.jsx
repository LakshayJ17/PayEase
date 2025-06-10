import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import mobilepayment from "../assets/mobilepayment.png"
import creditcard from "../assets/creditcard.png"
import banktransfer from "../assets/banktransfer.png"
import { Button } from "../components/Button"
import { SocialIcon } from "../components/SocialIcon"
import { PaymentCard } from "../components/PaymentCard"
import { NavLink } from "../components/NavLink"
import Ribbons from "@/components/react-bits/Ribbons"
import Carousel from "@/components/react-bits/Carousel"


export const HomePage = () => {
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
          className="text-white min-h-screen bg-gradient-to-br from-[#0a101f] to-[#111827] relative overflow-hidden group"
        >
          {/* Ribbons Animation - hover effect */}
          <div
            className="pointer-events-none absolute inset-0 w-full h-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ transitionProperty: 'opacity' }}
          >
            <Ribbons
              baseThickness={30}
              colors={['#ffffff']}
              speedMultiplier={0.5}
              maxAge={500}
              enableFade={false}
              enableShaderEffect={true}
            />
          </div>
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
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
              <span className="cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                PayEase
              </span>
            </div>
            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-6 text-lg">
              <NavLink href="#home" active={activeSection === "home"}>
                Home
              </NavLink>
              <NavLink href="#services" active={activeSection === "services"}>
                Services
              </NavLink>
              <NavLink href="#features" active={activeSection === "features"}>
                Features
              </NavLink>
            </nav>

            <div className="flex gap-x-1">
              <Button
                className="mr-10 hidden sm:block"
                label="Login"
                onClick={() => {
                  navigate("/signin")
                }}
              />
              <Button
                className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 px-4 py-2 rounded-md text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                label="Get started"
                onClick={() => {
                  navigate("/signup")
                }}
              />
            </div>
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
                    className="flex flex-col sm:flex-row gap-4 justify-center pt-5 "
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
                        const element = document.getElementById("services")
                        element?.scrollIntoView({ behavior: "smooth" })
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section id="services" className="max-w-6xl mx-auto py-25 px-4">
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
                <span className="bg-clip-text text-transparent text-3xl sm:text-5xl bg-gradient-to-r from-purple-400 to-blue-400">
                  Why Choose PayEase?
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center text-gray-400 mb-12 text-sm sm:text-xl max-w-2xl mx-auto"
              >
                We provide the most reliable payment solutions with cutting-edge technology and customer-focused
                service.
              </motion.p>
            
                <div className="flex justify-center px-5">
                  <Carousel
                    baseWidth={900}
                    baseWidthMobile={340}
                    autoplay={true}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
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
                  <SocialIcon className={"w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors duration-300"} icon="twitter" />
                  <SocialIcon className={"w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors duration-300"} icon="facebook" />
                  <SocialIcon className={"w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors duration-300"} icon="linkedin" />
                  <SocialIcon className={"w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors duration-300"} icon="envelope" />
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
