import { useTheme } from "next-themes";
import { MdSunny, MdBedtime } from "react-icons/md";

export default function ThemeSelector() {
    const { theme, setTheme } = useTheme();

    const handleTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    };

    return (
        <>
            {theme === "dark" ? (
                <button onClick={handleTheme} className="rounded-lg">
                    <MdSunny size={25} />
                </button>
            ) : (
                <button onClick={handleTheme} className="rounded-lg">
                    <MdBedtime size={25} />
                </button>
            )}
        </>
    );
}
