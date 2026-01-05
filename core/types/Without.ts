export type Without<T, K> = Omit<T, keyof K>;

export type WithoutAny<T, K extends readonly any[]> =
    K extends [infer H, ...infer R]
    ? WithoutAny<Without<T, H>, R>
    : T;