import React, { useRef } from 'react';
import * as Styled from './SettingsWidget.styles';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useCloseModalIfClickedOutside } from '../../../hooks/useCloseIfClickedOutside';
import { useActions } from '../../../hooks/useActions';

/**
 *@function SettingsWidget
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered CardContent component
 */
const SettingsWidget = (): JSX.Element => {
  const SETTINGS_WIDGET_WIDTH = 320;
  const containerRef = useRef<HTMLDivElement>(null);
  const { isSettingsWidgetOpen } = useTypedSelector((state) => state.ui);
  const { closeSettingsWidget } = useActions();

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
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
    </Styled.Container>
  );
};

export default SettingsWidget;
