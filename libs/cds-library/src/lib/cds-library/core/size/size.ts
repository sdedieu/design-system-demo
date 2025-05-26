export const sizes = ['x-small', 'small', 'medium', 'large'] as const;
export type CdsSize = (typeof sizes)[number];
