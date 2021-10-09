import type { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../design-foundation/globalStyle';
import '../design-foundation/index.css';
import { useSystemDesign } from '../design-foundation/useSystemDesign';
import { wrapper } from '../store';
import { useTypedSelector } from '../hooks/useTypedSelector';

const WrappedApp: React.FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
  const { theme } = useTypedSelector((state) => state.ui);
  const { darkTheme, lightTheme } = useSystemDesign();

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default wrapper.withRedux(WrappedApp);
