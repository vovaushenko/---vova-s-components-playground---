import 'styled-components';
import {
  AppBorderRadiiType,
  AppBoxShadowsType,
  AppBreakpointsType,
  AppColorsType,
  AppFontWeightType,
  AppGradientsType,
  AppHeadingFSType,
  AppSpacingType,
  AppTextFSType,
  AppZindexType,
} from '../design-foundation/design-variables';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: AppColorsType;
    spacing: AppSpacingType;
    textFontSize: AppTextFSType;
    fontWeights: AppFontWeightType;
    headingFontSize: AppHeadingFSType;
    gradients: AppGradientsType;
    media: AppBreakpointsType;
    border: AppBorderRadiiType;
    zIndex: AppZindexType;
    boxShadows: AppBoxShadowsType;
  }
}
