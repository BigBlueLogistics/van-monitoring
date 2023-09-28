import type { Meta, StoryObj } from '@storybook/react';

import MDProgress from './index';

const meta = {
  title: 'atoms/MDProgress',
  component: MDProgress,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {
    label: true,
    value: 300,
  },
  argTypes: {},
} satisfies Meta<typeof MDProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Progress: Story = {
  render: (args) => <MDProgress {...args} />,
};
