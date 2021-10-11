import { Story } from '@storybook/react';
import SplitButton, { Props, SplitButtonOption } from './SplitButton';
import { FiPrinter, FiSave, FiSettings } from 'react-icons/fi';
import React from 'react';
import styled from 'styled-components';

export default {
  title: 'Buttons/SplitButton',
  component: SplitButton,
};
const Center = styled.div`
  margin-top: 10rem;
  width: 100vw;
  display: flex;
  align: center;
  justify-content: center;
`;

const options: SplitButtonOption[] = [
  {
    id: 1,
    text: 'Save draft',
    icon: <FiSave className={'option__icon'} />,
    action: () => alert('Save draft'),
  },
  {
    id: 2,
    text: 'Configure draft',
    icon: <FiSettings className={'option__icon'} />,
    action: () => alert('Configure draft'),
  },
  {
    id: 3,
    text: 'Print draft',
    icon: <FiPrinter className={'option__icon'} />,
    action: () => alert('Print draft'),
  },
];

const Template: Story<Props> = (args) => (
  <Center>
    <SplitButton {...args} />
  </Center>
);

export const Primary = Template.bind({});
Primary.args = { options, text: 'Send' };
