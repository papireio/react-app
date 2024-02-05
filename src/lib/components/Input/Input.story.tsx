import { Input } from './Input'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Input> = {
  component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '300px' }}>
      <Input {...args} />
    </div>
  ),
  argTypes: {
    type: {
      options: ['text', 'password', 'email', 'number'],
      control: {
        type: 'select',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    variant: {
      options: ['normal', 'warning', 'error'],
      control: {
        type: 'select',
      },
      defaultValue: 'normal',
    },
    placeholder: {
      type: 'string',
      defaultValue: '',
    },
    message: {
      type: 'string',
      defaultValue: '',
    },
    value: {
      type: 'string',
      defaultValue: '',
    },
  },
}
