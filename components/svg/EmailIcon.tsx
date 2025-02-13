import type { SvgIconProps } from "@/types";
import { calcSvgIconSize } from "@/utils/utils";

export default function EmailIcon({ size }: SvgIconProps) {
  return (
    <svg
      className={`fill-theme-black hover:fill-zinc-600 dark:fill-theme-white dark:hover:fill-zinc-400`}
      xmlns="http://www.w3.org/2000/svg"
      width={calcSvgIconSize(size)}
      height={calcSvgIconSize(size)}
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 32 32"
    >
      <path d="M31 10a5.004 5.004 0 00-1.464-3.536A5.004 5.004 0 0026 5H6a5.004 5.004 0 00-3.536 1.464A5.004 5.004 0 001 10v12c0 1.326.527 2.598 1.464 3.536A5.004 5.004 0 006 27h20a5.004 5.004 0 003.536-1.464A5.004 5.004 0 0031 22V10zM4.444 9.779l8.372 6.894a5 5 0 006.365-.007l8.413-6.959a1 1 0 00-1.275-1.541l-8.412 6.959a3.001 3.001 0 01-3.82.004L5.715 8.235a1 1 0 10-1.271 1.544z"></path>
    </svg>
  );
}
