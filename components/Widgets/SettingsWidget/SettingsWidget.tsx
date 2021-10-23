import React, { useCallback, useRef } from 'react';
import * as Styled from './SettingsWidget.styles';
import { ButtonsWrapper } from './SettingsWidget.styles';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useCloseModalIfClickedOutside } from '../../../hooks/useCloseIfClickedOutside';
import { useActions } from '../../../hooks/useActions';
import SliderControl from '../../Forms/SliderControl/SliderControl';
import { FiMoon, FiSun } from 'react-icons/fi';
import SettingsWidgetButton from './SettingsWidgetButton/SettingsWidgetButton';
import Boop from '../../Animations/Boop/Boop';

/**
 *@function SettingsWidgetButton
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered CardContent component
 */
const SettingsWidget = (): JSX.Element => {
  const SETTINGS_WIDGET_WIDTH = 320;
  const containerRef = useRef<HTMLDivElement>(null);
  const { isSettingsWidgetOpen } = useTypedSelector((state) => state.ui);
  const { closeSettingsWidget, toggleNightMode } = useActions();

  const handleToggleNightMode = useCallback(() => {
    toggleNightMode();
  }, [toggleNightMode]);

  useCloseModalIfClickedOutside({
    isModalOpen: isSettingsWidgetOpen,
    modalRef: containerRef,
    closeModalFunction: closeSettingsWidget,
  });

  return (
    <Styled.Container
      ref={containerRef}
      isOpen={isSettingsWidgetOpen}
      menuWidth={SETTINGS_WIDGET_WIDTH}
    >
      <ButtonsWrapper>
        <Boop boopConfig={{ x: 5, scale: 1.05 }}>
          <SettingsWidgetButton onClickAction={handleToggleNightMode}>
            <FiMoon />
            Night Mode
          </SettingsWidgetButton>
        </Boop>
      </ButtonsWrapper>

      <SliderControl name={'brightness'} icon={<FiSun />} />
    </Styled.Container>
  );
};

export default SettingsWidget;
