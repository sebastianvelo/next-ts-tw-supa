export const syntheticOnChange = (name: string, newValue: string | number, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void) => {
    const syntheticEvent = {
        target: { name, value: newValue.toString() },
        currentTarget: { name, value: newValue.toString() }
    } as React.ChangeEvent<HTMLSelectElement>;
    onChange(syntheticEvent);
};
