import type { Meta, StoryObj } from '@storybook/react';

import MDBadge from './index';

const meta = {
  title: 'atoms/MDBadge',
  component: MDBadge,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof MDBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Badge: Story = {
  render: (args) => <MDBadge {...args} />,
};
