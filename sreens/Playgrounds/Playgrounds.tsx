import React from 'react';
import styled from 'styled-components';
import UltimateButton from '../../showcase/UltimateButton/UltimateButton';
import * as Styled from './Playgrounds.styles';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import WaveDivider from '../../components/Image/WaveDivider/WaveDivider';
import { floatKeyframes } from '../../design-foundation/reusable-animations';
import Paragraph from '../../components/Typography/Paragraph/Paragraph';

/**
 *Renders playground screen where components will be tested
 *@function Playgrounds
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered Playgrounds component
 */

const Playgrounds = (): JSX.Element => {
  const { theme } = useTypedSelector((state) => state.ui);
  const DIVIDER_HEIGHT = '150px';

  const TOP_WAVE_DIVIDER =
    theme === 'dark'
      ? '/divider/dark-divider-bottom.svg'
      : '/divider/light-divider-bottom.svg';

  return (
    <Styled.Container>
      <WaveDivider waveImg={TOP_WAVE_DIVIDER} dividerHeight={DIVIDER_HEIGHT} />

      <Screen>
        <>
          <LevitatingWrapper>
            <UltimateButton>Click me</UltimateButton>
          </LevitatingWrapper>
        </>
        <ButtonStates>
          <State>
            <Paragraph>Loading</Paragraph>
            <UltimateButton isLoading>BUTTON</UltimateButton>
          </State>

          <State>
            <Paragraph>Disabled</Paragraph>
            <UltimateButton disabled>Disabled</UltimateButton>
          </State>

          <State>
            <Paragraph>Completed</Paragraph>
            <UltimateButton isCompleted>Completed</UltimateButton>
          </State>
        </ButtonStates>
      </Screen>
    </Styled.Container>
  );
};

const ButtonStates = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};

  & p {
    writing-mode: vertical-rl;
    color: ${({ theme }) => theme.colors.primary.accent};
  }
`;

const State = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Screen = styled.div`
  height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};

  background-color: ${({ theme }) => theme.colors.primary.secondaryBg};
`;

const LevitatingWrapper = styled.div`
  animation: ${floatKeyframes} 5s ease-in-out infinite;
`;

export default Playgrounds;
