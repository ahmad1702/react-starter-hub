import { useEffect, useMemo, useState } from "react";

export default function useIsInViewport(ref: React.RefObject<HTMLInputElement>) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
        () =>
            new IntersectionObserver(([entry]) =>
                setIsIntersecting(entry.isIntersecting),
            ),
        [],
    );

    useEffect(() => {
        if (!ref.current) return;
        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [ref, observer]);

    return isIntersecting;
}