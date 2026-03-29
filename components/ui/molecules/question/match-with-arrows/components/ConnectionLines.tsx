import React from "react";
import { styles } from "../styles";

export type Pos = { x: number; y: number };

export type Line = {
    leftIdx: string;
    rightIdx: string;
    lPos: Pos;
    rPos: { x: number; y: number };
}

interface ConnectionLinesProps {
    lines: Line[];
}

export const ConnectionLines: React.FC<ConnectionLinesProps> = ({ lines }) => (
    <svg className={styles.svg.base}>
        {lines.map(({ leftIdx, rightIdx, lPos, rPos }) => {
            const mx = (lPos.x + rPos.x) / 2;
            return (
                <path
                    className={styles.svg.path}
                    key={leftIdx}
                    d={`M ${lPos.x} ${lPos.y} C ${mx} ${lPos.y}, ${mx} ${rPos.y}, ${rPos.x} ${rPos.y}`}
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.85"
                />
            );
        })}
    </svg>
);
