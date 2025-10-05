type NiceTypeProps = {
    a: number;
    b: number;
};

/**
 * This is a jsdoc to be ignored when compiling the js
 * @param a
 * @param b
 * @returns
 */
export const niceFunction = ({ a, b }: NiceTypeProps): number => {
    const c = a + b;
    const d = c * 2;
    const e = d / 2;

    return e;
    // This is a comment to be ignored when compiling the js
};
