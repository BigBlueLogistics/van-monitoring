import type { Meta, StoryObj } from '@storybook/react';

import MDImage from './index';
import logo from '../../assets/images/logo-bblc.png';

const meta = {
  title: 'atoms/MDImage',
  component: MDImage,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {
    src: logo,
    alt: 'logo',
  },
  argTypes: {
    width: {
      type: 'number',
    },
    height: {
      type: 'number',
    },
  },
} satisfies Meta<typeof MDImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Image: Story = {
  render: (args) => <MDImage {...args} />,
};
