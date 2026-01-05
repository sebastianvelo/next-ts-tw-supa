type KeysOf<T> = {
    [K in keyof T as Uppercase<string & K>]-?: K;
};

export default KeysOf;