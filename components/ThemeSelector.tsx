import { useTheme } from "next-themes";
import { MdSunny, MdBedtime } from "react-icons/md";
import { motion } from "framer-motion";

export default function ThemeSelector() {
    const { theme, setTheme } = useTheme();

    const handleTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    };

    return (
        <>
            {theme === "dark" ? (
                <motion.button
                    onClick={handleTheme}
                    className="rounded-lg"
                    initial={{ rotate: 0 }}
                    animate={{
                        rotate: 100,
                        transition: { duration: 0.4 },
                    }}
                >
                    <MdSunny size={25} />
                </motion.button>
            ) : (
                <motion.button
                    onClick={handleTheme}
                    className="rounded-lg"
                    initial={{ rotate: 100 }}
                    animate={{ rotate: 0, transition: { duration: 0.4 } }}
                >
                    <MdBedtime size={25} />
                </motion.button>
            )}
        </>
    );
}
