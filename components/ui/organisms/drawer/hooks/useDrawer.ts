import { useCallback, useEffect, useState } from "react";

interface UseDrawerReturn {
    rendered: boolean;
    visible: boolean;
    open: () => void;
    close: () => void;
}

const useDrawer = (): UseDrawerReturn => {
    const [rendered, setRendered] = useState(false);
    const [visible, setVisible] = useState(false);

    const open = useCallback(() => {
        setRendered(true);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => setVisible(true));
        });
    }, []);

    const close = useCallback(() => {
        setVisible(false);
        setTimeout(() => setRendered(false), 300);
    }, []);

    useEffect(() => {
        document.body.style.overflow = visible ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [visible]);

    useEffect(() => {
        if (!visible) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
        };
        globalThis.addEventListener("keydown", handler);
        return () => globalThis.removeEventListener("keydown", handler);
    }, [visible, close]);

    return { rendered, visible, open, close };
}

export default useDrawer;