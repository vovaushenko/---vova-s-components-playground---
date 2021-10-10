import type { NextPage } from 'next';
import React from 'react';
import Playgrounds from '../sreens/Playgrounds/Playgrounds';
import PageLayout from '../components/Layout/PageLayout/PageLayout';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Playgrounds />
    </PageLayout>
  );
};

export default Home;
