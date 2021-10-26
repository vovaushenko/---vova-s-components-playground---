export const useNavbarSearchConfig = (): {
  searchOptions: INavSearchOption[];
} => {
  const searchOptions: INavSearchOption[] = [
    {
      id: 1,
      title: 'Components',
      description: 'Released components',
    },
    {
      id: 2,
      title: 'Articles',
      description: 'Latest articles',
    },
    {
      id: 3,
      title: 'Links',
      description: 'Useful Links',
    },
  ];

  return { searchOptions };
};

interface INavSearchOption {
  id: number;
  title: string;
  description: string;
}
