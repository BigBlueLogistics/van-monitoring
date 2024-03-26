import type { Meta, StoryObj } from '@storybook/react';

import MDCheckbox from './index';

const meta = {
  title: 'atoms/MDCheckbox',
  component: MDCheckbox,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {},
} satisfies Meta<typeof MDCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {
  render: (args) => <MDCheckbox {...args} />,
};
