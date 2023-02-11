import { CSSObject } from 'styled-components';

export type TUnionStyles = {
  [key: string]: CSSObject | TUnionStyles;
};
