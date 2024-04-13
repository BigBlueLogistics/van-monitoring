import type { Meta, StoryObj } from '@storybook/react';

import MDTypography from './index';

const meta = {
  title: 'atoms/MDTypography',
  component: MDTypography,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {
    children: 'Lorem ipsum',
  },
  argTypes: {
    children: {
      type: 'string',
    },
  },
} satisfies Meta<typeof MDTypography>;

export default meta;
type Story = StoryObj<typeof MDTypography>;

export const Typography: Story = {
  render: (args) => <MDTypography {...args} />,
};
