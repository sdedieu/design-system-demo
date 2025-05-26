export const types = ['very-weak', 'weak', 'medium', 'strong', 'very-strong'] as const;
export type CdsType = (typeof types)[number];
