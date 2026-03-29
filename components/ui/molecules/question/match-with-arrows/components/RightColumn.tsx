import React from "react";
import { styles } from "../styles";

interface RightColumnProps {
    shuffledRight: { label: string; index: number }[];
    rightRefs: React.MutableRefObject<{ [key: number]: HTMLButtonElement | null }>;
    activeLeft: number | null;
    value: { [leftIdx: number]: number };
    handleRight: (idx: number) => void;
}

export const RightColumn: React.FC<RightColumnProps> = ({ shuffledRight, rightRefs, activeLeft, value, handleRight }) => (
    <div className={styles.column.right}>
        {shuffledRight.map(({ label, index }) => {
            const isConnected = Object.values(value).includes(index);
            const isHoverable = activeLeft !== null;

            return (
                <button
                    key={index}
                    type="button"
                    ref={el => { rightRefs.current[index] = el; }}
                    onClick={() => handleRight(index)}
                    className={`
                            ${styles.option.base}
                            ${styles.option.rightAlign}
                            ${isConnected
                            ? styles.option.connected
                            : styles.option.default}
                            ${isHoverable && !isConnected ? styles.option.rightHoverActive : isHoverable ? styles.option.pointer : styles.option.defaultCursor}
                        `}
                >
                    {label}
                </button>
            );
        })}
    </div>
);