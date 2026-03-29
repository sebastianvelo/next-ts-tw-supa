import { useState, useMemo } from "react";

export interface UseFillInTheBlanksProps {
    prompt?: string;
    options?: string[];
    value?: { [key: string]: string };
    onChange?: (value: { [key: string]: string }) => void;
}

export const useFillInTheBlanks = ({
    prompt = "",
    options = [],
    value = {},
    onChange
}: UseFillInTheBlanksProps) => {
    const sentences = useMemo(() => {
        const rawSentences = prompt.split(/\||\n/).map(s => s.trim()).filter(Boolean);
        return rawSentences.map(s => {
            const parts = s.split(/(_+)/).map(p => p.startsWith("_") ? null : p);
            return parts;
        });
    }, [prompt]);

    const initialBank = [...options];

    const [available, setAvailable] = useState<string[]>(() => {
        const usedWords = Object.values(value);
        return initialBank.filter(word => !usedWords.includes(word));
    });

    const [dragging, setDragging] = useState<string | null>(null);

    const handleDrop = (blankId: string) => {
        if (!dragging) return;
        const prev = value[blankId];

        const next = { ...value, [blankId]: dragging };
        if (onChange) onChange(next);

        setAvailable(a => {
            const nextAvailable = a.filter(w => w !== dragging);
            if (prev) nextAvailable.push(prev);
            return nextAvailable;
        });
        setDragging(null);
    };

    const removeFromBlank = (blankId: string) => {
        const word = value[blankId];
        if (!word) return;

        const next = { ...value };
        delete next[blankId];
        if (onChange) onChange(next);

        setAvailable(a => [...a, word]);
    };

    return {
        sentences,
        available,
        dragging,
        setDragging,
        handleDrop,
        removeFromBlank
    };
};
