import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { GlobalStyles } from '../design-foundation/globalStyle';
import { useSystemDesign } from '../design-foundation/useSystemDesign';
import * as nextImage from 'next/image';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

const { darkTheme, lightTheme } = useSystemDesign();

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
});
const themes = [darkTheme, lightTheme];
addDecorator(withThemesProvider(themes));

addDecorator((story) => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyles />
    {story()}
  </ThemeProvider>
));
