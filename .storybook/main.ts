import type { StorybookConfig } from '@storybook/react-webpack5'
import * as path from 'path'

const config: StorybookConfig = {
  stories: ['../src/**/*.story.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    if (config && config.resolve) {
      config.resolve.alias = {
        ...config?.resolve.alias,
        '@app': path.resolve(__dirname, '../src/app'),
        '@lib': path.resolve(__dirname, '../src/lib'),
      }
    }

    return config
  },
}
export default config
