// @ts-ignore
export const createGnuplotInstance = window.createGnuplot as () => Promise<
  (code: string, size: { x: number; y: number }) => string
>;
