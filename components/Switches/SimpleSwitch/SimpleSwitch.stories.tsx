import { Story } from '@storybook/react';
import SimpleSwitch, { Props } from './SimpleSwitch';

export default {
  title: 'Switches/SimpleSwitch',
  component: SimpleSwitch,
};

const Template: Story<Props> = (args) => <SimpleSwitch {...args} />;

export const Primary = Template.bind({});
Primary.args = { borderRadius: 20, width: 76 };
