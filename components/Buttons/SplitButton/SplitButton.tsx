import React, { ReactNode, useRef, useState } from 'react';
import * as Styled from './SplitButton.styles';
import { FiChevronDown } from 'react-icons/fi';
import { useCloseModalIfClickedOutside } from '../../../hooks/useCloseIfClickedOutside';

export interface SplitButtonOption {
  id: number;
  icon: ReactNode;
  text: string;
  action: () => void;
}

export interface Props {
  text: string;
  options: SplitButtonOption[];
}

/**
 *@NOT RELEASED YET
 *@function SplitButton
 *@returns {JSX.Element} - Rendered CardContent component
 */
const SplitButton = ({ text, options }: Props): JSX.Element => {
  const [isPopupExpanded, setIsPopupExpanded] = useState<boolean>(false);
  const popupMenuRef = useRef<HTMLUListElement>(null);
  const handleTogglePopup = () => {
    setIsPopupExpanded((prev) => !prev);
  };

  const handleFocus = () => {
    setIsPopupExpanded(true);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.code === 'Escape') {
      setIsPopupExpanded(false);
    }
  };

  useCloseModalIfClickedOutside({
    isModalOpen: isPopupExpanded,
    modalRef: popupMenuRef,
    closeModalFunction: () => setIsPopupExpanded(false),
  });

  return (
    <Styled.Container>
      <Styled.Btn>{text}</Styled.Btn>
      <Styled.PopupControl
        aria-haspopup="true"
        aria-expanded="false"
        title="Open for more actions"
        onClick={handleTogglePopup}
        onFocus={handleFocus}
        onKeyUp={handleKeyUp}
        isPopupExpanded={isPopupExpanded}
      >
        <FiChevronDown className={'chevron__icon'} />

        <Styled.Popup ref={popupMenuRef} isPopupExpanded={isPopupExpanded}>
          {options.map((option) => (
            <li key={option.id}>
              <Styled.PopupButton onClick={option.action}>
                {option.icon}
                {option.text}
              </Styled.PopupButton>
            </li>
          ))}
        </Styled.Popup>
      </Styled.PopupControl>
    </Styled.Container>
  );
};

export default SplitButton;
