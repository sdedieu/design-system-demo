export type CdsSemanticVariations =
  | 'accent'
  | 'announcement'
  | 'danger'
  | 'destructive'
  | 'error'
  | 'information'
  | 'neutral'
  | 'primary'
  | 'recommendation'
  | 'safety'
  | 'secondary'
  | 'success'
  | 'warning';

// these icons must follow the map in cds-styles\core\utilities\_material-icons.scss
export const CdsSemanticIcons: { [key in CdsSemanticVariations]?: string } = {
  recommendation: 'assistant',
  warning: 'warning_amber',
  information: 'info',
  success: 'check_circle',
  error: 'error_outline',
  announcement: 'flag',
  safety: 'verified_user',
};

export const sizes = ['x-small', 'small', 'medium', 'large'] as const;
export type CdsSize = (typeof sizes)[number];

export const types = ['very-weak', 'weak', 'medium', 'strong', 'very-strong'] as const;
export type CdsType = (typeof types)[number];
