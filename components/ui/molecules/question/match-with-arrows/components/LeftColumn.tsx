import React from "react";
import { styles } from "../styles";

interface LeftColumnProps {
    parsedOptions: string[][];
    leftRefs: React.MutableRefObject<{ [key: number]: HTMLButtonElement | null }>;
    activeLeft: number | null;
    value: { [leftIdx: number]: number };
    handleLeft: (idx: number) => void;
}

export const LeftColumn: React.FC<LeftColumnProps> = ({ parsedOptions, leftRefs, activeLeft, value, handleLeft }) => (
    <div className={styles.column.left}>
        {parsedOptions.map((pair, i) => (
            <button
                key={i}
                type="button"
                ref={el => { leftRefs.current[i] = el; }}
                onClick={() => handleLeft(i)}
                className={`
                        ${styles.option.base}
                        ${styles.option.leftAlign}
                        ${activeLeft === i
                        ? styles.option.leftActive
                        : value[i] !== undefined
                            ? styles.option.connected
                            : styles.option.default}
                        ${activeLeft !== i && value[i] === undefined ? styles.option.leftHover : ""}
                    `}
            >
                {pair[0]}
            </button>
        ))}
    </div>
);