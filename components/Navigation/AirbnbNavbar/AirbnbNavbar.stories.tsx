import { Story } from '@storybook/react';
import AirbnbNavbar from './AirbnbNavbar';

export default {
  title: 'Navbar/airbnb-nav/AirbnbNavbar',
  component: AirbnbNavbar,
};

const Template: Story = (args) => <AirbnbNavbar {...args} />;

export const AirbnbNav = Template.bind({});
AirbnbNav.args = {};
