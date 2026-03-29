import React from "react";
import Text from "@/atoms/text/Text";
import { styles } from "../styles";
import { BlankSpace } from "./BlankSpace";

interface SentencesListProps {
    sentences: (string | null)[][];
    value: { [key: string]: string };
    handleDrop: (blankId: string) => void;
    removeFromBlank: (blankId: string) => void;
}

export const SentencesList: React.FC<SentencesListProps> = ({
    sentences,
    value,
    handleDrop,
    removeFromBlank
}) => {
    return (
        <div className={styles.sentences.container}>
            {sentences.length > 0 ? sentences.map((parts, si) => (
                <div key={si} className={styles.sentences.row}>
                    <span className={styles.sentences.number}>
                        {si + 1}.
                    </span>
                    <span className={styles.sentences.textWrapper}>
                        {parts.map((part, pi) =>
                            part !== null ? (
                                <span key={pi}>{part}</span>
                            ) : (
                                <BlankSpace
                                    key={pi}
                                    value={value[`${si}-${pi}`]}
                                    onDrop={() => handleDrop(`${si}-${pi}`)}
                                    onRemove={() => removeFromBlank(`${si}-${pi}`)}
                                />
                            )
                        )}
                    </span>
                </div>
            )) : (
                <Text className={styles.sentences.emptyPrompt}>
                    Configure el prompt de la pregunta con "_" para agregar los espacios.
                </Text>
            )}
        </div>
    );
};
