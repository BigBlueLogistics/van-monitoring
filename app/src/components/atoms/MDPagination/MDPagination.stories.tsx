import type { Meta, StoryObj } from '@storybook/react';

import MDPagination from './index';

const meta = {
  title: 'atoms/MDPagination',
  component: MDPagination,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {
    children: <div>1</div>,
    item: true,
    active: true,
  },
  argTypes: {
    item: {
      type: 'boolean',
    },
    active: {
      type: 'boolean',
    },
    variant: {
      options: ['gradient', 'contained'],
    },
    color: {
      options: [
        'white',
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'error',
        'light',
        'dark',
      ],
    },
    size: {
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<typeof MDPagination>;

export default meta;
type Story = StoryObj<typeof MDPagination>;

export const Pagination: Story = {
  render: (args) => <MDPagination {...args} />,
};
