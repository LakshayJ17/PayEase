import mobilepayment from "../assets/mobilepayment.png"
import creditcard from "../assets/creditcard.png"
import banktransfer from "../assets/banktransfer.png"
import onlinepay from "../assets/onlinepay.jpg"
import { useNavigate } from "react-router-dom"

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white">
            <header className="flex justify-between items-center px-6 py-6 border-b border-gray-400">
                <div className="flex items-center font-bold text-3xl">PayEase</div>
                <nav className="hidden md:flex gap-6">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                        Home
                    </a>
                    <a href="#payment-methods" className="text-gray-600 hover:text-gray-900">
                        Services
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                        Contact
                    </a>
                </nav>
            </header>

            {/* Hero Section */}

            <section id="home" className="relative h-[90vh] overflow-hidden object-cover">
                <img
                    src={onlinepay}
                    alt="People using mobile devices"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent">
                    <div className="h-full flex flex-col justify-center px-6 sm:px-12 lg:px-24">
                        <div className="max-w-4xl space-y-6">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight animate-slide-up">
                                <span className="block">Revolutionize</span>
                                <span className="block text-blue-400">Your Payments</span>
                                <span className="block">with PayEase</span>
                            </h1>
                            <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl animate-fade-in">
                                Experience lightning-fast, secure transactions across multiple payment methods. Simplify your financial
                                life today.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Payment Methods */}
            <section id="payment-methods" className="max-w-6xl mx-auto py-20 px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Choose Your Payment Method</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Credit Card */}
                    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="p-8 relative">
                            <div className="bg-white rounded-xl p-4 mb-6 shadow-md group-hover:-translate-y-2 transition-transform duration-300">
                                <img
                                    src={creditcard}
                                    alt="Credit Card Payments"
                                    className="h-48 w-full object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Credit Card</h3>
                            <p className="text-gray-600 mb-4">Use your credit card for quick and easy payments.</p>
                            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Mobile Payments */}
                    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="p-8 relative">
                            <div className="bg-white rounded-xl p-4 mb-6 shadow-md group-hover:-translate-y-2 transition-transform duration-300">
                                <img
                                    src={mobilepayment}
                                    alt="Mobile Payments"
                                    className="h-48 w-full object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Mobile Payments</h3>
                            <p className="text-gray-600 mb-4">Pay directly from your mobile device with ease.</p>
                            <button onClick={() => navigate("/dashboard")}
                                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors cursor-pointer">
                                Pay Now
                            </button>
                        </div>
                    </div>

                    {/* Bank Transfers */}
                    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="p-8 relative">
                            <div className="bg-white rounded-xl p-4 mb-6 shadow-md group-hover:-translate-y-2 transition-transform duration-300">
                                <img
                                    src={banktransfer}
                                    alt="Bank Transfers"
                                    className="h-48 w-full object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Bank Transfers</h3>
                            <p className="text-gray-600 mb-4">Transfer funds securely from your bank account.</p>
                            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors cursor-pointer">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose PayEase?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Secure */}
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Secure</h3>
                                    <p className="text-gray-600">Your transactions are protected with top-grade security.</p>
                                </div>
                            </div>
                        </div>

                        {/* Fast */}
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-4">
                                <div className="bg-green-100 p-3 rounded-full">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Fast</h3>
                                    <p className="text-gray-600">Enjoy speedy processing time for all payments.</p>
                                </div>
                            </div>
                        </div>

                        {/* Reliable */}
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-4">
                                <div className="bg-purple-100 p-3 rounded-full">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Reliable</h3>
                                    <p className="text-gray-600">Count on us for consistent and dependable service.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

