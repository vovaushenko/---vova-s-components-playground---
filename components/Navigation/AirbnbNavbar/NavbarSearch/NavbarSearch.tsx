import React, { useState } from 'react';
import * as Styled from './NavbarSearch.styles';
import { useNavbarSearchConfig } from './NavbarSearch.config';
import ComponentsList from '../../../Sections/ReleasedComponents/ComponentsList/ComponentsList';
import { useComponentsListConfig } from '../../../Sections/ReleasedComponents/ComponentsList/ComponentsList.config';
import RecentDevToArticles from '../../../Sections/MyArticles/RecentDevToArticles/RecentDevToArticles';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useSocialContacts } from '../../../../hooks/useContacts';
import Boop from '../../../Animations/Boop/Boop';
import IconButton from '../../../Buttons/IconButton/IconButton';
import SectionHeader from '../../../Typography/SectionHeader/SectionHeader';

export interface Props {
  isExpanded: boolean;
}

/**
 *@function NavbarSearch
 *@param {number} prop -
 *@returns {JSX.Element} - Rendered NavbarSearch component
 */
const NavbarSearch = ({ isExpanded }: Props): JSX.Element => {
  const [isSearchExpanded, setIsSearchExpanded] = useState<boolean>(false);
  const [searchContent, setSearchContent] = useState<string>('');
  const { searchOptions } = useNavbarSearchConfig();
  const { releasedComponents } = useComponentsListConfig();
  const { devToArticles } = useTypedSelector((state) => state.articles);
  const { myContacts } = useSocialContacts();

  const handleExpandSearch = (title: string) => {
    setIsSearchExpanded(true);
    setSearchContent(title);
  };

  return (
    <Styled.Container isExpanded={isExpanded}>
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
      {isSearchExpanded && (
        <Styled.SearchModal key={searchContent}>
          {searchContent === 'Components' && (
            <ComponentsList
              releasedComponents={releasedComponents}
              withFullArticleDescription={false}
            />
          )}
          {searchContent === 'Links' && (
            <>
              <SectionHeader variant={'l'}>Contact</SectionHeader>
              <Styled.SocialsList>
                {myContacts.map((contact) => (
                  <li key={contact.id}>
                    <Boop
                      boopConfig={{ rotation: 25, scale: 1.1, timing: 200 }}
                    >
                      <IconButton renderAs={'link'} href={contact.href}>
                        {contact.icon}
                      </IconButton>
                    </Boop>
                  </li>
                ))}
              </Styled.SocialsList>
            </>
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
