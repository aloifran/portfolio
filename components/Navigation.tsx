import { useState } from "react";
import Link from "next/link";
import ThemeSelector from "./ThemeSelector";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navigation() {
  const [navShow, setNavShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setNavShow(!navShow);
    setIsOpen(!isOpen);
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
        <Link className="link" href="/about" onClick={closeNav}>
          About me
        </Link>
        <Link className="link" href="/" scroll={false} onClick={closeNav}>
          Contact
        </Link>
      </>
    );
  };

  return (
    <>
      <header className="fixed z-10 w-full bg-white/20 py-2 shadow-md backdrop-blur-md backdrop-filter dark:bg-black/20">
        <div className="mx-auto items-center justify-between py-2 md:w-3/5 md:py-4">
          <div className="flex items-center justify-between">
            {/* title */}
            <div>
              <Link href="/">
                <h1 className="text-base">Francisco Aloi</h1>
              </Link>
            </div>
            {/* buttons & links */}
            <div className="items-center justify-between md:flex md:flex-row-reverse">
              <div className="flex items-center justify-center space-x-4 md:ml-6 md:space-x-6">
                <ThemeSelector />
                <div className="md:hidden">
                  <Hamburger toggle={handleNav} toggled={isOpen} size={20} />
                </div>
              </div>
              {/* links */}
              <div className="hidden items-center justify-center space-x-4 text-base md:flex md:space-x-6">
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
