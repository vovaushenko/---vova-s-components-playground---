import { Story } from '@storybook/react';
import ExpandButton, { ButtonProps } from './ExpandButton';

export default {
  title: 'Navbar/airbnb-nav/ExpandButton',
  component: ExpandButton,
};

const Template: Story<ButtonProps> = (args) => <ExpandButton {...args} />;

export const ExpandButtonNav = Template.bind({});
ExpandButtonNav.args = { text: 'Expand more options' };
