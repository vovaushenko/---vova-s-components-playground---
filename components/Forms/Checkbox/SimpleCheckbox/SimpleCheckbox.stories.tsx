import { Story } from '@storybook/react';
import SimpleCheckbox, { Props } from './SimpleCheckbox';

export default {
  title: 'Forms/Checkbox/SimpleCheckbox',
  component: SimpleCheckbox,
};

const Template: Story<Props> = (args) => <SimpleCheckbox {...args} />;

export const Simple = Template.bind({});
Simple.args = { variant: 'simple' };
