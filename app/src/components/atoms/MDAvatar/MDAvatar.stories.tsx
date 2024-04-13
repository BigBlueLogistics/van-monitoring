import type { Meta, StoryObj } from '@storybook/react';

import MDAvatar from './index';

const meta = {
  title: 'atoms/MDAvatar',
  component: MDAvatar,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {},
} satisfies Meta<typeof MDAvatar>;

export default meta;
type Story = StoryObj<typeof MDAvatar>;

export const Avatar: Story = {
  render: (args) => <MDAvatar {...args} />,
};
