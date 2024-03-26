import type { Meta, StoryObj } from '@storybook/react';

import MDBox from './index';

const meta = {
  title: 'atoms/MDBox',
  component: MDBox,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {
    children: <h3>lorem ipsum</h3>,
  },
} satisfies Meta<typeof MDBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Box: Story = {
  render: (args) => <MDBox {...args} color="blue" />,
};
