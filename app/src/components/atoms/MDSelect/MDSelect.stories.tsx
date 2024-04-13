import type { Meta, StoryObj } from '@storybook/react';

import MDSelect from './index';

const meta = {
  title: 'atoms/MDSelect',
  component: MDSelect,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {
    value: 'roe',
    variant: 'standard',
    label: 'Firstname',
    options: [
      { label: 'Roelan', value: 'roe' },
      { label: 'Rose', value: 'rose' },
    ],
  },
  argTypes: {
    onChange: {
      control: { type: 'select' },
      options: ['roe', 'rose'],
    },
  },
} satisfies Meta<typeof MDSelect>;

export default meta;
type Story = StoryObj<typeof MDSelect>;

export const Select: Story = {
  render: (args) => <MDSelect {...args} />,
};
