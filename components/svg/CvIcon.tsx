import { SvgIconProps } from "@/types";
import { calcSvgIconSize } from "@/utils/utils";

export default function CvIcon({ size }: SvgIconProps) {
  return (
    <svg
      className="fill-theme-black stroke-white hover:fill-zinc-600 dark:fill-theme-white dark:stroke-black dark:hover:fill-zinc-400"
      xmlns="http://www.w3.org/2000/svg"
      width={calcSvgIconSize(size)}
      height={calcSvgIconSize(size)}
      viewBox="0 0 80 80"
      stroke-width="5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M65.4529 14.7364L24.749 7.5446C23.3893 7.30437 22.0924 8.21183 21.8521 9.57149L12.5224 62.3755C12.2821 63.7351 13.1896 65.0321 14.5492 65.2723L55.2532 72.4642C56.6128 72.7044 57.9098 71.7969 58.15 70.4373L67.4798 17.6333C67.72 16.2736 66.8125 14.9767 65.4529 14.7364Z" />
      <path d="M30.3809 18.6907L56.3121 23.2719" />
      <path d="M54.5809 33.1187L28.6465 28.5405" />
      <path d="M39.8816 40.6781L26.916 38.3875" />
    </svg>
  );
}
