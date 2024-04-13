import type { Meta, StoryObj } from '@storybook/react';

import MDAlertGradient from './index';

const meta = {
  title: 'atoms/MDAlertGradient',
  component: MDAlertGradient,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {
    children: <h3 style={{ color: '#000' }}>Test</h3>,
  },
} satisfies Meta<typeof MDAlertGradient>;

export default meta;
type Story = StoryObj<typeof MDAlertGradient>;

export const AlertGradient: Story = {
  render: (args) => <MDAlertGradient {...args} />,
};
