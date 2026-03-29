import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Line } from "../components/ConnectionLines";

export interface UseMatchWithArrowsProps {
    options?: string[];
    value?: { [leftIdx: number]: number };
    onChange?: (value: { [leftIdx: number]: number }) => void;
}

export const useMatchWithArrows = ({ options = [], value = {}, onChange }: UseMatchWithArrowsProps) => {
    const parsedOptions = useMemo(() => {
        return options.map((opt) => {
            try {
                const parsed = JSON.parse(opt);
                if (Array.isArray(parsed) && parsed.length >= 2) return [String(parsed[0]), String(parsed[1])];
                return [opt, opt];
            } catch {
                if (opt.includes("|")) {
                    const [left, right] = opt.split("|");
                    return [left.trim(), right.trim()];
                }
                return [opt, opt];
            }
        });
    }, [options]);

    // Shuffle right column once on mount
    const shuffledRight = useRef(
        parsedOptions.map((pair, i) => ({ label: pair[1], index: i })).sort(() => Math.random() - 0.5)
    ).current;

    const [activeLeft, setActiveLeft] = useState<number | null>(null);
    const [lines, setLines] = useState<Line[]>([]);

    const containerRef = useRef<HTMLDivElement>(null);
    const leftRefs = useRef<{ [key: number]: HTMLButtonElement | null }>({});
    const rightRefs = useRef<{ [key: number]: HTMLButtonElement | null }>({});

    const getLeftEdge = (el: HTMLElement, container: HTMLElement) => {
        const r = el.getBoundingClientRect();
        const c = container.getBoundingClientRect();
        return {
            x: r.right - c.left,  // borde derecho
            y: r.top - c.top + r.height / 2  // centro vertical
        };
    };

    const getRightEdge = (el: HTMLElement, container: HTMLElement) => {
        const r = el.getBoundingClientRect();
        const c = container.getBoundingClientRect();
        return {
            x: r.left - c.left,  // borde izquierdo
            y: r.top - c.top + r.height / 2  // centro vertical
        };
    };
    const buildLines = useCallback(() => {
        if (!containerRef.current) return;
        const newLines = Object.entries(value).map(([leftIdxStr, rightIdx]) => {
            const leftIdx = Number(leftIdxStr);
            const lEl = leftRefs.current[leftIdx];
            const rEl = rightRefs.current[rightIdx];
            if (!lEl || !rEl) return null;
            return {
                leftIdx: String(leftIdx),
                rightIdx: String(rightIdx),
                lPos: getLeftEdge(lEl, containerRef.current!),
                rPos: getRightEdge(rEl, containerRef.current!),
            };
        }).filter(Boolean) as Line[];
        setLines(newLines);
    }, [value]);

    useEffect(() => {
        buildLines();
        window.addEventListener("resize", buildLines);
        return () => window.removeEventListener("resize", buildLines);
    }, [buildLines]);

    const handleLeft = (idx: number) => {
        setActiveLeft(activeLeft === idx ? null : idx);
    };

    const handleRight = (idx: number) => {
        if (activeLeft === null) return;
        const next = { ...value };
        Object.keys(next).forEach(k => {
            if (next[Number(k)] === idx || Number(k) === activeLeft) delete next[Number(k)];
        });
        next[activeLeft] = idx;
        if (onChange) onChange(next);
        setActiveLeft(null);
    };

    return {
        parsedOptions,
        shuffledRight,
        activeLeft,
        lines,
        containerRef,
        leftRefs,
        rightRefs,
        handleLeft,
        handleRight,
    };
};
