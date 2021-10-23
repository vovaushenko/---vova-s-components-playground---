import React from 'react';
import AirbnbNavbar from '../../Navigation/AirbnbNavbar/AirbnbNavbar';
import SettingsControl from '../../UI/SettingsControl/SettingsControl';
import SettingsWidget from '../../Widgets/SettingsWidget/SettingsWidget';
import styled from 'styled-components';
import PlaygroundsFooter from '../../Footers/PlaygroundsFooter/PlaygroundsFooter';
import OpenModalsContainer from '../../Modals/OpenModalsContainer/OpenModalsContainer';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

/**
 *Provides main layout for the app's pages. Also used to inject global styling modes, such as Night Mode.
 *@function PageLayout
 *@returns {JSX.Element} - Rendered CardContent component
 */
const PageLayout: React.FunctionComponent = ({ children }): JSX.Element => {
  const { isInNightMode } = useTypedSelector((state) => state.ui);

  return (
    <LayoutContainer>
      <AirbnbNavbar />
      <SettingsControl />
      <SettingsWidget />
      <OpenModalsContainer />
      <Main isInNightMode={isInNightMode}>{children}</Main>
      <PlaygroundsFooter />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.section``;

interface MainWrapperProps {
  isInNightMode: boolean;
}

const Main = styled.main<MainWrapperProps>`
  filter: ${({ isInNightMode }) => (isInNightMode ? 'sepia(70%)' : '')};
`;

export default PageLayout;
