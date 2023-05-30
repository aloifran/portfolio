import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { MdSunny, MdBedtime } from "react-icons/md";
import Burger from "./Burger";

export default function Navigation() {
    // setup for next-theme
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    const [navShow, setNavShow] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleNav = () => {
        setNavShow(!navShow);
    };
    const handleTheme = () => {
        currentTheme === "dark" ? setTheme("light") : setTheme("dark");
    };

    return (
        <header className="fixed w-full bg-transparent py-2 shadow-md backdrop-blur-md backdrop-filter">
            <div className="mx-auto w-3/5 items-center justify-between py-4">
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
                        <div className="flex items-center justify-center space-x-4 md:space-x-6">
                            {/* burger */}
                            <button
                                className="rounded-lg md:hidden"
                                onClick={handleNav}
                            >
                                <Burger
                                    isOpen={isOpen}
                                    onClick={() => setIsOpen(!isOpen)}
                                    size={16}
                                    color={
                                        currentTheme === "dark"
                                            ? "white"
                                            : "black"
                                    }
                                />
                            </button>
                            {/* theme */}
                            {currentTheme === "dark" ? (
                                <button
                                    onClick={handleTheme}
                                    className="rounded-lg"
                                >
                                    <MdSunny size={25} />
                                </button>
                            ) : (
                                <button
                                    onClick={handleTheme}
                                    className="rounded-lg"
                                >
                                    <MdBedtime size={25} />
                                </button>
                            )}
                        </div>

                        {/* links */}
                        <div
                            className={`mt-4 pb-4 text-center md:mt-0 md:block md:pb-0 ${
                                navShow ? "block" : "hidden"
                            }`}
                        >
                            <div className="items-center justify-center space-x-4 md:flex md:space-x-6">
                                <Link
                                    className="link"
                                    href="/#projects"
                                    scroll={false}
                                >
                                    Projects
                                </Link>
                                <Link className="link" href="/about">
                                    About
                                </Link>
                                <Link
                                    className="link"
                                    href="/#contact"
                                    scroll={false}
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
