import type { Meta, StoryObj } from '@storybook/react';

import MDButton from './index';

const meta = {
  title: 'atoms/MDButton',
  component: MDButton,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {
    children: <h3>lorem ipsum</h3>,
  },
} satisfies Meta<typeof MDButton>;

export default meta;
type Story = StoryObj<typeof MDButton>;

export const Button: Story = {
  render: (args) => <MDButton {...args} />,
};
