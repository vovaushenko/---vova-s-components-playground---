import React from 'react';
import styled from 'styled-components';
import * as Styled from './Playgrounds.styles';

/**
 *Renders playground screen where components will be tested
 *@function Playgrounds
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered Playgrounds component
 */
const Playgrounds = (): JSX.Element => {
  return (
    <Styled.Container>
      <GlassCard className={'background'}>
        <h3>Some title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, non.
        </p>
      </GlassCard>

      <CoolCard>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ea
          deserunt obcaecati id consectetur placeat?
        </p>
      </CoolCard>
    </Styled.Container>
  );
};
const CoolCard = styled.div`
  --shadow-color: 220deg 60% 50%;
  box-shadow: ${({ theme }) => theme.boxShadows.base};
`;

const GlassCard = styled.article`
  background-color: rgba(32, 189, 71, 0.3);
  --shadow-color: 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: ${({ theme }) => theme.spacing.lg};
  z-index: 1;
  border-radius: 1rem;

  box-shadow: ${({ theme }) => theme.boxShadows.byElevation.large};
`;

export default Playgrounds;
