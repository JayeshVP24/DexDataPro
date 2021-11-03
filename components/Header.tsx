/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, m } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

const Header: React.FC = () => {
    const [drop, setDrop] = useState(false);

    const navs: { title: string; href: string }[] = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Services",
            href: "/services",
        },
        {
            title: "Why us",
            href: "/#why",
        },
        // {
        //     title: "Testimonails",
        //     href: "/#testimonials"
        // },
        {
            title: "About",
            href: "/#about",
        },
        {
            title: "Team",
            href: "/#team",
        },
        {
            title: "Contact",
            href: "#contact",
        },
    ];

    return (
        <header className="sticky z-20 top-0 bg-[#ECE8FF] py-2 ">
            <div className="flex items-center justify-around lg:justify-center my-4 space-x-16 ">
                <img
                    width="170"
                    height="70"
                    className="w-32 lg:w-44 relative -top-2"
                    src="/logo.png"
                    alt="Dex Data Processing Logo"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 lg:hidden cursor-pointer "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => setDrop((s) => !s)}
                >
                    <AnimatePresence>
                        {!drop && (
                            <m.path
                                initial={{
                                    scale: 0,
                                    opacity: 0,
                                }}
                                animate={{
                                    scale: 1,
                                    opacity: 1,
                                }}
                                exit={{
                                    scale: 0,
                                    opacity: 0,
                                }}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {drop && (
                            <m.path
                                initial={{
                                    scale: 0,
                                    opacity: 0,
                                }}
                                animate={{
                                    scale: 1,
                                    opacity: 1,
                                }}
                                exit={{
                                    scale: 0,
                                    opacity: 0,
                                }}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        )}
                    </AnimatePresence>
                </svg>
                <nav className="hidden lg:flex text-lg w-4/6 justify-evenly px-4 bg-primary py-6 text-white font-semibold rounded-2xl ">
                    {navs.map((n) => (
                        <Link key={n.title} passHref href={n.href}>
                            <m.a
                                whileHover={{
                                    top: -4,
                                }}
                                className="relative"
                            >
                                {n.title}
                            </m.a>
                        </Link>
                    ))}
                </nav>
            </div>
            <AnimatePresence>
                {drop && (
                    <m.nav
                        initial={{
                            height: 0,
                        }}
                        animate={{
                            height: "auto",
                        }}
                        exit={{
                            height: 0,
                        }}
                        className="flex overflow-hidden flex-col font-medium text-3xl underline text-center space-y-8 my-12"
                    >
                        {navs.map((n) => (
                            <Link key={n.title} passHref href={n.href}>
                                <a>{n.title}</a>
                            </Link>
                        ))}
                    </m.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
