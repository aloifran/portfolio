import type { SvgIconProps } from "@/types";

export function calcSvgIconSize(size: SvgIconProps["size"]): number {
    switch (size) {
        case "sm":
            return 20;
        case "md":
            return 30;
        case "lg":
            return 40;
    }
}
