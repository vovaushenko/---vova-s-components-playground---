import React from 'react';
import styled from 'styled-components';
import UltimateButton from '../../showcase/UltimateButton/UltimateButton';
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
      <Screen>
        <UltimateButton isLoading>BUTTON</UltimateButton>
        <UltimateButton disabled>Disabled</UltimateButton>
        <UltimateButton isCompleted>Completed</UltimateButton>
        <UltimateButton>BUTTON</UltimateButton>
      </Screen>
      <Screen>
        <h1>hello</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim et
          expedita in iure, laborum natus quaerat repellendus voluptatem.
          Eligendi excepturi quas ratione vero voluptatibus. Accusantium magni
          numquam velit. Dolore facere fugiat modi molestias nesciunt pariatur
          quod reiciendis reprehenderit vero, voluptates. Ab animi asperiores
          deserunt ea, excepturi expedita, placeat porro possimus quasi quisquam
          saepe tenetur vitae.
        </p>
      </Screen>
    </Styled.Container>
  );
};

const Screen = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3rem;
`;

export default Playgrounds;
