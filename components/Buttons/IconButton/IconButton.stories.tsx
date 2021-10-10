import { Story } from '@storybook/react';
import IconButton, { ButtonProps } from './IconButton';
import Boop from '../../Animations/Boop/Boop';
import React from 'react';
import { FiSettings } from 'react-icons/fi';

export default {
  title: 'Buttons/IconButton',
  component: IconButton,
};

const Template: Story<ButtonProps> = (args) => (
  <IconButton {...args}>
    <Boop boopConfig={{ rotation: 13, y: -1, scale: 1.3 }}>
      <FiSettings className={'settings__icon'} />
    </Boop>
  </IconButton>
);

export const Button = Template.bind({});
Button.args = { renderAs: 'button' };
