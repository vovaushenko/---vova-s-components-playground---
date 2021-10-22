import { keyframes } from 'styled-components';

/**
 * @MOUNT animation
 * @keyframes slidInCenter
 * @returns {keyframes} - slide in animations for card appearance
 * @example animation: ${slidInCenter} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
 */
export const slidInCenter = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

/**
 * @MOUNT animation
 * @keyframes slideInBottom
 * @returns {keyframes} - slide out bottom dis-appearance animation
 * @example animation: ${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
 */
export const slideInBottom = keyframes`
  0% {
    transform: translateY(var(--translateY));
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;
/**
 * @UNMOUNT animation
 * @keyframes slidOutBottom
 * @returns {keyframes} - slide out bottom dis-appearance animation
 * @example animation: ${slidOutBottom} 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
 */
export const slidOutBottom = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(var(--translateY));
    opacity: 0;
  }
`;

/**
 * @keyframes slideTop
 * @returns {keyframes} - track animation for headers appearance
 * @example animation: ${slideTop} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
 */
export const slideTop = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

/**
 * @keyframes trackingInExpand
 * @returns {keyframes} - track animation for headers appearance
 * @example animation: ${trackingInExpand} 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
 */
export const trackingInExpand = keyframes`
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`;

/**
 * @keyframes floatKeyframes
 * @returns {keyframes} - keyframes for element's floating effect
 * @example  animation: ${float} 6s ease-in-out infinite;
 */
export const floatKeyframes = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
`;
/**
 * @keyframes scaleInCenter
 * @returns {keyframes} - keyframes for standard modal's appearance
 * @example  animation: ${scaleInCenter} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
 */
export const scaleInCenter = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
    filter: blur(10px);
  }
  100% {
    transform: scale(1);
    opacity: 1;
    filter: blur(0);
  }
`;
