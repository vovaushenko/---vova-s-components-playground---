import { Story } from '@storybook/react';
import Logo, { Props } from './Logo';

export default {
  title: 'Navbar/airbnb-nav/Logo',
  component: Logo,
};

const Template: Story<Props> = (args) => <Logo {...args} />;

export const Expanded = Template.bind({});
Expanded.args = { isExpanded: true };
export const Collapsed = Template.bind({});
Collapsed.args = { isExpanded: false };
