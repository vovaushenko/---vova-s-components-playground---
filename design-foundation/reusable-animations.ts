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
