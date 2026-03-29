import React from "react";
import { styles } from "../styles";

interface BlankSpaceProps {
    value?: string;
    onDrop: () => void;
    onRemove: () => void;
}

export const BlankSpace: React.FC<BlankSpaceProps> = ({ value, onDrop, onRemove }) => {
    return (
        <span
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
            onClick={onRemove}
            title={value ? "Click to remove" : "Drop a word here"}
            className={`
                ${styles.blank.base}
                ${value ? styles.blank.filled : styles.blank.empty}
            `}
        >
            {value ? (
                <span className={styles.blank.filledContent}>
                    {value}
                    <span className={styles.blank.removeIcon}>×</span>
                </span>
            ) : (
                <span className={styles.blank.emptyContent}>_______</span>
            )}
        </span>
    );
};
