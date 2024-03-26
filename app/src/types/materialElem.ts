import { opt as optTheme } from '@/components/organisms/ThemeRegistry/theme';
import { opt as optThemeDark } from '@/components/organisms/ThemeRegistry/theme-dark';
import { TTheme } from './theme';

export type TMaterialElem = {
  theme?: TTheme;
  themeProps?: typeof optTheme & typeof optThemeDark;
  ownerState?: { [key: string]: any };
};
