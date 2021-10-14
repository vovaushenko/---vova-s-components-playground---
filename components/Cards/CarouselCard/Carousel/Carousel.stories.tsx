import { Story } from '@storybook/react';
import Carousel, { Props } from './Carousel';

export default {
  title: 'Carousels/airbnb-card-carousel',
  component: Carousel,
};

const Template: Story<Props> = (args) => <Carousel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  images: [
    { href: '/ultimate-cart/1.jpg' },
    { href: '/ultimate-cart/2.jpg' },
    { href: '/ultimate-cart/1.jpg' },
    { href: '/ultimate-cart/2.jpg' },
    { href: '/ultimate-cart/1.jpg' },
    { href: '/ultimate-cart/2.jpg' },
  ],
};
