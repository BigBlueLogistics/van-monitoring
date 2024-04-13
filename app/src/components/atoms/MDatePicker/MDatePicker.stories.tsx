import type { Meta, StoryObj } from '@storybook/react';

import MDatePicker from './index';

const meta = {
  title: 'atoms/MDatePicker',
  component: MDatePicker,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {},
  argTypes: {
    onChange: {
      control: 'date',
    },
  },
} satisfies Meta<typeof MDatePicker>;

export default meta;
type Story = StoryObj<typeof MDatePicker>;

export const DatePicker: Story = {
  render: (args) => <MDatePicker {...args} />,
};
