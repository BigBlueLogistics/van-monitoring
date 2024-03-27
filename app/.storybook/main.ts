import path from 'path';
import type { StorybookConfig } from '@storybook/nextjs';
import { Configuration } from 'webpack';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-styling',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  webpackFinal: async (config: Configuration) => {
    // Add path aliases
    if (config.resolve?.alias) {
      config.resolve.alias['@'] = path.resolve(__dirname, '../src');
      config.resolve.alias['@/atoms'] = path.resolve(__dirname, '../src/components/atoms');
      config.resolve.alias['@/organisms'] = path.resolve(__dirname, '../src/components/organisms');
    }

    return config;
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
