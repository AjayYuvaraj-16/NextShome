import React, { useRef, useEffect, ReactNode } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

interface FancyboxProps {
    delegate?: string; // Selector for Fancybox binding
    options?: Record<string, unknown>; // Fancybox options, generalized as an object
    children: ReactNode; // Children to render inside the component
}

const Fancybox: React.FC<FancyboxProps> = ({ delegate = "[data-fancybox]", options = {}, children }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        const container = containerRef.current;

        if (container) {
            NativeFancybox.bind(container, delegate, options);

            return () => {
                NativeFancybox.unbind(container);
                NativeFancybox.close();
            };
        }
    }, [delegate, options]); // Re-run effect when delegate or options change

    return <div ref={containerRef}>{children}</div>;
};

export default Fancybox;