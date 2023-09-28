import type { Meta, StoryObj } from '@storybook/react';

import MDInput from './index';

const meta = {
  title: 'atoms/MDInput',
  component: MDInput,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {},
  argTypes: {},
} satisfies Meta<typeof MDInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  render: (args) => <MDInput {...args} />,
};
