import { Spiral } from "@phosphor-icons/react";

export default function Spinner({ size = 24, ...props }) {
    return (
        // TailwindCSS classes to make spin animation
        <Spiral size={size} className={`animate-spin ${props.className}`} />
    );
}
