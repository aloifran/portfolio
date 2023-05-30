import { motion, SVGMotionProps } from "framer-motion";

interface BurgerMenuProps extends SVGMotionProps<any> {
    isOpen?: boolean;
    color: string;
    size: number;
}

export default function BurgerMenu({
    isOpen = false,
    color = "black",
    size = 20,
    ...props
}: BurgerMenuProps) {
    const variant = isOpen ? "opened" : "closed";
    const top = {
        closed: {
            rotate: 0,
            translateY: 0,
        },
        opened: {
            rotate: 45,
            translateY: 2,
        },
    };
    const center = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        },
    };
    const bottom = {
        closed: {
            rotate: 0,
            translateY: 0,
        },
        opened: {
            rotate: -45,
            translateY: -2,
        },
    };
    const lineProps = {
        stroke: color,
        strokeWidth: 1.2,
        vectorEffect: "non-scaling-stroke",
        initial: "closed",
        animate: variant,
    };

    const unitHeight = 4;
    const unitWidth = (unitHeight * (size as number)) / (size as number);

    return (
        <div className="burger">
            <motion.svg
                // data-test="burger"
                viewBox={`0 0 ${unitWidth} ${unitHeight}`}
                overflow="visible"
                preserveAspectRatio="none"
                width={size}
                height={size}
                {...props}
            >
                <motion.line
                    x1="0"
                    x2={unitWidth}
                    y1="0"
                    y2="0"
                    variants={top}
                    {...lineProps}
                />
                <motion.line
                    x1="0"
                    x2={unitWidth}
                    y1="2"
                    y2="2"
                    variants={center}
                    {...lineProps}
                />
                <motion.line
                    x1="0"
                    x2={unitWidth}
                    y1="4"
                    y2="4"
                    variants={bottom}
                    {...lineProps}
                />
            </motion.svg>
        </div>
    );
}
