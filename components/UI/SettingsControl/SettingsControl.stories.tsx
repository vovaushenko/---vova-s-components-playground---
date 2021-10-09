import { Story } from '@storybook/react';
import SettingsControl from './SettingsControl';

export default {
  title: 'UI/SettingsControl',
  component: SettingsControl,
};

const Template: Story = (args) => <SettingsControl {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
