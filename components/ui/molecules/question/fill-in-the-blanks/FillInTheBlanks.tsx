import React from "react";
import { useFillInTheBlanks } from "./hooks/useFillInTheBlanks";
import { styles } from "./styles";
import { WordBank } from "./components/WordBank";
import { SentencesList } from "./components/SentencesList";

export interface FillInTheBlanksProps {
    id: string;
    options?: string[]; // Wordbank
    value?: { [key: string]: string }; // Format { blankId: word }
    onChange?: (value: { [key: string]: string }) => void;
    // Assume prompt contains the text. We split the text by "_" or rely on options/sentences config.
    // Example prompt: "The sky is _ today. | _ is the capital of France."
    prompt?: string;
}

const FillInTheBlanks: React.FC<FillInTheBlanksProps> = ({ id, prompt = "", options = [], value = {}, onChange }) => {
    const {
        sentences,
        available,
        setDragging,
        handleDrop,
        removeFromBlank
    } = useFillInTheBlanks({ prompt, options, value, onChange });

    return (
        <div className={styles.container}>
            <WordBank
                options={options}
                available={available}
                setDragging={setDragging}
            />

            <SentencesList
                sentences={sentences}
                value={value}
                handleDrop={handleDrop}
                removeFromBlank={removeFromBlank}
            />
        </div>
    );
};

export default FillInTheBlanks;
