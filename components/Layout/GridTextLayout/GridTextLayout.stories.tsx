import { Story } from '@storybook/react';
import GridTextLayout from './GridTextLayout';

export default {
  title: 'Layout/GridTextLayout',
  component: GridTextLayout,
};

const Template: Story = (args) => <GridTextLayout {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
