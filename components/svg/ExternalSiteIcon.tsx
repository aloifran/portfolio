import type { SvgIconProps } from "@/types";
import { calcSvgIconSize } from "@/utils/utils";

export default function ExternalSiteIcon({ size }: SvgIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={calcSvgIconSize(size)}
            height={calcSvgIconSize(size)}
            viewBox="0 0 512 512"
        >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g
                    className={`fill-theme-black dark:fill-theme-white`}
                    transform="translate(85.333 64)"
                >
                    <path d="M128 64v42.666H42.667V320H256v-85.334h42.666v128H0V64h128zM362.667 0v170.667H320V72.835L143.085 249.752l-30.17-30.17L289.83 42.666H192V0h170.667z"></path>
                </g>
            </g>
        </svg>
    );
}
