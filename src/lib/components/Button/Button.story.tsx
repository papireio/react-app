import { Button } from './Button'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '300px' }}>
      <Button {...args}>Continue</Button>
    </div>
  ),
  argTypes: {
    type: {
      options: ['button', 'submit'],
      defaultValue: 'button',
      control: {
        type: 'select',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
}
