import React, { useCallback, useState } from 'react';
import * as Styled from './UltimateButtonPage.styles';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import WaveDivider from '../../../components/Image/WaveDivider/WaveDivider';
import UltimateButton from '../../../showcase/UltimateButton/UltimateButton';
import Paragraph from '../../../components/Typography/Paragraph/Paragraph';
import Boop from '../../../components/Animations/Boop/Boop';
import { useActions } from '../../../hooks/useActions';
import UltimateButtonGitHub from '../../../components/Iframes/GitHubExamples/UltimateButtonGitHub/UltimateButtonGitHub';

/**
 *Renders Ultimate Button Released page
 *@function Playgrounds
 *@returns {JSX.Element} - Rendered UltimateButtonPage page
 */

const UltimateButtonPage = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const { theme } = useTypedSelector((state) => state.ui);
  const { openModal } = useActions();
  const DIVIDER_HEIGHT = '130px';
  const TOP_WAVE_DIVIDER =
    theme === 'dark'
      ? '/divider/dark-divider-bottom.svg'
      : '/divider/light-divider-bottom.svg';

  const performMockAction = () => {
    if (isCompleted) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsCompleted(true);
    }, 1500);
  };

  const handleGetSourceCode = useCallback(() => {
    openModal({
      id: 'ultimate-button-screen',
      width: '90vw',
      height: '90vh',
      content: <UltimateButtonGitHub />,
    });
  }, [openModal]);

  return (
    <Styled.Container>
      <WaveDivider waveImg={TOP_WAVE_DIVIDER} dividerHeight={DIVIDER_HEIGHT} />

      <Styled.Main>
        <Styled.LevitatingWrapper>
          <Boop boopConfig={{ scale: 1.1, rotation: 5 }}>
            <UltimateButton
              onClick={performMockAction}
              isLoading={isLoading}
              isCompleted={isCompleted}
            >
              {isCompleted ? '🎊 success 🎊' : 'click me'}
            </UltimateButton>
          </Boop>
        </Styled.LevitatingWrapper>

        <Styled.ButtonStates>
          <Styled.State>
            <Paragraph>Loading</Paragraph>
            <UltimateButton isLoading>BUTTON</UltimateButton>
          </Styled.State>

          <Styled.State>
            <Paragraph>Disabled</Paragraph>
            <UltimateButton disabled>Disabled</UltimateButton>
          </Styled.State>

          <Styled.State>
            <Paragraph>Completed</Paragraph>
            <UltimateButton isCompleted>Completed</UltimateButton>
          </Styled.State>
        </Styled.ButtonStates>

        <Styled.LevitatingWrapper>
          <Boop boopConfig={{ scale: 1.1, rotation: 5 }}>
            <UltimateButton onClick={handleGetSourceCode}>
              Source Code
            </UltimateButton>
          </Boop>
        </Styled.LevitatingWrapper>
      </Styled.Main>
    </Styled.Container>
  );
};

export default UltimateButtonPage;
