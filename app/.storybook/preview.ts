import React from 'react';
import type { Preview } from '@storybook/react';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';

import theme from '../src/organisms/ThemeRegistry/theme';
import themeDark from '../src/organisms/ThemeRegistry/theme-dark';
import { MaterialUIControllerProvider } from '../src/context';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story) => {
      return React.createElement(MaterialUIControllerProvider, {
        children: React.createElement(Story),
      });
    },
    withThemeFromJSXProvider({
      GlobalStyles: CssBaseline,
      Provider: ThemeProvider,
      themes: {
        light: theme,
        dark: themeDark,
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
