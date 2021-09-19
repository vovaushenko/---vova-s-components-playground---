import type { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../design-foundation/globalStyle';
import '../design-foundation/index.css';
import { useSystemDesign } from '../design-foundation/useSystemDesign';

function MyApp({ Component, pageProps }: AppProps): unknown {
  const { darkTheme } = useSystemDesign();
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
