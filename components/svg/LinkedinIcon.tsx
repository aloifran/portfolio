import type { SvgIconProps } from "@/types";
import { calcSvgIconSize } from "@/utils/utils";

export default function LinkedinIcon({ size }: SvgIconProps) {
    return (
        <svg
            className={`fill-theme-black dark:fill-theme-white`}
            xmlns="http://www.w3.org/2000/svg"
            width={calcSvgIconSize(size)}
            height={calcSvgIconSize(size)}
            viewBox="0 0 24 24"
        >
            <path d="M22.2 0H1.8C.8 0 0 .8 0 1.8v20.5c0 1 .8 1.8 1.8 1.8h20.5c1 0 1.8-.8 1.8-1.8V1.8C24 .8 23.2 0 22.2 0zm-15 20.4H3.5V9h3.6v11.4zm-1.9-13c-1.1 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1 2.1.9 2.1 2.1-.9 2.1-2.1 2.1zm15.2 13.1h-3.6v-6.3c0-1.8-.8-2.4-1.8-2.4-1.1 0-2.1.8-2.1 2.5v6.2H9.3V9h3.5v1.6c.3-.7 1.6-1.9 3.4-1.9 2 0 4.2 1.2 4.2 4.7v7.1z"></path>
        </svg>
    );
}
