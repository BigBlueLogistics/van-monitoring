import type { Meta, StoryObj } from '@storybook/react';

import MDSnackbar from './index';

const meta = {
  title: 'atoms/MDSnackbar',
  component: MDSnackbar,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {
    open: true,
    autoHideDuration: 9999,
    icon: 'notifications',
    title: 'Material Dashboard',
    content: 'Hello, world! This is a notification message',
    dateTime: '11 mins ago',
  },
  argTypes: {},
} satisfies Meta<typeof MDSnackbar>;

export default meta;
type Story = StoryObj<typeof MDSnackbar>;

export const Snackbar: Story = {
  render: (args) => <MDSnackbar {...args} />,
};
