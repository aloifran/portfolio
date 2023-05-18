import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { MdSunny, MdBedtime, MdMail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Burger from "./Burger";

export default function Navigation() {
    // setup for next-themes
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
        // the main header tag should get the glass effect
        <header className="mx-auto w-4/5 rounded-2xl bg-transparent px-10 py-4 shadow-md backdrop-blur-md backdrop-filter">
            <div className="items-center justify-between py-4">
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
                        <div className="items-center justify-center space-x-4 md:flex md:space-x-6">
                            {/* burger */}
                            <button
                                className="rounded-lg md:hidden"
                                onClick={handleNav}
                            >
                                <Burger
                                    isOpen={isOpen}
                                    onClick={() => setIsOpen(!isOpen)}
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
                                    <MdSunny size={20} />
                                </button>
                            ) : (
                                <button
                                    onClick={handleTheme}
                                    className="rounded-lg"
                                >
                                    <MdBedtime size={20} />
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
                                <Link href="/">Home</Link>
                                <Link href="/projects">Projects</Link>
                                <Link href="/about">About</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

//  <div>
//                     <div className="flex items-center justify-between py-4 md:block">
//                         <Link href="/">
//                             <h1 className="text-xl font-normal">
//                                 Francisco Aloi
//                             </h1>
//                         </Link>
//                         <div className="items-center justify-center space-x-4 md:flex md:space-x-8">
//                             {/* burger menu mobile */}
//                             <button
//                                 className="rounded-lg md:hidden"
//                                 onClick={handleNav}
//                             >
//                                 <Burger
//                                     isOpen={isOpen}
//                                     onClick={() => setIsOpen(!isOpen)}
//                                     color={
//                                         currentTheme === "dark"
//                                             ? "white"
//                                             : "black"
//                                     }
//                                 />
//                             </button>
//                             {/* theme selector */}
//                             {currentTheme === "dark" ? (
//                                 <button
//                                     onClick={handleTheme}
//                                     className="rounded-lg"
//                                 >
//                                     <MdSunny size={20} />
//                                 </button>
//                             ) : (
//                                 <button
//                                     onClick={handleTheme}
//                                     className="rounded-lg"
//                                 >
//                                     <MdBedtime size={20} />
//                                 </button>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 <div>
//                     {/* links and dropdown */}
//                     <div
//                         className={`mt-4 pb-4 text-center md:mt-0 md:block md:pb-0 ${
//                             navShow ? "block" : "hidden"
//                         }`}
//                     >
//                         <div className="items-center justify-center space-x-4 md:flex md:space-x-8">
//                             <Link href="/">Home</Link>
//                             <Link href="/projects">Projects</Link>
//                             <Link href="/about">About</Link>
//                         </div>
//                     </div>
//                 </div>
