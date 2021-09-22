import { Story } from '@storybook/react';
import SliderControl, { Props } from './SliderControl';
import { FiSun, FiVolume2 } from 'react-icons/fi';
import React from 'react';

export default {
  title: 'Forms/Sliders/SimpleSlider',
  component: SliderControl,
};

const Template: Story<Props> = (args) => <SliderControl {...args} />;

export const VoiceControl = Template.bind({});
VoiceControl.args = {
  name: 'voice-control',
  icon: <FiVolume2 className="icon" />,
};

export const BrightnessControl = Template.bind({});
BrightnessControl.args = {
  name: 'voice-control',
  icon: <FiSun className="icon" />,
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  name: 'voice-control',
};
