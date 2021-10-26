import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { GlobalStyles } from '../design-foundation/globalStyle';
import { useSystemDesign } from '../design-foundation/useSystemDesign';
import * as nextImage from 'next/image';
import { Provider } from 'react-redux';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { storeFactory } from '../utils/test-utils';
import { mockStore } from '../__mocks__/mock-store';

const { darkTheme, lightTheme } = useSystemDesign();

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
});
const themes = [darkTheme, lightTheme];
addDecorator(withThemesProvider(themes));

const store = storeFactory(mockStore);

addDecorator((story) => (
  <ThemeProvider theme={darkTheme}>
    <Provider store={store}>
      <GlobalStyles />
      {story()}
    </Provider>
  </ThemeProvider>
));
