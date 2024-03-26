import type { Meta, StoryObj } from '@storybook/react';

import MDIcon from './index';

const meta = {
  title: 'atoms/MDIcon',
  component: MDIcon,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {},
  argTypes: {
    fontSize: {
      options: ['small', 'medium', 'large'],
    },
    children: {
      value: 'delete',
    },
  },
} satisfies Meta<typeof MDIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  render: (args) => <MDIcon {...args} />,
};
