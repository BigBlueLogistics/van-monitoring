import type { Meta, StoryObj } from '@storybook/react';

import MDateRangePicker from './index';

const meta = {
  title: 'atoms/MDateRangePicker',
  component: MDateRangePicker,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {
    label: 'Date',
  },
  argTypes: {
    onChange: {
      control: 'date',
    },
  },
} satisfies Meta<typeof MDateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DateRangePicker: Story = {
  render: (args) => <MDateRangePicker {...args} />,
};
