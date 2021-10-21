/*=============================================
    CSS Values and variables used in App
=============================================*/

/**
 * TABLE OF CONTENTS
 *
 * COLORS
 * Primary colors...................These are the main primary colors. They will be used for backgrounds and text colors
 * Gray colors.................These are gray palette used in the app
 * Utility Colors.................Other colors used in particular components of the app
 *
 * GRADIENTS
 * ..................These are main gradients used in the app
 *
 * TYPOGRAPHY
 * Font weights...................Font weights
 * Sizes..........................Font sizing for body text, paragraphs, inputs
 * Heading sizes..................Font sizing for page headings

 * BREAKPOINTS
 * Media....................Global responsive media breakpoint definitions.
 *
 * SPACING
 * Spacing........................Global fixed set of spacing variables
 *
 * OTHER STYLES
 *
 * Border radius.......................Global fixed set of border radii
 * Box Shadows..........................Global fixed set of box shadows
 * Z-Indexes..........................Global fixed Z-Indexes used in app
 *
 * PORTFOLIO STYLES
 * Portfolio Styles.......................Global design-system used in portfolio slides
 *
 */

/*=============================================
=                  Colors                     =
=============================================*/

export const colors = {
  primary: {
    text: 'rgb(34, 34, 34)',
    background: '#f7f7f7',
    secondaryBg: 'rgb(99, 188, 233)',
    accent: 'rgb(93, 63, 211)',
    accentDark: '#01bf71',
    purple: '#4831d4',
  },
  green: { success: '#4BB543' },
  yellow: { golden: '#ffc130', darkGolden: '#ffa500' },
  white: { standard: 'rgba(255, 255, 255, 1)' },
  gray: {
    text: 'rgb(34, 34, 34)',
    dark: 'rgba(48,49,51,.774)',
    light: '#383838',
    lightest: 'rgb(133, 133, 133)',
    invisible: 'rgba(143, 143, 143, 0.1)',
    bg: '#242424',
    card: '#1b1b1b',
  },
  red: { danger: 'rgba(255,0,0,.562)', lightDanger: 'rgb(232, 53, 53)' },
  blue: {
    dark: 'rgb(3, 132, 192)',
    light: '#4489aa',
    lightest: '#4489aa',
    neon: 'rgb(131, 238, 255)',
  },
  modals: {
    primaryBg: 'rgba(47, 70, 95, 0.6)',
    primaryColor: 'rgba(0, 0, 0, 1)',
  },
  cards: {
    mainBg: 'rgba(28, 33, 39, 0.8)',
    primaryColor: 'rgba(0, 0, 0, 1)',
  },

  buttons: {
    primaryBg: 'rgba(46,61,83,.692)',
    primaryHover: 'rgba(46,61,83,.692)',
    primaryColor: 'rgba(46,61,83,.692)',
  },
};

export const darkColors = {
  primary: {
    text: 'rgba(255, 255, 255, 0.95)',
    background: '#010606',
    secondaryBg: 'rgb(14, 20, 27)',
    accent: '#2bff88',
    accentDark: '#01bf71',
    purple: '#4831d4',
  },
  green: { success: '#4BB543' },
  yellow: { golden: '#ffc130', darkGolden: '#ffa500' },
  white: { standard: 'rgba(255, 255, 255, 1)' },
  gray: {
    text: 'rgb(34, 34, 34)',
    dark: 'rgba(48,49,51,.774)',
    light: '#383838',
    lightest: 'rgb(133, 133, 133)',
    invisible: 'rgba(143, 143, 143, 0.1)',
    bg: '#242424',
    card: '#1b1b1b',
  },
  red: { danger: 'rgba(255,0,0,.562)', lightDanger: 'rgb(232, 53, 53)' },
  blue: {
    dark: 'rgb(3, 132, 192)',
    light: '#4489aa',
    lightest: '#4489aa',
    neon: 'rgb(131, 238, 255)',
  },
  modals: {
    primaryBg: 'rgba(47, 70, 95, 0.6)',
    primaryColor: 'rgba(0, 0, 0, 1)',
  },
  cards: {
    mainBg: 'rgba(28, 33, 39, 0.8)',
    primaryColor: 'rgba(0, 0, 0, 1)',
  },

  buttons: {
    primaryBg: 'rgba(46,61,83,.692)',
    primaryHover: 'rgba(46,61,83,.692)',
    primaryColor: 'rgba(46,61,83,.692)',
  },
};

export type AppColorsType = typeof colors;

/*=====  End of Colors  ======*/

/*=============================================
=                  Gradients                  =
=============================================*/
export const allGradients = {
  portfolioGreen: `linear-gradient(
      45deg,
      #01bf71 0%,
      #2bd2ff 52%,
      #2bff88 90%
    );`,
  rainbow: `linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );`,

  lightGrayGradient: `radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(90, 92, 106, 1) 0%,
    rgba(32, 45, 58, 1) 81.3%
  )`,
};
export type AppGradientsType = typeof allGradients;

/*=============================================
=                Typography                   =
=============================================*/

/* Font sizes */

export const textFontSizes = {
  xs: '0.75rem', // 12px
  sm: '0.875rem', // 14px
  base: '1rem', // 16px
  lg: '1.125rem', // 18px
  xl: '1.5rem', // 24px
  xxl: '2rem', // 32px
};
export type AppTextFSType = typeof textFontSizes;

/* Heading font sizes */
export const headingFontSizes = {
  h1: '1.375rem', // 22px
  h2: '1.375rem', // 22px
  h3: '1.2rem', // 16px
  h4: '1.125rem', // 18px
  h5: '0.75rem', // 12px
  h6: '0.75rem', // 12px
};
export type AppHeadingFSType = typeof headingFontSizes;

/* Font weights */

export const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};
export type AppFontWeightType = typeof fontWeights;
/*=====  End of Typography  ======*/

/*=============================================
=            Breakpoints                      =
=============================================*/

export const responsiveBreakPoints = {
  phone: '(max-width: 500px)',
  tablet: '(max-width: 768px)',
  desktop: '(min-width: 800px)',
};

export type AppBreakpointsType = typeof responsiveBreakPoints;

/*=====  End of Breakpoints  ======*/

/*=============================================
=            Spacing                          =
=============================================*/

export const spacing = {
  none: '0rem',
  xxxs: '0.25rem',
  xxs: '0.5rem',
  xs: '0.75rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  xxl: '5rem',
};
export type AppSpacingType = typeof spacing;
/*=====  End of Spacing  ======*/

/*=============================================
=            Other Styles                     =
=============================================*/

/* Border radius */
export const borderRadii = {
  base: '4px',
  primary: '0.75rem',
  s: '4px',
  m: '5px',
  l: '6px',
};
export type AppBorderRadiiType = typeof borderRadii;

/* Box Shadows */

const ELEVATIONS: { small: string; medium: string; large: string } = {
  small: `
    0.5px 1px 1px rgba(var(--shadow-color) / 0.7)
  `,
  medium: `
    1px 2px 2px rgba(var(--shadow-color) / 0.333),
    2px 4px 4px rgba(var(--shadow-color) / 0.333),
    3px 6px 6px rgba(var(--shadow-color) / 0.333)
  `,
  large: `
    1px 2px 2px rgba(var(--shadow-color) / 0.2),
    2px 4px 4px rgba(var(--shadow-color) / 0.2),
    4px 8px 8px rgba(var(--shadow-color) / 0.2),
    8px 16px 16px rgba(var(--shadow-color) / 0.2),
    16px 32px 32px rgba(var(--shadow-color) / 0.2)
  `,
};

export const boxShadows = {
  base: '0 1px 1px rgb(0 0 0 / 25%)',
  medium: `
    0 1px 1px rgb(0 0 0 / 0.155),
    0 2px 2px rgb(0 0 0 / 0.155),
    0 3px 3px rgb(0 0 0 / 0.155)
  `,
  buttonText: 'rgb(0 0 0 / 15%) 1px 1px 1px',

  window:
    '0 2.8px 2.2px rgba(0, 0, 0, 0.02),\n    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),\n    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),\n    0 100px 80px rgba(0, 0, 0, 0.07)',

  byElevation: {
    small: ELEVATIONS.small,
    medium: ELEVATIONS.medium,
    large: ELEVATIONS.large,
  },
};
export type AppBoxShadowsType = typeof boxShadows;
/* Z-indexes */
export const zIndexes = {
  highestPriority: 777,
  navigation: 78,
  modal: 77,
  lowPriority: 7,
};
export type AppZindexType = typeof zIndexes;
/*=====  End of Other Styles  ======*/
