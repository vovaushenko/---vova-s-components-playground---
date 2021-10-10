import { DefaultTheme } from 'styled-components';
import {
  allGradients,
  borderRadii,
  boxShadows,
  colors,
  darkColors,
  fontWeights,
  headingFontSizes,
  responsiveBreakPoints,
  spacing,
  textFontSizes,
  zIndexes,
} from './design-variables';

/**
 * Custom hook used to get app's themes used by styled component's theme provider to locally style all app's components
 * All particular values and styles are stored and exported from file "system-design-variables.ts"
 * @function useSystemDesign
 * @returns {{darkTheme,lightTheme}} appThemes - the hook returns objects with specific css params, colors, spacings and all necessary info for styling the app using global Styled Components theme provider
 */

export const useSystemDesign = (): {
  lightTheme: DefaultTheme;
  darkTheme: DefaultTheme;
} => {
  const lightTheme: DefaultTheme = {
    theme: 'light',
    colors: colors,
    gradients: allGradients,
    textFontSize: textFontSizes,
    headingFontSize: headingFontSizes,
    fontWeights: fontWeights,
    media: responsiveBreakPoints,
    spacing: spacing,
    border: borderRadii,
    boxShadows: boxShadows,
    zIndex: zIndexes,
  };
  const darkTheme: DefaultTheme = {
    theme: 'dark',
    colors: darkColors,
    gradients: allGradients,
    textFontSize: textFontSizes,
    headingFontSize: headingFontSizes,
    fontWeights: fontWeights,
    media: responsiveBreakPoints,
    spacing: spacing,
    border: borderRadii,
    boxShadows: boxShadows,
    zIndex: zIndexes,
  };

  return { lightTheme, darkTheme };
};
