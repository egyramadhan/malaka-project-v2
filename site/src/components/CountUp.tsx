"use client";

import { useEffect, useState, useRef } from "react";

interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
    className?: string;
    decimals?: number;
}

const CountUp = ({ end, duration = 2000, suffix = "", className = "", decimals = 0 }: CountUpProps) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLSpanElement>(null);
    const hasAnimate = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimate.current) {
                    hasAnimate.current = true;
                    let startTime: number | null = null;
                    const start = 0;

                    const animate = (timestamp: number) => {
                        if (!startTime) startTime = timestamp;
                        const progress = timestamp - startTime;
                        const percentage = Math.min(progress / duration, 1);

                        // EaseOutQuart
                        const ease = 1 - Math.pow(1 - percentage, 4);

                        const current = start + (end - start) * ease;
                        setCount(current);

                        if (percentage < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(end);
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.1 }
        );


        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [end, duration]);

    return (
        <span ref={elementRef} className={className}>
            {count.toFixed(decimals)}{suffix}
        </span>
    );
};

export default CountUp;
