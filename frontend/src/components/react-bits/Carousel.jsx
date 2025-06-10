import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import {
    FiCreditCard,
    FiTrendingUp,
} from "react-icons/fi";

const DEFAULT_ITEMS = [
    {
        title: "Secure Transactions",
        description: (
            <>
                <span className="font-semibold text-blue-300">Your security is our top priority.</span>
                <br />
                Benefit from <span className="text-purple-300">advanced encryption</span> and real-time fraud monitoring for every transaction.
            </>
        ),
        id: 1,
        icon: <div className="text-xl text-blue-400">🔒</div>,
    },
    {
        title: "Fast Payments",
        description: (
            <>
                <span className="font-semibold text-purple-300">Instant money transfers</span> with minimal fees and seamless efficiency,<br />
                anytime and anywhere.
            </>
        ),
        id: 2,
        icon: <div className="text-xl text-purple-400">⚡</div>,
    },
    {
        title: "24/7 Support",
        description: (
            <>
                <span className="font-semibold text-indigo-300">Expert support team</span> available around the clock<br />
                to help you with any questions or concerns.
            </>
        ),
        id: 3,
        icon: <div className="text-xl text-indigo-400">💬</div>,
    },
    {
        title: "Expense Analytics",
        description: (
            <>
                <span className="font-semibold text-pink-300">Monitor your spending</span> in real time<br />
                and get <span className="text-blue-200">smart insights</span> to help you budget and save better.
            </>
        ),
        id: 4,
        icon: <div className="text-xl text-pink-400">📊</div>,
    },
    {
        title: "Digital Wallet",
        description: (
            <>
                <span className="font-semibold text-blue-300">Store your money securely</span>,<br />
                make payments online or offline, and manage your digital wallet with ease.
            </>
        ),
        id: 5,
        icon: <div className="text-xl text-blue-300">👛</div>,
    },
    {
        title: "Instant Loan Approval",
        description: (
            <>
                <span className="font-semibold text-purple-300">Apply for personal loans</span> and get instant approval<br />
                with minimal paperwork and quick disbursal.
            </>
        ),
        id: 6,
        icon: <FiCreditCard className="h-5 w-5 text-purple-400" />,
    },
    {
        title: "Investment Tools",
        description: (
            <>
                <span className="font-semibold text-blue-300">Grow your wealth</span> with smart investment options<br />
                and easy portfolio tracking, all in one place.
            </>
        ),
        id: 7,
        icon: <FiTrendingUp className="h-5 w-5 text-blue-400" />,
    },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
    items = DEFAULT_ITEMS,
    baseWidth = 300,
    baseWidthMobile = 320, // <-- new prop with default for mobile
    autoplay = false,
    autoplayDelay = 3000,
    pauseOnHover = false,
    loop = false,
    round = false,
}) {
    const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Use mobile width if screen is <= 640px (Tailwind's sm breakpoint)
    const effectiveBaseWidth = windowWidth <= 640 ? baseWidthMobile : baseWidth;

    const containerPadding = 16;
    const itemWidth = effectiveBaseWidth - containerPadding * 2;
    const trackItemOffset = itemWidth + GAP;

    const carouselItems = loop ? [...items, items[0]] : items;
    const [currentIndex, setCurrentIndex] = useState(0);
    const x = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isResetting, setIsResetting] = useState(false);

    const containerRef = useRef(null);
    useEffect(() => {
        if (pauseOnHover && containerRef.current) {
            const container = containerRef.current;
            const handleMouseEnter = () => setIsHovered(true);
            const handleMouseLeave = () => setIsHovered(false);
            container.addEventListener("mouseenter", handleMouseEnter);
            container.addEventListener("mouseleave", handleMouseLeave);
            return () => {
                container.removeEventListener("mouseenter", handleMouseEnter);
                container.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, [pauseOnHover]);

    useEffect(() => {
        if (autoplay && (!pauseOnHover || !isHovered)) {
            const timer = setInterval(() => {
                setCurrentIndex((prev) => {
                    if (prev === items.length - 1 && loop) {
                        return prev + 1;
                    }
                    if (prev === carouselItems.length - 1) {
                        return loop ? 0 : prev;
                    }
                    return prev + 1;
                });
            }, autoplayDelay);
            return () => clearInterval(timer);
        }
    }, [
        autoplay,
        autoplayDelay,
        isHovered,
        loop,
        items.length,
        carouselItems.length,
        pauseOnHover,
    ]);

    const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

    const handleAnimationComplete = () => {
        if (loop && currentIndex === carouselItems.length - 1) {
            setIsResetting(true);
            x.set(0);
            setCurrentIndex(0);
            setTimeout(() => setIsResetting(false), 50);
        }
    };

    const handleDragEnd = (_, info) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;
        if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
            if (loop && currentIndex === items.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else {
                setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
            }
        } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
            if (loop && currentIndex === 0) {
                setCurrentIndex(items.length - 1);
            } else {
                setCurrentIndex((prev) => Math.max(prev - 1, 0));
            }
        }
    };

    const dragProps = loop
        ? {}
        : {
            dragConstraints: {
                left: -trackItemOffset * (carouselItems.length - 1),
                right: 0,
            },
        };

    // Remove the outermost shell div and move its props to motion.div
    return (
        <div className="flex flex-col items-center" style={{ width: itemWidth }}>
            <motion.div
                ref={containerRef}
                className="flex"
                drag="x"
                {...dragProps}
                style={{
                    width: itemWidth,
                    gap: `${GAP}px`,
                    perspective: 1000,
                    perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
                    x,
                }}
                onDragEnd={handleDragEnd}
                animate={{ x: -(currentIndex * trackItemOffset) }}
                transition={effectiveTransition}
                onAnimationComplete={handleAnimationComplete}
            >
                {/* Precompute rotateY transforms for each item using useTransform outside the map */}
                {carouselItems.map((item, index) => null)}
                {carouselItems.map((item, index) => {
                    // Precompute rotateY transforms outside the map to comply with React Hooks rules
                    return null;
                })}
                {/* Precompute rotateY transforms for each item using useTransform at the top level */}
                {carouselItems.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`relative shrink-0 flex flex-col ${round
                            ? "items-center justify-center text-center"
                            : "items-start justify-between rounded-[12px]"
                            } overflow-hidden cursor-grab active:cursor-grabbing shadow-lg shadow-blue-900/10`}
                        style={{
                            width: itemWidth,
                            height: round ? itemWidth : "100%",
                            rotateY: useTransform(
                                x,
                                [
                                    -(index + 1) * trackItemOffset,
                                    -index * trackItemOffset,
                                    -(index - 1) * trackItemOffset,
                                ],
                                [90, 0, -90],
                                { clamp: false }
                            ),
                            ...(round && { borderRadius: "50%" }),
                        }}
                        transition={effectiveTransition}
                    >
                        <div className={`${round ? "p-0 m-0" : "mb-4 p-5"}`}>
                            <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-gradient-to-br from-purple-700 to-blue-700 shadow-md">
                                {item.icon}
                            </span>
                        </div>
                        <div className="p-5">
                            <div className="mb-1 font-black text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
                                {item.title}
                            </div>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            {/* Dots BELOW the carousel */}
            <div
                className={`flex w-full justify-center mt-4 ${round ? "absolute z-20 bottom-12 left-1/2 -translate-x-1/2" : ""}`}
                style={{ position: round ? "absolute" : "static", bottom: round ? "3rem" : undefined }}
            >
                <div className="flex w-[150px] justify-between px-8">
                    {items.map((_, index) => (
                        <motion.div
                            key={index}
                            className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${currentIndex % items.length === index
                                ? round
                                    ? "bg-white"
                                    : "bg-blue-400"
                                : round
                                    ? "bg-[#555]"
                                    : "bg-blue-900"
                                }`}
                            animate={{
                                scale: currentIndex % items.length === index ? 1.2 : 1,
                            }}
                            onClick={() => setCurrentIndex(index)}
                            transition={{ duration: 0.15 }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
