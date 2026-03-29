import React from "react";
import { useMatchWithArrows } from "./hooks/useMatchWithArrows";
import { styles } from "./styles";
import { ConnectionLines } from "./components/ConnectionLines";
import { LeftColumn } from "./components/LeftColumn";
import { RightColumn } from "./components/RightColumn";

export interface MatchWithArrowsProps {
    id: string;
    options?: string[]; // Should be parsed as pairs 'Left|Right' or JSON.
    value?: { [leftIdx: number]: number }; // Format { leftIdx: rightIdx }
    onChange?: (value: { [leftIdx: number]: number }) => void;
}

const MatchWithArrows: React.FC<MatchWithArrowsProps> = ({ id, options = [], value = {}, onChange }) => {
    const {
        parsedOptions,
        shuffledRight,
        activeLeft,
        lines,
        containerRef,
        leftRefs,
        rightRefs,
        handleLeft,
        handleRight,
    } = useMatchWithArrows({ options, value, onChange });

    return (
        <div className={styles.container}>
            <div ref={containerRef} className={styles.relativeWrapper}>
                <ConnectionLines lines={lines} />

                <div className={styles.grid}>
                    <LeftColumn
                        parsedOptions={parsedOptions}
                        leftRefs={leftRefs}
                        activeLeft={activeLeft}
                        value={value}
                        handleLeft={handleLeft}
                    />

                    <RightColumn
                        shuffledRight={shuffledRight}
                        rightRefs={rightRefs}
                        activeLeft={activeLeft}
                        value={value}
                        handleRight={handleRight}
                    />
                </div>
            </div>
        </div>
    );
};

export default MatchWithArrows;
