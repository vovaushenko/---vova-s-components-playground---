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
      title: 'Links',
      description: 'Useful Links',
    },
    {
      id: 3,
      title: 'Articles',
      description: 'Latest articles',
    },
  ];

  return { searchOptions };
};

interface INavSearchOption {
  id: number;
  title: string;
  description: string;
}
