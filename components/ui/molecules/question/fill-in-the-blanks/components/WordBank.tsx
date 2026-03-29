import React from "react";
import Badge from "@/atoms/badge/Badge";
import { styles } from "../styles";

interface WordBankProps {
    options: string[];
    available: string[];
    setDragging: (word: string | null) => void;
}

export const WordBank: React.FC<WordBankProps> = ({ options, available, setDragging }) => {
    if (options.length === 0) return null;

    return (
        <div className={styles.wordBank.container}>
            <div className={styles.wordBank.wordsContainer}>
                {available.length > 0 ? (
                    available.map((word, idx) => (
                        <div
                            key={`${word}-${idx}`}
                            draggable
                            onDragStart={() => setDragging(word)}
                            onDragEnd={() => setDragging(null)}
                            className={styles.wordBank.draggableWrapper}
                        >
                            <Badge
                                label={word}
                                variant="default"
                                className={styles.wordBank.badge}
                            />
                        </div>
                    ))
                ) : (
                    <span className={styles.wordBank.emptyText}>All words placed!</span>
                )}
            </div>
        </div>
    );
};
