import React from 'react';
import { useSpring } from 'react-spring';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export interface UseBoopConfig {
  rotation?: number;
  x?: number;
  y?: number;
  timing?: number;
  scale?: number;
  springConfig?: Record<string, number>;
}

type HookReturnType = [React.CSSProperties, () => void];

export function useBoop({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  springConfig = {
    tension: 300,
    friction: 10,
  },
}: UseBoopConfig): HookReturnType {
  const [isBooped, setIsBooped] = React.useState(false);
  const style = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
    config: springConfig,
  } as React.CSSProperties);

  const prefersReducedMotion = usePrefersReducedMotion();

  React.useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped]);

  const trigger: () => void = React.useCallback(() => {
    setIsBooped(true);
  }, []);

  const appliedStyle = prefersReducedMotion ? {} : style;

  return [appliedStyle, trigger];
}
