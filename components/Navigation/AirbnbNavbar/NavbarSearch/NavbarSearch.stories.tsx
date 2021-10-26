import { Story } from '@storybook/react';
import NavbarSearch, { Props } from './NavbarSearch';

export default {
  title: 'Navbar/airbnb-nav/NavbarSearch',
  component: NavbarSearch,
};

const Template: Story<Props> = (args) => <NavbarSearch {...args} />;

export const Collapsed = Template.bind({});
Collapsed.args = { isExpanded: false };
export const Expanded = Template.bind({});
Expanded.args = { isExpanded: true };
