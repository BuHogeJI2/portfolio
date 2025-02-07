export interface NavItem {
  label: string;
  to: string;
}

export enum ENavbarActionButtonType {
  THEME_TOGGLE = 'THEME_TOGGLE',
  LANGUAGE_TOGGLE = 'LANGUAGE_TOGGLE',
}

export enum ETheme {
  LIGHT = 'light',
  DARK = 'dark',
}
