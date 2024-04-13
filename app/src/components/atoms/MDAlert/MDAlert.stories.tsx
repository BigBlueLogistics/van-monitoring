import type { Meta, StoryObj } from '@storybook/react';

import MDAlert from './index';

const meta = {
  title: 'atoms/MDAlert',
  component: MDAlert,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {
    autoHideDuration: 10000,
    children: <h3 style={{ color: '#000' }}>Test</h3>,
  },
} satisfies Meta<typeof MDAlert>;

export default meta;
type Story = StoryObj<typeof MDAlert>;

export const Alert: Story = {
  render: (args) => <MDAlert {...args} />,
};
