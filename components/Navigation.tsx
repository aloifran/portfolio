import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Burger from "./Burger";
import ThemeSelector from "./ThemeSelector";
import { AnimatePresence, motion } from "framer-motion";

export default function Navigation() {
    const { theme } = useTheme();
    const [navShow, setNavShow] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleNav = () => {
        setNavShow(!navShow);
    };

    const closeNav = () => {
        if (isOpen) {
            setIsOpen(false);
        }
        if (navShow) {
            setNavShow(false);
        }
    };

    const NavLinks = () => {
        return (
            <>
                <Link
                    className="link"
                    href="/#projects"
                    scroll={false}
                    onClick={closeNav}
                >
                    Projects
                </Link>
                <Link className="link" href="/about" onClick={closeNav}>
                    About
                </Link>
                <Link
                    className="link"
                    href="/#contact"
                    scroll={false}
                    onClick={closeNav}
                >
                    Contact
                </Link>
            </>
        );
    };

    return (
        <>
            <header className="fixed w-full bg-white/20 py-2 shadow-md backdrop-blur-md backdrop-filter dark:bg-black/20">
                <div className="mx-auto w-4/5 items-center justify-between py-4 md:w-3/5">
                    <div className="flex items-center justify-between">
                        {/* title */}
                        <div>
                            <Link href="/">
                                <h1 className="text-xl font-normal">
                                    Francisco Aloi
                                </h1>
                            </Link>
                        </div>
                        {/* buttons & links */}
                        <div className="items-center justify-between md:flex md:flex-row-reverse">
                            <div className="flex items-center justify-center space-x-4 md:ml-6 md:space-x-6">
                                <ThemeSelector />
                                <button
                                    className="rounded-lg md:hidden"
                                    onClick={handleNav}
                                >
                                    <Burger
                                        isOpen={isOpen}
                                        onClick={() => setIsOpen(!isOpen)}
                                        size={16}
                                        color={
                                            theme === "dark" ? "white" : "black"
                                        }
                                    />
                                </button>
                            </div>
                            {/* links */}
                            <div className="hidden items-center justify-center space-x-4 md:flex md:space-x-6">
                                <NavLinks />
                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile navbar */}
                <AnimatePresence>
                    {navShow && (
                        <motion.div
                            className="relative -my-4 flex flex-col items-center space-y-4 py-6 md:hidden"
                            layout="position"
                            key="nav-links"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <NavLinks />
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
}
