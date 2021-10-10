import React from 'react';
import AirbnbNavbar from '../../Navigation/AirbnbNavbar/AirbnbNavbar';
import SettingsControl from '../../UI/SettingsControl/SettingsControl';
import SettingsWidget from '../../Widgets/SettingsWidget/SettingsWidget';
import styled from 'styled-components';

/**
 *@function PageLayout
 *@returns {JSX.Element} - Rendered CardContent component
 */
const PageLayout: React.FunctionComponent = ({ children }): JSX.Element => {
  return (
    <LayoutContainer>
      <AirbnbNavbar />
      <SettingsControl />
      <SettingsWidget />
      <Main>{children}</Main>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.section``;
const Main = styled.main``;

export default PageLayout;
