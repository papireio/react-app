import type { Preview } from '@storybook/react'
import { GlobalCss } from '@lib/styles'
import { ThemeProvider } from '@lib/components'

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <ThemeProvider>
          <GlobalCss />
          <Story />
        </ThemeProvider>
      </>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
