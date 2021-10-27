import { Story } from '@storybook/react';
import BottomNavigation, { NavigationProps } from './BottomNavigation';

export default {
  title: 'Navigation/bottom-mobile-nav',
  component: BottomNavigation,
};

const Template: Story<NavigationProps> = (args) => (
  <BottomNavigation {...args} />
);

export const AirbnbNav = Template.bind({});
AirbnbNav.args = { buttonTextColor: 'red', buttonActiveColor: 'blue' };
