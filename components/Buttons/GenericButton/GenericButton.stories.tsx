import { Story } from '@storybook/react';
import GenericButton, { Props } from './GenericButton';

export default {
  title: 'Buttons/GenericButton',
  component: GenericButton,
};

const Template: Story<Props> = (args) => <GenericButton {...args} />;

export const Normal = Template.bind({});
Normal.args = { text: 'CLICK ME' };

export const Loading = Template.bind({});
Loading.args = { text: 'LOADING', isLoading: true };

export const Completed = Template.bind({});
Completed.args = { text: 'LOADING', isCompleted: true };

export const Disabled = Template.bind({});
Disabled.args = { text: 'LOADING', disabled: true };
