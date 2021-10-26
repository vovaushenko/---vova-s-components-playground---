import React, { useRef, useState } from 'react';
import * as Styled from './NavbarSearch.styles';
import { useNavbarSearchConfig } from './NavbarSearch.config';
import ComponentsList from '../../../Sections/ReleasedComponents/ComponentsList/ComponentsList';
import { useComponentsListConfig } from '../../../Sections/ReleasedComponents/ComponentsList/ComponentsList.config';
import RecentDevToArticles from '../../../Sections/MyArticles/RecentDevToArticles/RecentDevToArticles';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useSocialContacts } from '../../../../hooks/useContacts';
import NavSocialContacts from '../NavSocialContacts/NavSocialContacts';
import { useCloseModalIfClickedOutside } from '../../../../hooks/useCloseIfClickedOutside';

export interface Props {
  isExpanded: boolean;
}

/**
 *@function NavbarSearch
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered NavbarSearch component
 */
const NavbarSearch = ({ isExpanded }: Props): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSearchExpanded, setIsSearchExpanded] = useState<boolean>(false);
  const [searchContent, setSearchContent] = useState<string>('');
  const { devToArticles } = useTypedSelector((state) => state.articles);
  const { searchOptions } = useNavbarSearchConfig();
  const { releasedComponents } = useComponentsListConfig();
  const { myContacts } = useSocialContacts();

  const handleExpandSearch = (title: string) => {
    setIsSearchExpanded(true);
    setSearchContent(title);
  };

  useCloseModalIfClickedOutside({
    modalRef: containerRef,
    isModalOpen: isSearchExpanded,
    closeModalFunction: () => setIsSearchExpanded(false),
  });

  return (
    <Styled.Container isExpanded={isExpanded} ref={containerRef}>
      {/* SEARCH OPTIONS */}
      <Styled.SearchOptionsList>
        {searchOptions.map((option) => (
          <li key={option.id}>
            <Styled.SearchOption
              onClick={() => handleExpandSearch(option.title)}
            >
              <span className={'title'}>{option.title}</span>
              <span className={'description'}>{option.description}</span>
            </Styled.SearchOption>
          </li>
        ))}
      </Styled.SearchOptionsList>
      {/* === END OF SEARCH OPTIONS === */}

      {/* EXPANDABLE MODAL WITH SEARCH RESULTS  */}
      {isSearchExpanded && (
        <Styled.SearchModal key={searchContent}>
          {searchContent === 'Components' && (
            <ComponentsList
              releasedComponents={releasedComponents}
              withFullArticleDescription={false}
            />
          )}
          {searchContent === 'Links' && (
            <NavSocialContacts socialContacts={myContacts} />
          )}
          {searchContent === 'Articles' && (
            <RecentDevToArticles devToArticles={devToArticles} />
          )}
        </Styled.SearchModal>
      )}
    </Styled.Container>
  );
};
export default NavbarSearch;
