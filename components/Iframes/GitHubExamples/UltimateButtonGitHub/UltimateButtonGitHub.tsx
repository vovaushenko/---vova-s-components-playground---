import React from 'react';
import Iframe from '../../Iframe/Iframe';

/**
 *Returns embedded UltimateButtonGitHub iframe
 *@function Component
 *@returns {JSX.Element} - Rendered UltimateButtonGitHub component
 */
const UltimateButtonGitHub = (): JSX.Element => {
  return (
    <Iframe
      iframeSrc={
        'https://github1s.com/vovaushenko/my-components-playground/blob/master/showcase/UltimateButton/UltimateButton.tsx'
      }
      iframeSize={{ width: '100%', height: '100%' }}
      title={'Ultimate Button'}
      style={{
        border: 'none',
      }}
    />
  );
};

export default UltimateButtonGitHub;
